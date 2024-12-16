import React, { useEffect } from "react";
import { FooterThree, HeaderFour, HeaderSix, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import CtaTwo from "../common/cta/cta-2";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServicesArea from "./services-area";
import TeamArea from "./team-area";
import { useTranslation } from "react-i18next";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  const { t } = useTranslation("common");
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={t("about-page")} />
      <AboutArea />
      <ServicesArea />
      <FeatureArea />
      {/* <TeamArea />
      <CtaTwo /> */}
      <FooterThree />
    </Wrapper>
  );
};

export default About;
