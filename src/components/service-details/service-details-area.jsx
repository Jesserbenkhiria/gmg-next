import React from "react";
import { useTranslation } from "next-i18next";

const ServiceDetailsArea = ({ service }) => {
  const { t } = useTranslation("common");

  // Fetching the `details` array and `why_choose_us` with `returnObjects: true`
  const details = t(`services.${service.title}.details`, {
    returnObjects: true,
  });
  const whyChooseUs = t(`services.${service.title}.why_choose_us`, {
    returnObjects: true,
  });
  const cta = t(`services.${service.title}.cta`); // Fetching the CTA text

  return (
    <>
      <div className="service-details-area" style={{ padding: "2rem 0" }}>
        <div className="container">
          {/* Title and Description */}
          <div className="row service-pt-pb">
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details">
                <h3 className="tp-title-sm service-details-space">
                  {t(`services.${service.title}.title`)}
                </h3>
                <a href="#">{t("schedule_free_session")}</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="sd-service-details-paragraph">
                <p>{t(`services.${service.title}.description`)}</p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="row">
            {details && (
              <div
                className="details-column"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {details.map((detail, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "0.5rem",
                      borderRadius: "8px",
                    }}
                  >
                    <h4 style={{fontWeight:"bold"}} >{detail.title}</h4>
                    <p>{detail.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Why Choose Us Section */}
          {whyChooseUs && (
            <div className="row mt-4">
              <div className="col-12">
                <h4 style={{fontWeight:"bold"}}>{t("why_choose_us")}</h4>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    fontSize: "1rem",
                    listStyleType: "disc",
                    paddingLeft: "1.5rem",
                  }}
                >
                  {whyChooseUs.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Call-to-Action Button */}
          <div className="row mt-4">
            <div
              className="tp-hero-paly-button-four"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <button
                className="popup-video"
                style={{
                  backgroundColor: "#F8B133",
                  color: "#fff",
                  padding: "1rem 2rem",
                  borderRadius: "25px",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <span>{cta}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;
