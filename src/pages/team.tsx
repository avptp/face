import { useTranslation } from "react-i18next";
import { NextSeo } from "next-seo";
import Navigation from "../components/navigation";
import Team from "../components/team";

export default function TeamView() {
  const { t } = useTranslation("team");

  return (
    <>
      <NextSeo title={t("viewTitle")} />
      <Navigation />
      <Team />
    </>
  );
}
