import React, { useEffect } from "react";
import { FooterThree, HeaderFour, HeaderSix, Wrapper } from "../../../layout";
import { animationCreate } from "../../../utils/utils";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import CtaTwo from "../../common/cta/cta-2";
import CaseArea from "../../common/recent-case-studies";
import TestimonialArea from "../../homes/home-4/testimonial-area";
import ServicesItems from "./services-items";
import { useTranslation } from "react-i18next";

const   ServiceFour = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);
  const { t } = useTranslation('common')
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={t("services-page")} />
      <ServicesItems />
      {/* <CaseArea padd={"pt-130"} /> */}
      {/* <TestimonialArea style_2={true} /> */}
      {/* <CtaTwo /> */}
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceFour;
