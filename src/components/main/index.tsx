import React from "react";
import { TFunction, TFunctionKeys } from "i18next";
import { withTranslation } from "react-i18next";
import Link from "next/link";
import { Point, ResponsiveLine } from "@nivo/line";
import JoinBox from "./joinbox";
import generalInterestIcon from "../../images/icons/general-interest.svg";
import integrationIcon from "../../images/icons/integration.svg";
import planningIcon from "../../images/icons/planning.svg";
import rightIcon from "../../images/icons/right.svg";
import sustainabilityIcon from "../../images/icons/sustainability.svg";
import universalityIcon from "../../images/icons/universality.svg";
import vertebrationIcon from "../../images/icons/vertebration.svg";
import imagotypeWhite from "../../images/imagotype_white.svg";

type Props = {
  t: TFunction;
};

type State = {};

class Main extends React.Component<Props, State> {
  fixed: boolean = false;

  introRef: React.RefObject<HTMLDivElement> = React.createRef();
  wrapperRef: React.RefObject<HTMLDivElement> = React.createRef();
  joinRef: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: Props) {
    super(props);

    if (typeof window !== "undefined") {
      this.handleScroll = this.handleScroll.bind(this);
    }
  }

  componentDidMount() {
    this.handleScroll();

    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const introduction = this.introRef.current;
    const wrapper = this.wrapperRef.current;

    if (!introduction || !wrapper) {
      return;
    }

    const scrollTop = document?.scrollingElement?.scrollTop || 0,
      limit = introduction.clientHeight - wrapper.clientHeight;

    if (limit === 0) {
      return;
    }

    if (scrollTop > limit) {
      if (this.fixed) {
        this.fixed = false;

        wrapper.classList.remove("fixed");
      }

      wrapper.style.marginTop = `${limit}px`;
    } else if (!this.fixed) {
      this.fixed = true;

      wrapper.classList.add("fixed");
      wrapper.style.marginTop = "initial";
    }
  }

  render() {
    const { t } = this.props;

    return (
      <>
        <header className="main">
          <div className="introduction" ref={this.introRef}>
            <div className="wrapper" ref={this.wrapperRef}>
              <img className="imagotype" src={imagotypeWhite.src} alt="" />
              <p className="title">{t("main:introduction.title")}</p>
              <p className="subtitle">{t("main:introduction.subtitle")}</p>
              <div className="buttons">
                <Link href="/legal/statutes">
                  <a className="button light">{t("common:statutes")}</a>
                </Link>
                <Link href="/legal/regulations">
                  <a className="button light">{t("common:regulations")}</a>
                </Link>
                <button
                  className="button light reverse"
                  onClick={() => {
                    this.joinRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  {t("common:join")} ↓
                </button>
              </div>
            </div>
          </div>
          <div className="purposes">
            {(() => {
              type Purpose = {
                name: string;
                icon: any;
              };

              const purposes: Purpose[] = [
                { name: "right", icon: rightIcon },
                { name: "vertebration", icon: vertebrationIcon },
                { name: "universality", icon: universalityIcon },
                { name: "planning", icon: planningIcon },
                { name: "integration", icon: integrationIcon },
                { name: "sustainability", icon: sustainabilityIcon },
                { name: "generalInterest", icon: generalInterestIcon },
              ];

              return purposes.map((item, key) => (
                <div className="purpose" key={key}>
                  <div className="icon">
                    <img src={item.icon.src} alt="" />
                  </div>
                  <div className="text">
                    <div className="title">
                      {t(`main:purposes.${item.name}.name`)}
                    </div>
                    <div className="description">
                      {t(`main:purposes.${item.name}.description`)}
                    </div>
                  </div>
                </div>
              ));
            })()}
          </div>
        </header>

        <section className="context">
          <div className="container">
            <div className="grid">
              <div className="item">
                <div className="number">
                  5 <span className="multiplier">M</span>
                </div>
                <div>{t("main:context.figures.population")}</div>
              </div>
              <div className="item">
                <div className="number">542</div>
                <div>{t("main:context.figures.municipalities")}</div>
              </div>
              <div className="item">
                <div>{t("main:context.moreThan")}</div>
                <div className="number">
                  230 <span className="multiplier">M</span>
                </div>
                <div>{t("main:context.figures.travelers")}</div>
              </div>
              <div className="item">
                <div>{t("main:context.moreThan")}</div>
                <div className="number">100</div>
                <div>{t("main:context.figures.lines")}</div>
              </div>
              <div className="item">
                <div>{t("main:context.moreThan")}</div>
                <div className="number">
                  700 <span className="multiplier">km</span>
                </div>
                <div>{t("main:context.figures.railwayNetwork")}</div>
              </div>
              <div className="item">
                <div>{t("main:context.moreThan")}</div>
                <div className="number">
                  2.300 <span className="multiplier">km</span>
                </div>
                <div>{t("main:context.figures.roadNetwork")}</div>
              </div>
            </div>

            <div className="community-kingdom-of-the-valencian-country" />

            <div className="grid">
              <div className="item">
                <div className="icon walking" />
                <div>{t("main:context.types.walking")}</div>
              </div>
              <div className="item">
                <div className="icon bicycle" />
                <div>{t("main:context.types.bicycle")}</div>
              </div>
              <div className="item">
                <div className="icon bus" />
                <div>{t("main:context.types.bus")}</div>
              </div>
              <div className="item">
                <div className="icon tram" />
                <div>{t("main:context.types.tram")}</div>
              </div>
              <div className="item">
                <div className="icon metro" />
                <div>{t("main:context.types.metro")}</div>
              </div>
              <div className="item">
                <div className="icon train" />
                <div>{t("main:context.types.train")}</div>
              </div>
            </div>
          </div>

          <div className="photos">
            <div className="photo" />
            <div className="photo" />
            <div className="photo" />
            <div className="photo" />
            <div className="photo" />
            <div className="photo" />
          </div>
        </section>

        <section className="claims">
          <div className="introduction">
            <div className="title">{t("main:claims.title")}</div>
            <div className="subtitle">{t("main:claims.subtitle")}</div>
            <div className="description">{t("main:claims.description")}</div>
          </div>

          <div className="cards">
            <div className="column">
              <div className="claim">
                <div className="title">{t("main:claims.financing.title")}</div>
                <div className="description">
                  {t("main:claims.financing.description")}
                </div>
                <div className="info">
                  <div className="title">{t("main:claims.didYouKnow")}</div>
                  <div className="description">
                    {t("main:claims.financing.extra")}
                  </div>
                </div>
                <div className="tags">
                  <span className="congreso">
                    {t("main:claims.organizations.spanishParliament")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">{t("main:claims.everyday.title")}</div>
                <div className="description">
                  {t("main:claims.everyday.description")}
                </div>
                <div className="info">
                  <div className="title">{t("main:claims.didYouKnow")}</div>
                  <div className="description">
                    {t("main:claims.everyday.extra")}
                  </div>
                  <div className="chart">
                    <ResponsiveLine
                      data={[
                        {
                          id: "travelers",
                          data: [
                            {
                              x: 2006,
                              y: 25.439,
                            },
                            {
                              x: 2007,
                              y: 25.124,
                            },
                            {
                              x: 2008,
                              y: 23.856,
                            },
                            {
                              x: 2009,
                              y: 20.83,
                            },
                            {
                              x: 2010,
                              y: 19.291,
                            },
                            {
                              x: 2011,
                              y: 19.521,
                            },
                            {
                              x: 2012,
                              y: 19.226,
                            },
                            {
                              x: 2013,
                              y: 18.161,
                            },
                            {
                              x: 2014,
                              y: 17.083,
                            },
                            {
                              x: 2015,
                              y: 15.86,
                            },
                            {
                              x: 2016,
                              y: 14.707,
                            },
                            {
                              x: 2017,
                              y: 15.166,
                            },
                            {
                              x: 2018,
                              y: 15.485,
                            },
                            {
                              x: 2019,
                              y: 16.1841,
                            },
                            {
                              x: 2020,
                              y: 8.8722,
                            },
                            {
                              x: 2021,
                              y: 10.7062,
                            },
                            {
                              x: 2022,
                              y: 14.6025,
                            },
                            {
                              x: 2023,
                              y: 19.9772,
                            },
                            {
                              x: 2024,
                              y: 20.9806,
                            },
                          ],
                        },
                      ]}
                      margin={{
                        top: 45,
                        right: 15,
                        bottom: 60,
                        left: 45,
                      }}
                      xScale={{
                        type: "point",
                      }}
                      yScale={{
                        type: "linear",
                        stacked: true,
                        min: "auto",
                        max: "auto",
                      }}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 30,
                        tickRotation: 270,
                        legend: t("main:claims.everyday.chart.bottomLegend"),
                        legendOffset: 48,
                        legendPosition: "middle",
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: t("main:claims.everyday.chart.leftLegend"),
                        legendOffset: -35,
                        legendPosition: "middle",
                      }}
                      colors={["#5fc1c8"]}
                      pointSize={8}
                      pointColor="#ffffff"
                      pointBorderWidth={2}
                      pointBorderColor="#5fc1c8"
                      enablePointLabel={true}
                      pointLabel={(point: Point["data"]) =>
                        Math.round(Number(point.y)).toLocaleString()
                      }
                      pointLabelYOffset={-14}
                      useMesh={true}
                      isInteractive={false}
                      curve="natural"
                    />
                  </div>
                  <div className="source">
                    <span className="title">
                      {t("main:claims.everyday.source.title")}:{" "}
                    </span>
                    <a
                      href="https://www.renfe.com/es/va/grup-renfe/govern-corporatiu-i-transparencia/transparencia/renfe-viatgers-sme-sa/funcions/comptes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("main:claims.everyday.source.name")}
                    </a>
                    .
                  </div>
                </div>
                <div className="tags">
                  <span className="renfe">
                    {t("main:claims.organizations.renfe")}
                  </span>
                  <span className="adif">
                    {t("main:claims.organizations.adif")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">
                  {t("main:claims.paymentSystem.title")}
                </div>
                <div className="description">
                  {t("main:claims.paymentSystem.description")}
                </div>
                <div className="info">
                  <div className="title">{t("main:claims.didYouKnow")}</div>
                  <div className="description">
                    {Object.entries(
                      t<string, TFunctionKeys>(
                        "main:claims.paymentSystem.extra"
                      )
                    ).map((item: [string, string]) => (
                      <p key={item[0]}>{item[1]}</p>
                    ))}
                  </div>
                </div>
                <div className="tags">
                  <span className="atmv">
                    {t("main:claims.organizations.atmv")}
                  </span>
                  <span className="generalitat">
                    {t("main:claims.organizations.valencianGovernment")}
                  </span>
                  <span className="spanish-government">
                    {t("main:claims.organizations.spanishGovernment")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">{t("main:claims.priority.title")}</div>
                <div className="description">
                  {t("main:claims.priority.description")}
                </div>
                <div className="tags">
                  <span className="city-councils">
                    {t("main:claims.organizations.cityCouncils")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">
                  {t("main:claims.supplyAndDemand.title")}
                </div>
                <div className="description">
                  {t("main:claims.supplyAndDemand.description")}
                </div>
                <div className="tags">
                  <span className="city-councils">
                    {t("main:claims.organizations.cityCouncils")}
                  </span>
                  <span className="atmv">
                    {t("main:claims.organizations.atmv")}
                  </span>
                  <span className="fgv">
                    {t("main:claims.organizations.fgv")}
                  </span>
                  <span className="generalitat">
                    {t("main:claims.organizations.valencianGovernment")}
                  </span>
                  <span className="renfe">
                    {t("main:claims.organizations.renfe")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">{t("main:claims.technology.title")}</div>
                <div className="description">
                  {t("main:claims.technology.description")}
                </div>
                <div className="info">
                  <div className="title">{t("main:claims.didYouKnow")}</div>
                  <div className="description">
                    {t("main:claims.technology.extra")}
                  </div>
                </div>
                <div className="tags">
                  <span className="atmv">
                    {t("main:claims.organizations.atmv")}
                  </span>
                  <span className="generalitat">
                    {t("main:claims.organizations.valencianGovernment")}
                  </span>
                  <span className="spanish-government">
                    {t("main:claims.organizations.spanishGovernment")}
                  </span>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="claim">
                <div className="title">
                  {t("main:claims.information.title")}
                </div>
                <div className="description">
                  {Object.entries(
                    t<string, TFunctionKeys>(
                      "main:claims.information.description"
                    )
                  ).map((item: [string, string]) => (
                    <p key={item[0]}>{item[1]}</p>
                  ))}
                </div>
                <div className="tags">
                  <span className="atmv">
                    {t("main:claims.organizations.atmv")}
                  </span>
                  <span className="fgv">
                    {t("main:claims.organizations.fgv")}
                  </span>
                  <span className="generalitat">
                    {t("main:claims.organizations.valencianGovernment")}
                  </span>
                  <span className="renfe">
                    {t("main:claims.organizations.renfe")}
                  </span>
                  <span className="adif">
                    {t("main:claims.organizations.adif")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">{t("main:claims.branding.title")}</div>
                <div className="description">
                  {Object.entries(
                    t<string, TFunctionKeys>("main:claims.branding.description")
                  ).map((item: [string, string]) => (
                    <p key={item[0]}>{item[1]}</p>
                  ))}
                </div>
                <div className="tags">
                  <span className="generalitat">
                    {t("main:claims.organizations.valencianGovernment")}
                  </span>
                  <span className="spanish-government">
                    {t("main:claims.organizations.spanishGovernment")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">{t("main:claims.frequency.title")}</div>
                <div className="description">
                  {t("main:claims.frequency.description")}
                </div>
                <div className="info">
                  <div className="title">{t("main:claims.didYouKnow")}</div>
                  <div className="description">
                    {t("main:claims.frequency.extra")}
                  </div>
                </div>
                <div className="tags">
                  <span className="atmv">
                    {t("main:claims.organizations.atmv")}
                  </span>
                  <span className="generalitat">
                    {t("main:claims.organizations.valencianGovernment")}
                  </span>
                  <span className="spanish-government">
                    {t("main:claims.organizations.spanishGovernment")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">
                  {t("main:claims.punctuality.title")}
                </div>
                <div className="description">
                  {t("main:claims.punctuality.description")}
                </div>
                <div className="tags">
                  <span className="city-councils">
                    {t("main:claims.organizations.cityCouncils")}
                  </span>
                  <span className="atmv">
                    {t("main:claims.organizations.atmv")}
                  </span>
                  <span className="fgv">
                    {t("main:claims.organizations.fgv")}
                  </span>
                  <span className="renfe">
                    {t("main:claims.organizations.renfe")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">
                  {t("main:claims.accessibility.title")}
                </div>
                <div className="description">
                  {Object.entries(
                    t<string, TFunctionKeys>(
                      "main:claims.accessibility.description"
                    )
                  ).map((item: [string, string]) => (
                    <p key={item[0]}>{item[1]}</p>
                  ))}
                </div>
                <div className="info">
                  <div className="title">{t("main:claims.didYouKnow")}</div>
                  <div className="description">
                    {Object.entries(
                      t<string, TFunctionKeys>(
                        "main:claims.accessibility.extra"
                      )
                    ).map((item: [string, string]) => (
                      <p key={item[0]}>{item[1]}</p>
                    ))}
                  </div>
                </div>
                <div className="tags">
                  <span className="city-councils">
                    {t("main:claims.organizations.cityCouncils")}
                  </span>
                  <span className="atmv">
                    {t("main:claims.organizations.atmv")}
                  </span>
                  <span className="fgv">
                    {t("main:claims.organizations.fgv")}
                  </span>
                  <span className="adif">
                    {t("main:claims.organizations.adif")}
                  </span>
                </div>
              </div>

              <div className="claim">
                <div className="title">{t("main:claims.staff.title")}</div>
                <div className="description">
                  {t("main:claims.staff.description")}
                </div>
                <div className="tags">
                  <span className="city-councils">
                    {t("main:claims.organizations.cityCouncils")}
                  </span>
                  <span className="atmv">
                    {t("main:claims.organizations.atmv")}
                  </span>
                  <span className="fgv">
                    {t("main:claims.organizations.fgv")}
                  </span>
                  <span className="renfe">
                    {t("main:claims.organizations.renfe")}
                  </span>
                  <span className="adif">
                    {t("main:claims.organizations.adif")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="join" ref={this.joinRef}>
          <JoinBox type="support" />
          <JoinBox type="associate" />
        </section>
      </>
    );
  }
}

export default withTranslation()(Main);
