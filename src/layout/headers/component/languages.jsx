import React from "react";
import { useRouter } from "next/router";

const Languages = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const switchLanguage = (lang) => {
    router.push(asPath, asPath, { locale: lang });
  };

  // Define flag images or icons for each language
  const flags = {
    en: "assets/img/flags/uk.png", // Replace with the path to your English flag image
    fr: "assets/img/flags/fr.png", // Replace with the path to your French flag image
    de: "assets/img/flags/de.png", // Replace with the path to your German flag image
    es: "assets/img/flags/es.png", // Replace with the path to your Spanish flag image
  };

  return (
    <ul
      style={{
        listStyle: "none",
        padding: 20,
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      {locales.map((lang) => (
        <li key={lang} style={{ display: "flex", alignItems: "center" }}>
          <button
            onClick={() => switchLanguage(lang)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: locale === lang ? "underline" : "none",
              fontWeight: locale === lang ? "bold" : "normal",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src={flags[lang]}
              alt={`${lang} flag`}
              style={{ width: "20px", height: "15px" }}
            />
            {lang === "en" && "English"}
            {lang === "fr" && "Français"}
            {lang === "de" && "Deutsch"}
            {lang === "es" && "Español"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Languages;
