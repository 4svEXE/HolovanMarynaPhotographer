import { useTranslation } from "react-i18next";
import css from "./Navigation.module.scss";

const Navigation = () => {
  
  const { t } = useTranslation();
  return (
    <nav className={""}>
      <ul className={`${css.navList} flex gap-4`}>
        <li className={css.checked}>{t("header.nav.AboutMe")}</li>
        <li>{t("header.nav.Portfolio")}</li>
        <li>{t("header.nav.Contacts")}</li>
      </ul>
    </nav>
  );
};


export default Navigation;
