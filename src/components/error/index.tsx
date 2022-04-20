import { useTranslation } from "react-i18next";
import Link from "next/link";
import Navigation from "../navigation";

function randomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

type Props = {
  type: string;
};

export default function Error({ type }: Props) {
  const { t } = useTranslation("errors");

  return (
    <>
      <Navigation disableControls={true} />
      <section className="error">
        <div className="message">
          <div className="title">{t("title")}</div>
          <div className="subtitle">{t(`${type}.description`)}</div>
          <div className="actions">
            <Link href={t(`${type}.actions.primary.link`)}>
              <a className="button">{t(`${type}.actions.primary.text`)}</a>
            </Link>
          </div>
        </div>
        <div
          className={`illustration ${randomItem([
            "bus",
            "metro",
            "train",
            "tram",
          ])}`}
        />
      </section>
    </>
  );
}
