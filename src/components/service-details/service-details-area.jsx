import React from "react";
import { useTranslation } from "next-i18next";

const ServiceDetailsArea = ({ service }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="service-details-area">
        <div className="container">
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">
                  {t(`services.${service.title}.title`)}
                </h3>
                <a href="#">
                  {t("schedule_free_session")} <i className="fal fa-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p className="pb-15">
                  {t(`services.${service.title}.description`)}
                </p>
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
