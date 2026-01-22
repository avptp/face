import { NextPageContext } from "next";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import { useRouter } from "next/router";
import { Request } from "../types/request";
import i18n from "../i18n";
import { CookiesProvider } from 'react-cookie';
import { I18nextProvider } from "react-i18next";
import { t } from "i18next";
import Head from "next/head";
import { generateDefaultSeo } from "next-seo/pages";
import { LanguageAlternate } from "../types/language";
import Footer from "../components/footer";
import CookieNotice from "../components/cookienotice";
import "../components/_app/styles.scss";
import "../components/cookienotice/styles.scss";
import "../components/error/styles.scss";
import "../components/footer/styles.scss";
import "../components/legal/styles.scss";
import "../components/main/styles.scss";
import "../components/main/joinbox/styles.scss";
import "../components/navigation/styles.scss";
import "../components/team/styles.scss";

type Props = AppProps & {
  acceptedCookies: boolean;
};

function CustomApp({ Component, pageProps, acceptedCookies }: Props) {
  const router = useRouter();

  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.pathname}`;

  return (
    <>
      <Head>
        {generateDefaultSeo({
          titleTemplate: `${t("appName")}: %s`,
          defaultTitle: t("appName"),
          canonical: `${baseUrl}?hl=${i18n.resolvedLanguage}`,
          languageAlternates: getLanguageAlternates(baseUrl),
          additionalMetaTags: [
            {
              property: "theme-color",
              content: "#5fc1c8",
            },
          ],
          additionalLinkTags: [
            {
              rel: "manifest",
              href: "/manifest.json",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/static/icons/favicon-32x32.png",
            },
            {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/static/icons/favicon-16x16.png",
            },
            {
              rel: "shortcut icon",
              href: "/favicon.ico",
            },
            {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/static/icons/apple-touch-icon.png",
            },
            {
              rel: "mask-icon",
              href: "/static/icons/safari-pinned-tab.svg",
              color: "#050608",
            },
          ],
          openGraph: {
            type: "website",
            locale: t("languages:fullCode"),
            site_name: t("appName"),
            images: [
              {
                url: "/static/preview.png",
                width: 1200,
                height: 630,
                type: "image/png",
              },
            ],
          },
          twitter: {
            site: "@avptp",
            handle: "@avptp",
            cardType: "summary_large_image",
          },
        })}
      </Head>

      <CookiesProvider>
        <I18nextProvider i18n={i18n}>
          <Component {...pageProps} />
          <Footer />
          <CookieNotice hidden={acceptedCookies} />
        </I18nextProvider>
      </CookiesProvider>
    </>
  );
}

// This function must be defined in order to force
// disabling automatic static optimization of "_document"
CustomApp.getInitialProps = async (
  ctx: AppContext & { ctx: NextPageContext & { req: Request } }
) => {
  const { req } = ctx.ctx;

  return {
    ...(await App.getInitialProps(ctx)),
    acceptedCookies:
      req && req.cookies.cookies ? req.cookies.cookies === "true" : false,
  };
};

function getLanguageAlternates(baseUrl: string): LanguageAlternate[] {
  let supported = i18n.options.supportedLngs || [];
  supported = supported.filter((item) => item !== "cimode").reverse();

  var languages: LanguageAlternate[] = [
    {
      hrefLang: "x-default",
      href: `${baseUrl}?hl=ca`,
    },
  ];

  supported.forEach((language) =>
    languages.unshift({
      hrefLang: language,
      href: `${baseUrl}?hl=${language}`,
    })
  );

  return languages;
}

export default CustomApp;
