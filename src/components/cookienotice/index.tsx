import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";

type Props = {
  hidden: boolean;
};

export default function CookieNotice(props: Props) {
  const { t } = useTranslation("cookies");
  const [cookie, setCookie] = useCookies(["cookies"]);
  const [accepted, setAccepted] = useState(cookie.cookies === "true");

  useEffect(() => {
    setCookie("cookies", accepted, {
      path: "/",
      secure: true,
      maxAge: 365 * 24 * 60 * 60,
    });
  }, [setCookie, accepted]);

  if (props.hidden || accepted) {
    return null;
  }

  return (
    <div className="cookie-notice">
      <div className="text">
        <span>{t("message")}</span>
      </div>
      <div className="actions">
        <a href={t("link")} target="_blank" rel="noopener noreferrer">
          {t("information")}
        </a>
        <button onClick={() => setAccepted(true)}>{t("accept")}</button>
      </div>
    </div>
  );
}
