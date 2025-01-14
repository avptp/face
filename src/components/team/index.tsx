import { useTranslation } from "react-i18next";
import blueskyLogo from "../../images/social/bluesky.svg";
import githubLogo from "../../images/social/github.svg";
import linkedinLogo from "../../images/social/linkedin.svg";
import xLogo from "../../images/social/x.svg";
import webLogo from "../../images/social/web.svg";

export default function Team() {
  const { t } = useTranslation("team");

  return (
    <>
      <section className="team">
        <div className="category">
          <div className="title">{t("representativeBody.name")}</div>
          <div className="tags">
            <span className="tag">{t("representativeBody.mandate")}</span>
            <span className="tag">{t("representativeBody.period")}</span>
          </div>
          <div className="description">
            {t("representativeBody.description")}
          </div>
          <div className="persons">
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/b2c1e221fd0a5a52d01a01278e285742.jpg?d=retro&s=300"
                alt=""
              />
              <div className="name">Jaime Paricio</div>
              <div className="position">
                {t("representativeBody.positions.president")}
              </div>
              <div className="co-founder">
                {t("representativeBody.co-founder")}
              </div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/jaime-paricio-garcia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={linkedinLogo.src} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/73d7fd71768fc5305e22fe14dc0bc205.jpg?d=retro&s=300"
                alt=""
              />
              <div className="name">Víctor Díaz Marco</div>
              <div className="position">
                {t("representativeBody.positions.vicePresident")}
              </div>
              <div className="co-founder">
                {t("representativeBody.co-founder")}
              </div>
              <div className="social">
                <a
                  href="https://linkedin.com/in/v0ctor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={linkedinLogo.src} alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/v0ctor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={githubLogo.src} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/5338dcd43ada152f033b638ceaada0af.jpg?d=retro&s=300"
                alt=""
              />
              <div className="name">Fran Torregrosa Alegre</div>
              <div className="position">
                {t("representativeBody.positions.secretary")}
              </div>
              <div className="co-founder">
                {t("representativeBody.co-founder")}
              </div>
              <div className="social">
                <a
                  href="https://frantorregrosa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={webLogo.src} alt="Web" />
                </a>
                <a
                  href="https://www.linkedin.com/in/frantorreg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={linkedinLogo.src} alt="LinkedIn" />
                </a>
                <a
                  href="https://x.com/frantorreg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={xLogo.src} alt="X" />
                </a>
                <a
                  href="https://github.com/frantorreg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={githubLogo.src} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/9a46f61932ea70a9925957f924d0fff2.jpg?d=retro&s=300"
                alt=""
              />
              <div className="name">Rafa Bayona Llop</div>
              <div className="position">
                {t("representativeBody.positions.treasurer")}
              </div>
              <div className="co-founder">
                {t("representativeBody.co-founder")}
              </div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/rafa-bayona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={linkedinLogo.src} alt="LinkedIn" />
                </a>
              </div>
            </div>
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/614be9cb8ee58ef39599fe8dc0c83331?d=retro&s=300"
                alt=""
              />
              <div className="name">Martín Montón Sanchis</div>
              <div className="position">
                {t("representativeBody.positions.spokesperson")}
              </div>
              <div className="co-founder">
                {t("representativeBody.co-founder")}
              </div>
              <div className="social">
                <a
                  href="https://x.com/martnmontn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={xLogo.src} alt="X" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="title">{t("collaborators.name")}</div>
          <div className="description">{t("collaborators.description")}</div>
          <div className="persons">
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/a4adeaa7ab008361255f9d093bf901ac?d=retro&s=300"
                alt=""
              />
              <div className="name">Domingo Rodríguez León</div>
              <div className="position">
                {t("representativeBody.positions.audiovisualContentCreator")}
              </div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/domi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={linkedinLogo.src} alt="LinkedIn" />
                </a>
                <a
                  href="https://x.com/Domirole"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={xLogo.src} alt="X" />
                </a>
              </div>
            </div>
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/8d8c1604c5999ddba3ffe0e8dcd5330e?d=retro&s=300"
                alt=""
              />
              <div className="name">Rubén</div>
              <div className="position">
                {t("representativeBody.positions.audiovisualContentCreator")}
              </div>
              <div className="social">
                <a
                  href="https://x.com/yrubenx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={xLogo.src} alt="X" />
                </a>
              </div>
            </div>
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/19f5c23e7d5c453e6a01238a2130748b?d=retro&s=300"
                alt=""
              />
              <div className="name">Eloy Sanchis López</div>
              <div className="position">
                {t("representativeBody.positions.audiovisualContentCreator")}
              </div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/eloysanchislopez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={linkedinLogo.src} alt="LinkedIn" />
                </a>
                <a
                  href="https://x.com/EloySanchis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={xLogo.src} alt="X" />
                </a>
              </div>
            </div>
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/eab87f045b2b670a92dd0238522d84bc?d=retro&s=300"
                alt=""
              />
              <div className="name">Miguel Sánchez Valdés</div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/miguelsanchezvaldes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={linkedinLogo.src} alt="LinkedIn" />
                </a>
                <a
                  href="https://x.com/miguemito"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="icon" src={xLogo.src} alt="X" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="category">
          <div className="title">{t("geographicalWorkGroup.name")}</div>
          <div className="description">
            {t("geographicalWorkGroup.description")}
          </div>
          <div className="subcategory">
            <div className="title">{t("geographicalWorkGroup.alacant")}</div>
            <div className="persons">
              <div className="person">
                <img
                  className="avatar"
                  src="https://secure.gravatar.com/avatar/0187eb8a7e27551478017eb47776d287?d=retro&s=300"
                  alt=""
                />
                <div className="name">Marcos Salomón Uroz</div>
                <div className="social">
                  <a
                    href="https://x.com/enros___"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="icon" src={xLogo.src} alt="X" />
                  </a>
                </div>
              </div>
              <div className="person">
                <img
                  className="avatar"
                  src="https://secure.gravatar.com/avatar/119f8c4fccd72f03ede8adfb137e4c6d?d=retro&s=300"
                  alt=""
                />
                <div className="name">Aitor Escorza Ripoll</div>
                <div className="social">
                  <a
                    href="https://www.linkedin.com/in/escorza-ripoll/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon"
                      src={linkedinLogo.src}
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subcategory">
            <div className="title">{t("geographicalWorkGroup.valencia")}</div>
            <div className="persons">
              <div className="person">
                <img
                  className="avatar"
                  src="https://secure.gravatar.com/avatar/cee59ae100615da15fe32f2436ee20a4?d=retro&s=300"
                  alt=""
                />
                <div className="name">Adrián García Terrádez</div>
                <div className="social">
                  <a
                    href="https://x.com/Terradez_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="icon" src={xLogo.src} alt="X" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
