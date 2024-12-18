import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next'; // Import the translation hook

const Breadcrumb = ({ title, back_home = false }) => {
  const { t } = useTranslation('common'); // Use the 'common' namespace for translations

  return (
    <section
      className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
      style={{ backgroundImage: 'url(/assets/img/breadcrum/ab-1.1.jpg)' }}
    >
      <div className="ac-about-shape-img z-index-1">
        <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt={t('breadcrumb.shape_alt')} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
              <h3 className="breadcrumb__title">{title}</h3>
              {!back_home && (
                <Link href="/contact">
                  <a className="tp-btn-white-border">
                    {t('breadcrumb.lets_work')} <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              )}
              {back_home && (
                <Link href="/">
                  <a className="tp-btn-white-border">
                    {t('breadcrumb.back_home')} <i className="far fa-arrow-right"></i>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
