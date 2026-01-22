import { useTranslation } from "react-i18next";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import Error from "../components/error";

export default function NotFound() {
  const { t } = useTranslation("errors");
  const type = "notFound";

  return (
    <>
      <Head>
        {generateNextSeo({
          title: t(`${type}.viewTitle`),
          description: t("title"),
          noindex: true,
          nofollow: true,
        })}
      </Head>
      <Error type={type} />
    </>
  );
}
