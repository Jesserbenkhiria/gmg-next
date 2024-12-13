import React from 'react';
import { useRouter } from 'next/router';

const Languages = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const switchLanguage = (lang) => {
    router.push(asPath, asPath, { locale: lang });
  };
console.log(locale);

  return (
    <ul>
      {locales.map((lang) => (
        <li key={lang}>
          <button
            onClick={() => switchLanguage(lang)}
            style={{
              textDecoration: locale === lang ? 'underline' : 'none',
              fontWeight: locale === lang ? 'bold' : 'normal',
            }}
          >
            {lang === 'en' && 'English'}
            {lang === 'fr' && 'Français'}
            {lang === 'de' && 'Deutsch'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Languages;
