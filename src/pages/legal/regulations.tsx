import { useTranslation } from "react-i18next";
import { NextSeo } from "next-seo";
import Legal from "../../components/legal";
import Markdown from "react-markdown";
import RehypeRaw from "rehype-raw";

export default function Regulations() {
  const { t, i18n } = useTranslation("regulations");

  return (
    <>
      <NextSeo title={t("viewTitle")} />
      <Legal>
        <Markdown linkTarget="_blank" rehypePlugins={[RehypeRaw]}>
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
