import React from "react";
import { useRouter } from "next/router";

const Languages = () => {
  const router = useRouter();
  const { locale, locales = [], asPath } = router;

  const switchLanguage = async (lang) => {
    try {
      await router.push(asPath, asPath, { locale: lang });
    } catch (error) {
      console.error("Failed to switch language:", error);
    }
  };

  // Define flag images or icons for each language
  const flags = {
    en: "/assets/img/logo/uk.png",
    fr: "/assets/img/logo/fr.png",
    de: "/assets/img/logo/de.png",
    es: "/assets/img/logo/es.png",
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
