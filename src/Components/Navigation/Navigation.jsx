import { useTranslation } from "react-i18next";
import css from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  
  const { t } = useTranslation();
  return (
    <nav className={""}>
      <ul className={`${css.navList} flex gap-4`}>
        {/* <li className={css.checked}>{"About me"}</li> */}
        <Link className={css.checked} to={"HolovanMarynaPhotographer/"}>About me</Link>
        <Link to={"HolovanMarynaPhotographer/portfolio"}>Portfolio</Link>
        <Link to={"HolovanMarynaPhotographer/contacts"}>Contacts</Link>
      </ul>
    </nav>
  );
};


export default Navigation;

// t("header.nav.AboutMe")
// t("header.nav.Portfolio")
// t("header.nav.Contacts")