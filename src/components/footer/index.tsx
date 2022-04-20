import { useTranslation } from "react-i18next";
import Link from "next/link";
import imagotype from "../../images/imagotype.svg";
import facebookLogo from "../../images/social/facebook.svg";
import githubLogo from "../../images/social/github.svg";
import instagramLogo from "../../images/social/instagram.svg";
import linkedinLogo from "../../images/social/linkedin.svg";
import telegramLogo from "../../images/social/telegram.svg";
import twitterLogo from "../../images/social/twitter.svg";
import youtubeLogo from "../../images/social/youtube.svg";

export default function Footer() {
  const { t, i18n } = useTranslation("footer");

  let languages = i18n.options.supportedLngs || [];
  languages = languages.filter((item) => item !== "cimode");

  return (
    <footer>
      <div className="legal">
        <Link href="/">
          <a>
            <img
              className="imagotype"
              src={imagotype.src}
              alt={t("common:appName")}
            />
          </a>
        </Link>
        <p>{t("registration", { number: "CV-01-058990-V" })}</p>
        <p>{t("taxNumber", { number: "G98998719" })}</p>
      </div>
      <div className="extra">
        <div className="links">
          <Link href="/legal/statutes">{t("common:statutes")}</Link>
          <Link href="/legal/regulations">{t("common:regulations")}</Link>
          <Link href="/team">{t("team:name")}</Link>
          <a href="https://blog.avptp.org">{t("common:blog")}</a>
        </div>
        <div className="social">
          <div className="title">{t("followUs")}</div>
          <a
            href="https://twitter.com/avptp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={twitterLogo.src} alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/avptp.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={facebookLogo.src} alt="Facebook" />
          </a>
          <a
            href="https://t.me/avptp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={telegramLogo.src} alt="Telegram" />
          </a>
          <a
            href="https://www.instagram.com/avptp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={instagramLogo.src} alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCG-AS9LUPEZK3NagPhXy4Tw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={youtubeLogo.src} alt="YouTube" />
          </a>
          <a
            href="https://www.linkedin.com/company/avptp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={linkedinLogo.src} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/avptp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="icon" src={githubLogo.src} alt="GitHub" />
          </a>
        </div>
        <select
          className="language"
          value={i18n.resolvedLanguage}
          onChange={(event) => i18n.changeLanguage(event.target.value)}
        >
          {languages.map((language: string) => {
            return (
              <option key={language} value={language}>
                {t(`languages:${language}`)}
              </option>
            );
          })}
        </select>
      </div>
    </footer>
  );
}
