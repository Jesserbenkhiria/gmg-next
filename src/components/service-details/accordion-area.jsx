import React from "react";
import { useTranslation } from "next-i18next";

const accordion_items = [
  {
    id: "one",
    show: true,
    titleKey: "faq.question_one.title",
    descKey: "faq.question_one.description",
  },
  {
    id: "two",
    titleKey: "faq.question_two.title",
    descKey: "faq.question_two.description",
  },
  {
    id: "three",
    titleKey: "faq.question_three.title",
    descKey: "faq.question_three.description",
  },
  {
    id: "four",
    titleKey: "faq.question_four.title",
    descKey: "faq.question_four.description",
  },
  {
    id: "five",
    titleKey: "faq.question_five.title",
    descKey: "faq.question_five.description",
  },
];

const AccordionArea = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="sd-accordio-area grey-bg pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <h3 className="tp-title-sm mb-90">{t("faq.title")}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-custom-accordio">
                <div className="accordion" id="accordionExample">
                  {accordion_items.map((item) => {
                    const { id, show, titleKey, descKey } = item;
                    return (
                      <div
                        key={id}
                        className={`accordion-items ${
                          show ? "faq-accordio-border" : ""
                        }`}
                      >
                        <h2 className="accordion-header" id={`heading-${id}`}>
                          <button
                            className={`accordion-buttons ${
                              show ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${id}`}
                            aria-expanded={show ? "true" : "false"}
                            aria-controls={`collapse-${id}`}
                          >
                            {t(titleKey)}
                          </button>
                        </h2>
                        <div
                          id={`collapse-${id}`}
                          className={`accordion-collapse collapse ${
                            show ? "show" : ""
                          }`}
                          aria-labelledby={`heading-${id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">{t(descKey)}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionArea;
