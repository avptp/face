import { useTranslation } from "react-i18next";
import linkedinLogo from "../../images/social/linkedin.svg";
import xLogo from "../../images/social/x.svg";

export default function Team() {
  const { t } = useTranslation("team");

  return (
    <>
      <section className="team">
        <div className="category">
          <div className="title">{t("representativeBody.name")}</div>
          {/* <div className="tags">
            <span className="tag">{t("representativeBody.mandate")}</span>
            <span className="tag">{t("representativeBody.period")}</span>
          </div> */}
          <div className="description">
            {t("representativeBody.description")}
          </div>
          <div className="persons">
            <div className="person">
              <img
                className="avatar"
                src="https://secure.gravatar.com/avatar/e3a28699f06d6e792a97f14ed04b233cb2adf375144698a23494678d3736fa2a.jpg?d=retro&s=300"
                alt=""
              />
              <div className="name">Jaime Paricio</div>
              <div className="position">
                {t("representativeBody.positions.president")}
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
                src="https://secure.gravatar.com/avatar/119f8c4fccd72f03ede8adfb137e4c6d?d=retro&s=300"
                alt=""
              />
              <div className="name">Aitor Escorza Ripoll</div>
              <div className="position">
                {t("representativeBody.positions.vicePresident")}
              </div>
              <div className="social">
                <a
                  href="https://www.linkedin.com/in/escorza-ripoll/"
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
                src="https://secure.gravatar.com/avatar/c553c226977e0d588eb270a4638db5cf1a6acbe9ba5a26523e31f120640bd544.jpg?d=retro&s=300"
                alt=""
              />
              <div className="name">Christian Arnal Palacios</div>
              <div className="position">
                {t("representativeBody.positions.secretary")}
              </div>
              <div className="social">
                <a
                  href="https://es.linkedin.com/in/christian-arnal"
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
                src="https://secure.gravatar.com/avatar/9a46f61932ea70a9925957f924d0fff2.jpg?d=retro&s=300"
                alt=""
              />
              <div className="name">Rafa Bayona Llop</div>
              <div className="position">
                {t("representativeBody.positions.treasurer")}
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
      </section>
    </>
  );
}
