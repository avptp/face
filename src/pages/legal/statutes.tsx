import { useTranslation } from "react-i18next";
import { NextSeo } from "next-seo";
import Legal from "../../components/legal";
import Markdown from "react-markdown";

export default function Statutes() {
  const { t, i18n } = useTranslation("statutes");

  return (
    <>
      <NextSeo title={t("viewTitle")} />
      <Legal>
        <Markdown linkTarget="_blank">{t("markdown")}</Markdown>
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
