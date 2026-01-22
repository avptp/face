import { useTranslation } from "react-i18next";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import Navigation from "../components/navigation";
import Team from "../components/team";

export default function TeamView() {
  const { t } = useTranslation("team");

  return (
    <>
      <Head>
        {generateNextSeo({
          title: t("viewTitle"),
        })}
      </Head>
      <Navigation />
      <Team />
    </>
  );
}
