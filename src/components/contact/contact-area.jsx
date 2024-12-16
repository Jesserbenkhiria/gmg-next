import React from 'react';
import { useTranslation } from 'next-i18next';
import ContactForm from '../forms/contact-form';

const ContactArea = () => {
  const { t } = useTranslation('common'); // Use the 'common' namespace for translations

  return (
    <>
      <div className="tp-contact-area pt-135 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 ">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img src="/assets/img/contact/contact-1.jpg" alt={t('contact_image_alt')} />
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">{t('contact-page.mail_address')}</h4>
                  <span>
                    <a href="mailto:(webmail@gmail.com)">(webmail@gmail.com)</a>
                  </span>
                  <span>
                    <a href="mailto:(infoweb@gmail.com)">(infoweb@gmail.com)</a>
                  </span>
                </div>
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">{t('contact-page.phone_number')}</h4>
                  <span>
                    <a href="tel:(+1255-568-6523)">(+1255 - 568 - 6523)</a>
                  </span>
                  <span>
                    <a href="tel:(+1255-568-6523)">(+1255 - 568 - 6523)</a>
                  </span>
                </div>
                <div className="tp-contact-info">
                  <h4 className="contact-title">{t('contact-page.address_line')}</h4>
                  <span>
                    <a href="https://www.google.com/maps" target="blank">
                      {t('contact-page.address')}
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">{t('contact-page.lets_talk')}</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  {/* ContactForm start */}
                  <ContactForm />
                  {/* ContactForm end */}
                </div>
                <p className="ajax-response"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
