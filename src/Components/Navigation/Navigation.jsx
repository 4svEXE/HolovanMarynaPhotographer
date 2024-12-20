import { useTranslation } from "react-i18next";
import css from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { t } = useTranslation();

  const location = useLocation();
  return (
    <nav >
      <ul className={`${css.navList} flex gap-4`}>
        <li className={`${location.pathname.includes("home") ? css.checked : ""}`}>
          <Link className={css.checked} to={"HolovanMarynaPhotographer/home"}>
          {t("header.nav.AboutMe")}</Link>
        </li>
        <li className={`${location.pathname.includes("portfolio") ? css.checked : ""}`}>
          <Link to={"HolovanMarynaPhotographer/portfolio"}>{t("header.nav.Portfolio")}</Link>
        </li>
        <li className={``}>
          <a href="#contacts">{t("header.nav.Contacts")}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

// t("header.nav.AboutMe")
// t("header.nav.Portfolio")
// t("header.nav.Contacts")
