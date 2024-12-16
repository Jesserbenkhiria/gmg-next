import React from "react";
import { useTranslation } from "next-i18next";
import useModal from "../../hooks/use-modal";
import VideoModal from "../common/modals/modal-video";

const AboutArea = () => {
  const { t } = useTranslation("common"); // Use the common namespace for translations
  const { isVideoOpen, setIsVideoOpen } = useModal();

  return (
    <>
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div
                className="col-xl-6 col-lg-6 wow tpfadeLeft"
                data-wow-duration=".3s"
                data-wow-delay=".5s"
              >
                <div className="ac-about-left">
                  <h3 className="ac-ab-title">
                    <a href="#">{t("about.title")}</a>
                  </h3>
                  <div className="ac-play-button">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="popup-video"
                    >
                      <i className="far fa-play"></i>
                    </button>
                    <span>{t("about.video_title")}</span>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 wow tpfadeRight"
                data-wow-duration=".5s"
                data-wow-delay=".7s"
              >
                <div className="ac-about-right">
                  <p className="pb-25">{t("about.right_text_1")}</p>
                  <p>{t("about.right_text_2")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row ac-testimonial-space">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".3s"
              data-wow-delay=".5s"
            >
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img
                      src="/assets/img/about/testi-7.png"
                      alt=""
                    />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name">
                      <a href="#">{t("about.client_name")}</a>
                    </h4>
                    <span>{t("about.client_title")}</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p>
                      <span>
                        <i className="fas fa-quote-right"></i>
                      </span>
                      {" "}
                      {t("about.desc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".5s"
              data-wow-delay=".7s"
            >
              <div className="ac-testimonial-right">
                <img src="/assets/img/news/news-1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video modal start */}
      <VideoModal
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId="8D6b3McyhhU"
      />
      {/* Video modal end */}
    </>
  );
};

export default AboutArea;
