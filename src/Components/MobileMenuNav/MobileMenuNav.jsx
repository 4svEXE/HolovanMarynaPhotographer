import css from "./MobileMenuNav.module.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileMenuNav = () => {
  const {t} = useTranslation();
  const location = useLocation();

  return (
    <nav>
      <ul className={`${css.navList} mb-40`}>
      <li className={`${location.pathname.includes("home") ? css.bold : ""}`}>
          <Link className={css.checked} to={"HolovanMarynaPhotographer/home"}>
          {t('header.nav.AboutMe')}</Link>
        </li>
        <li className={`${location.pathname.includes("portfolio") ? css.bold : ""}`}>
          <Link to={"HolovanMarynaPhotographer/portfolio"}>{t('header.nav.Portfolio')}</Link>
        </li>
        <li className={`${location.pathname.includes("contacts") ? css.bold : ""}`}>
          <Link to={"HolovanMarynaPhotographer/contacts"}>{t('header.nav.Contacts')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
