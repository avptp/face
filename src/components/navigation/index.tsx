import Link from "next/link";
import { useTranslation } from "react-i18next";
import arrowLeft from "../../images/icons/arrow-left.svg";
import imagotypeWhite from "../../images/imagotype_white.svg";

type Props = {
  disableControls?: boolean;
};

export default function Navigation(props: Props) {
  const { t } = useTranslation("common");

  return (
    <nav>
      <div className="control">
        {!props.disableControls && (
          <Link href="/">
            <img src={arrowLeft.src} alt="" />
          </Link>
        )}
      </div>
      <Link href="/" className="imagotype">
        <img src={imagotypeWhite.src} alt={t("appName")} />
      </Link>
      <div className="actions" />
    </nav>
  );
}
