import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const TestimonialArea = ({ home_6, style_2 = false }) => {
  const { t } = useTranslation('common'); // Use the common namespace for translations
  const testimonial_data = t('testimonial.data', { returnObjects: true }); // Retrieve testimonial data

  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), []);

  return (
    <div className={`tp-testimonial-area ${style_2 ? 'pb-130' : 'pt-130 pb-130'} p-relative`}>
      <div className={`${home_6 ? 'bs-testi-shape-1' : 'ce-testi-shape'} d-none d-lg-block`}>
        <img src={home_6 ? "/assets/img/testimonial/testimonial-shape-5.3.png" : "/assets/img/hero/hero-shape-4.png"} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-testi-wrapper d-flex pb-70 justify-content-between align-items-end">
              <div className="tp-testimonial-title-box ">
                <h5 className="tp-subtitle">{t('testimonial.subtitle')}</h5>
                <h2 className="tp-title-sm">{t('testimonial.title')}
                  <span className="tp-section-highlight">
                    {t('testimonial.highlight_text')}
                    <svg width="212" height="11" viewBox="0 0 212 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L212 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="tp-testi-button-right-side">
                <Link href="/testimonial">
                  <a className={`${home_6 || style_2 ? 'tp-btn-yellow' : 'tp-btn'}`}>{t('testimonial.btn_text')}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-testimonial-slider-section-four">
          <Swiper
            loop={sliderLoop}
            slidesPerView={3}
            spaceBetween={20}
            centeredSlides={true}
            centeredSlidesBounds={true}
            className="swiper-container testi-slider-active-five"
            breakpoints={{
              '1200': {
                slidesPerView: 3,
              },
              '992': {
                slidesPerView: 3,
              },
              '768': {
                slidesPerView: 1,
              },
              '576': {
                slidesPerView: 1,
              },
              '0': {
                slidesPerView: 1,
              },
            }}
          >
            {testimonial_data?.map((item, index) => {
              const { desc, name, title } = item;
              return (
                <SwiperSlide key={index}>
                  <div className="tp-testimonial-item-four">
                    <div className="tp-testi-paragraph pb-40">
                      <p>{desc}</p>
                    </div>
                    <div className="tp-testimonial-item-four__client d-flex align-items-center">
                      <div className="tp-testimonial-item-four__position">
                        <h4 className="m-0">{name}</h4>
                        <span>{title}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialArea;
