import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { services_data } from "../../data";

const ServicesArea = () => {
  const { t } = useTranslation("common"); // Use the common namespace for translations

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className="tp-service-area pb-90 grey-bg pt-50 pb-50 mb-50" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-10">
            <div className="tp-service-section-box text-center pb-60">
              <h5 className="tp-subtitle pb-10">{t("our_services")}</h5>
              <h2 className="tp-title-sm">
                {t("managing_business")}{" "}
                <span className="tp-section-highlight">
                  {t("best_service")}
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {services_data
            .filter((service) => service.home_4) // Filter for relevant services
            .map((service, index) => (
              <div
                key={service.id}
                className="col-xl-3 col-lg-4 col-md-6 wow tpfadeUp"
                data-wow-duration={service.duration}
                data-wow-delay={service.delay}
              >
                <div className="tp-sv-border-effect">
                  <div className={`tp-service-item-four sv-color-${index + 1} mb-30`}>
                    <div className="mb-40 text-center">
                      {/* Render icons */}
                      <i
                        className={service.icon}
                        style={{
                          fontSize: "48px",
                          color: service.color,
                        }}
                      ></i>
                    </div>
                    <div className="tp-service-item-four__title">
                      <h3 className="tp-sv-sm-title">
                        <Link href={`/service-details/${service.id}`}>
                          <a>{t(`services.${service.title}.title`)}</a>
                        </Link>
                      </h3>
                    </div>
                 
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
