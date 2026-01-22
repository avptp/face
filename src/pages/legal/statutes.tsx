import { useTranslation } from "react-i18next";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import Legal from "../../components/legal";
import Markdown from "react-markdown";
import rehypeExternalLinks from 'rehype-external-links'

export default function Statutes() {
  const { t, i18n } = useTranslation("statutes");

  return (
    <>
      <Head>
        {generateNextSeo({
          title: t("viewTitle"),
        })}
      </Head>
      <Legal>
        <Markdown rehypePlugins={[[rehypeExternalLinks, {target: "_blank"}]]}>{t("markdown")}</Markdown>
        <div className="document" />
      </Legal>
      <section className="download">
        <a
          href={`/documents/statutes/${i18n.resolvedLanguage}.pdf`}
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
