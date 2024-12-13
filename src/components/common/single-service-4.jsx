import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const SingleServiceFour = ({ service, index, m }) => {
  const { t } = useTranslation("common"); // Ensure translations are properly set up
  const { delay, duration, id, icon, text_1, title, color } = service || {};
  console.log(t(`services.${title}`));

  return (
    <div className="col-xl-4 col-md-6">
      <div
        className={`tp-services-item text-center 
        ${color} ${index && index > 2 ? "mb-30" : ""} ${
          m ? "mb-30" : ""
        } wow tpfadeUp`}
        data-wow-duration={duration}
        data-wow-delay={delay}
      >
        <div className="tp-services-item__icon mb-35">
          <i className={`${icon}`} style={{ fontSize: "48px", color }}></i>
        </div>
        <div className="tp-services-item__content">
          <h3 className="tp-sv-title">
            <Link href={`/service-details/${id}`}>
              <a>{t(`services.${title}.title`)}</a>
            </Link>
          </h3>
          <p>{t(`services.${title}.description`)}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleServiceFour;
