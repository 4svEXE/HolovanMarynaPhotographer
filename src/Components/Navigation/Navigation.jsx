import { useTranslation } from "react-i18next";
import css from "./Navigation.module.scss";

const Navigation = () => {
  
  const { t } = useTranslation();
  return (
    <nav className={""}>
      <ul className={`${css.navList} flex gap-4`}>
        <li className={css.checked}>{"About me"}</li>
        <li>{"Portfolio"}</li>
        <li>{"Contacts"}</li>
      </ul>
    </nav>
  );
};


export default Navigation;

// t("header.nav.AboutMe")
// t("header.nav.Portfolio")
// t("header.nav.Contacts")