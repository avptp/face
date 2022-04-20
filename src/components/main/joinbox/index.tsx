import { useState } from "react";
import { useTranslation } from "react-i18next";
import Display from "../../display";
import associateIcon from "../../../images/icons/associate.svg";
import supportIcon from "../../../images/icons/support.svg";

type Props = {
  type: string;
};

export default function JoinBox(props: Props) {
  const { type } = props;
  const [clicked, setClicked] = useState(false);
  const { t } = useTranslation("common");

  return (
    <div className={`join-box ${type}`}>
      <div className="box">
        <div className="icon">
          <img
            src={type === "suport" ? supportIcon.src : associateIcon.src}
            alt=""
          />
        </div>
        <div className="title">{t(`main:join.${type}.title`)}</div>

        <Display if={!clicked}>
          <p>{t(`main:join.${type}.description`)}</p>
          <hr />
          <ul>
            <Display if={type === "support"}>
              <li>{t("main:join.support.advantages.stickTogether")}</li>
              <li>{t("main:join.support.advantages.stayTuned")}</li>
              <li>{t("main:join.support.advantages.involve")}</li>
            </Display>
            <Display if={type === "associate"}>
              <li>{t("main:join.associate.advantages.supporterOnes")}</li>
              <li>{t("main:join.associate.advantages.financialSupport")}</li>
              <li>{t("main:join.associate.advantages.associationBodies")}</li>
              <li>{t("main:join.associate.advantages.attendAndVote")}</li>
            </Display>
          </ul>
          <a
            href={`mailto:socis@avptp.org?subject=${encodeURI(
              t(`main:join.${type}.email.subject`)
            )}&body=${encodeURI(t(`main:join.${type}.email.body`))}`}
            onClick={() => setClicked(true)}
            className="button reverse"
          >
            {t(`main:join.${type}.action`)}
          </a>
        </Display>
        <Display if={clicked}>
          <div>
            <p>{t("main:join.instructions.explain")}</p>
            <div className="instructions">
              <div>
                <strong>{t("main:join.instructions.direction")}:</strong>{" "}
                socis@avptp.org
              </div>
              <div>
                <strong>{t("main:join.instructions.subject")}:</strong>{" "}
                {t(`main:join.${type}.email.subject`)}
              </div>
              <div>
                <strong>{t("main:join.instructions.body")}:</strong>
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  {t(`main:join.${type}.email.body`)}
                </pre>
              </div>
            </div>
          </div>
        </Display>
      </div>
    </div>
  );
}
