import React, { useEffect } from "react";
import { FooterThree, HeaderFour, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import AccordionArea from "./accordion-area";
import ServiceDetailsArea from "./service-details-area";
import { useTranslation } from "next-i18next";

const ServiceDetails = ({ service }) => {
  const { t } = useTranslation("common"); // Use the 'common' namespace for translations

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

console.log(service.title);
console.log(t(`services.${service.title}.title`));

  return (
    <Wrapper>
      <HeaderFour />
      {/* Use translation for Breadcrumb */}
      <Breadcrumb
        title={service?.title ? t(`services.${service.title}.title`) : t("service_details")}
      />
      <ServiceDetailsArea service={service} />
      <AccordionArea />
      <FooterThree />
    </Wrapper>
  );
};

export default ServiceDetails;
