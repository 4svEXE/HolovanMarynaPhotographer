import { useState, useEffect } from "react";
import css from "./LocalizationList.module.scss";
import i18next from "i18next";
import { LANGUAGES } from "../../constants/index";

const LocalizationList = ({ style }) => {
  const [currentLang, setCurrentLang] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChange = (lang) => setCurrentLang(lang);
    i18next.on('languageChanged', handleLanguageChange);
    return () => i18next.off('languageChanged', handleLanguageChange);
  }, []);

  return (
    <ul className={`${css.localesList} ${style}`}>
      {LANGUAGES.map(({ language, title }) => (
        <li
          key={language}
          className={`${css.localeItem} ${currentLang === language ? css.checked : ""}`}
          onClick={() => i18next.changeLanguage(language)}
        >
          {title}
        </li>
      ))}
    </ul>
  );
};

export default LocalizationList;
