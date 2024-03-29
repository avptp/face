import { useTranslation } from "react-i18next";
import { NextSeo } from "next-seo";
import Main from "../components/main";

export default function MainView() {
  const { t } = useTranslation("main");

  return (
    <>
      <NextSeo description={t("description")} />
      <Main />
    </>
  );
}
