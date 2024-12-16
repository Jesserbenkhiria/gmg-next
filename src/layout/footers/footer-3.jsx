import Link from 'next/link';
import React from 'react';
import SocialLinks from '../social-links';
import CopyrightArea from './component/copyright-area';
import { useTranslation } from 'next-i18next';

const FooterThree = ({ home_four = false }) => {
  const { t } = useTranslation('common'); // Use the namespace 'common' or your specific one

  const footer_widgets = [
    {
      w_class: 'd-flex justify-content-lg-center',
      title: t('footer.useful_links'),
      widget_lists: t('footer.widget_lists.useful_links', { returnObjects: true }),
    },
    {
      padd: 'pl-20',
      title: t('footer.community'),
      widget_lists: t('footer.widget_lists.community', { returnObjects: true }),
    },
  ];

  const copy_right_text = t('footer.copy_right');
  const conditions = t('footer.conditions', { returnObjects: true });

  return (
    <React.Fragment>
      <footer>
        <div className="tp-footer-area black-bg pt-130 pb-30">
          <div className="container">
            <div className="row wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget">
                  {!home_four && (
                    <div className="tp-footer-widget__logo mb-30">
                      <Link href="/">
                        <a><img src="/assets/img/logo/logo-white.png" alt="" /></a>
                      </Link>
                    </div>
                  )}
                  {home_four && (
                    <div className="tp-footer-widget__title mb-30">
                      <h3 className="footer-title">{t('footer.about_title')}</h3>
                    </div>
                  )}
                  <div className="tp-footer-widget__text mb-30">
                    <p>{t('footer.widget_desc')}</p>
                  </div>
                  <div className="tp-footer-widget__social-link">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {footer_widgets.map((w, i) => (
                <div key={i} className={`col-xl-3 col-lg-2 col-md-6 ${w.w_class || ''}`}>
                  <div className={`tp-footer-widget ${w.padd || ''}`}>
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title">{w.title}</h3>
                    </div>
                    <div className="tp-footer-widget__list">
                      <ul>
                        {w.widget_lists.map((l, i) => (
                          <li key={i}><a href="#">{l}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              {!home_four && (
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="tp-footer-widget">
                    <div className="tp-footer-widget__title pb-15">
                      <h3 className="footer-title">{t('footer.subscribe_title')}</h3>
                    </div>
                    <div className="tp-footer-widget__text mb-55">
                      <p>{t('footer.subscribe_text')}</p>
                    </div>
                    <div className="tp-footer-widget__input">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Enter Mail" />
                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <CopyrightArea copy_right_text={copy_right_text} conditions={conditions} />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default FooterThree;
