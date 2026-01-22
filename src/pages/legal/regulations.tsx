import { useTranslation } from "react-i18next";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import Legal from "../../components/legal";
import Markdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import rehypeExternalLinks from 'rehype-external-links'

export default function Regulations() {
  const { t, i18n } = useTranslation("regulations");

  return (
    <>
      <Head>
        {generateNextSeo({
          title: t("viewTitle"),
        })}
      </Head>
      <Legal>
        <Markdown rehypePlugins={[RehypeRaw, [rehypeExternalLinks, {target: "_blank"}]]}>
          {t("markdown")}
        </Markdown>
      </Legal>
      <section className="download">
        <a
          href={`/documents/regulations/${i18n.resolvedLanguage}.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          {t("common:download")}
        </a>
      </section>
    </>
  );
}
