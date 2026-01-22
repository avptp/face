import { useTranslation } from "react-i18next";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import Main from "../components/main";

export default function MainView() {
  const { t } = useTranslation("main");

  return (
    <>
      <Head>
        {generateNextSeo({
          description: t("description"),
        })}
      </Head>
      <Main />
    </>
  );
}
