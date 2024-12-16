import React from "react";
import { useTranslation } from "next-i18next";

const BlogItems = () => {
  const { t } = useTranslation("common"); // Use the "common" namespace

  const bureauData = [
    {
      id: 1,
      section: t("tunisia_office.section"),
      heading: t("tunisia_office.heading"),
      description: t("tunisia_office.description"),
      items: [
        {
          title: t("tunisia_office.card_title"),
          location: t("tunisia_office.card_location"),
          hours: t("tunisia_office.card_hours"),
          img: "https://horizontunisia.org/wp-content/uploads/2024/06/Is-It-Worth-Visiting-Tunisia.jpg",
        },
        {
          title: t("tunisia_office.card_title"),
          location: t("tunisia_office.card_location"),
          hours: t("tunisia_office.card_hours"),
          img: "https://horizontunisia.org/wp-content/uploads/2024/06/Is-It-Worth-Visiting-Tunisia.jpg",
        },
        {
          title: t("tunisia_office.card_title"),
          location: t("tunisia_office.card_location"),
          hours: t("tunisia_office.card_hours"),
          img: "https://horizontunisia.org/wp-content/uploads/2024/06/Is-It-Worth-Visiting-Tunisia.jpg",
        },
        {
          title: t("tunisia_office.card_title"),
          location: t("tunisia_office.card_location"),
          hours: t("tunisia_office.card_hours"),
          img: "https://horizontunisia.org/wp-content/uploads/2024/06/Is-It-Worth-Visiting-Tunisia.jpg",
        },
      ],
    },
    {
      id: 2,
      section: t("international_offices.section"),
      heading: t("international_offices.heading"),
      description: t("international_offices.description"),
      items: [
        {
          title: t("international_offices.colombia.card_title"),
          location: t("international_offices.colombia.card_location"),
          hours: t("international_offices.colombia.card_hours"),
          img: "https://www.colombia-travels.com/wp-content/uploads/adobestock-266299444-1.jpeg",
        },
        {
          title: t("international_offices.germany.card_title"),
          location: t("international_offices.germany.card_location"),
          hours: t("international_offices.germany.card_hours"),
          img: "https://static.euronews.com/articles/stories/08/46/46/66/1200x675_cmsv2_cb0feef8-9a1d-5e77-931f-472ec250511f-8464666.jpg",
        },
        {
          title: t("international_offices.saudi_arabia.card_title"),
          location: t("international_offices.saudi_arabia.card_location"),
          hours: t("international_offices.saudi_arabia.card_hours"),
          img: "https://image.cnbcfm.com/api/v1/image/107364983-1706275482318-gettyimages-1420727921-saudiarabia0011299.jpeg?v=1724336615&w=1600&h=900",
        },
      ],
    },
  ];

  return (
    <div className="bureau-sections">
      {bureauData.map((section) => (
        <div key={section.id} className="bureau-section mb-5">
          <h2 className="section-title text-center tp-title-sm">
            {section.heading}
          </h2>
          <p className="tp-brand-title-four text-center pb-10">
            {section.description}
          </p>
          <div className="container">
            <div className="row">
              {section.items.map((bureau, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card">
                    <img
                      src={bureau.img}
                      alt={bureau.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{bureau.title}</h5>
                      <p className="card-text">
                        <strong>{t("location")}:</strong> {bureau.location}
                      </p>
                      <p className="card-text">
                        <strong>{t("hours")}:</strong> {bureau.hours}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogItems;
