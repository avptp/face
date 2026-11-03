import { useTranslation } from "react-i18next";
import linkedinLogo from "../../images/social/linkedin.svg";
import xLogo from "../../images/social/x.svg";

export default function Team() {
  const { t } = useTranslation("team");

  const people = [
    {
      name: "Aitor Escorza Ripoll",
      position: "president",
      avatar:
        "https://secure.gravatar.com/avatar/119f8c4fccd72f03ede8adfb137e4c6d?d=retro&s=300",
      socialUrl: "https://www.linkedin.com/in/escorza-ripoll/",
      socialLogo: linkedinLogo.src,
      socialName: "LinkedIn",
    },
    {
      name: "Jaime Paricio García",
      position: "vicePresident",
      avatar:
        "https://secure.gravatar.com/avatar/e3a28699f06d6e792a97f14ed04b233cb2adf375144698a23494678d3736fa2a.jpg?d=retro&s=300",
      socialUrl: "https://www.linkedin.com/in/jaime-paricio-garcia",
      socialLogo: linkedinLogo.src,
      socialName: "LinkedIn",
    },
    {
      name: "Rafael Bayona Llop",
      position: "treasurer",
      avatar:
        "https://secure.gravatar.com/avatar/9a46f61932ea70a9925957f924d0fff2.jpg?d=retro&s=300",
      socialUrl: "https://www.linkedin.com/in/rafa-bayona",
      socialLogo: linkedinLogo.src,
      socialName: "LinkedIn",
    },
    {
      name: "Christian Arnal Palacios",
      position: "secretary",
      avatar:
        "https://secure.gravatar.com/avatar/c553c226977e0d588eb270a4638db5cf1a6acbe9ba5a26523e31f120640bd544.jpg?d=retro&s=300",
      socialUrl: "https://es.linkedin.com/in/christian-arnal",
      socialLogo: linkedinLogo.src,
      socialName: "LinkedIn",
    },
    {
      name: "Antoine Huré",
      position: "boardMember1",
      avatar: "https://secure.gravatar.com/avatar/?d=mp&s=300",
      socialUrl: "https://www.linkedin.com/in/tonihure/",
      socialLogo: linkedinLogo.src,
      socialName: "LinkedIn",
    },
    {
      name: "Martín Montón Sanchis",
      position: "boardMember2",
      avatar:
        "https://secure.gravatar.com/avatar/614be9cb8ee58ef39599fe8dc0c83331?d=retro&s=300",
      socialUrl: "https://x.com/martnmontn",
      socialLogo: xLogo.src,
      socialName: "X",
    },
    {
      name: "Javier Prats Baixauli",
      position: "boardMember3",
      avatar: "https://secure.gravatar.com/avatar/?d=mp&s=300",
      socialUrl:
        "https://www.linkedin.com/in/javier-prats-baixauli-73a507248/",
      socialLogo: linkedinLogo.src,
      socialName: "LinkedIn",
    },
    {
      name: "Marc Salomón Uroz",
      position: "boardMember4",
      avatar: "https://secure.gravatar.com/avatar/?d=mp&s=300",
      socialUrl:
        "https://www.linkedin.com/in/marc-salom%C3%B3n-uroz-56a299254/",
      socialLogo: linkedinLogo.src,
      socialName: "LinkedIn",
    },
    {
      name: "Martí Sanchis Román",
      position: "boardMember5",
      avatar: "https://secure.gravatar.com/avatar/?d=mp&s=300",
      socialUrl: "https://www.linkedin.com/in/msanchis2/",
      socialLogo: linkedinLogo.src,
      socialName: "LinkedIn",
    },
  ];

  return (
    <section className="team">
      <div className="category">
        <div className="title">{t("representativeBody.name")}</div>

        <div className="description">
          {t("representativeBody.description")}
        </div>

        <div className="persons">
          {people.map((person) => (
            <div className="person" key={person.name}>
              <img
                className="avatar"
                src={person.avatar}
                alt={person.name}
              />

              <div className="name">{person.name}</div>

              <div className="position">
                {t(`representativeBody.positions.${person.position}`)}
              </div>

              <div className="social">
                <a
                  href={person.socialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${person.socialName} de ${person.name}`}
                >
                  <img
                    className="icon"
                    src={person.socialLogo}
                    alt={person.socialName}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
