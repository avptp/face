import { useTranslation } from "react-i18next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Error from "../components/error";

export default function NotFound() {
  const { t } = useTranslation("errors");
  const type = "notFound";

  return (
    <>
      <NextSeo
        title={t(`${type}.viewTitle`)}
        description={t("title")}
        noindex={true}
        nofollow={true}
      />
      <Error type={type} />
    </>
  );
}
