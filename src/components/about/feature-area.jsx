import React from 'react';
import { useTranslation } from 'next-i18next';

function FeatureItem({ title, subtitle, color }) {
  return (
    <div className="col-xl-3 col-lg-3 col-md-6">
      <div className="acfeature mb-50">
        <div className={`ac-circle ${color ? `ac-cirle-color-${color}` : ''}`}></div>
        <div className="acfeature__item">
          <h3 className="ac-feature-sm-title">{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

const FeatureArea = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <h3 className="ac-feature-title">{t('features.title')}</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <p className="pb-25">{t('features.sm_desc_1')}</p>
                <p>{t('features.sm_desc_2')}</p>
              </div>
            </div>
          </div>
          <div className="ac-feature-border-top">
            <div className="row">
              <FeatureItem title={t('features.project_kickoff')} subtitle={t('features.project_desc')} />
              <FeatureItem title={t('features.ideation')} subtitle={t('features.ideation_desc')} color="2" />
              <FeatureItem title={t('features.design_process')} subtitle={t('features.design_desc')} color="3" />
              <FeatureItem title={t('features.development')} subtitle={t('features.dev_desc')} color="4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
