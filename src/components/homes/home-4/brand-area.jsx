import React from 'react';
import Brands from '../../common/brands';
import { useTranslation } from 'next-i18next';

const BrandArea = () => {
  const { t } = useTranslation("common"); // Use 'common' namespace for translations

  return (
    <div className="tp-brand-area pt-130 pb-130 grey-bg">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tp-brand-title-four text-center pb-60">
              <h4 className="tp-brand-title">{t("brand_title")}</h4> {/* Dynamic translation */}
            </div>
          </div>
        </div>
        <div className="tp-brand-slider-section">
          <div className="swiper-container brand-slider-active">
            <Brands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;
