import css from "./MobileMenuNav.module.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const MobileMenuNav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={`${css.navList} mb-40`}>
      <li className={`${location.pathname.includes("home") ? css.bold : ""}`}>
          <Link className={css.checked} to={"HolovanMarynaPhotographer/home"}>
          Про мене</Link>
        </li>
        <li className={`${location.pathname.includes("portfolio") ? css.bold : ""}`}>
          <Link to={"HolovanMarynaPhotographer/portfolio"}>Портфоліо</Link>
        </li>
        <li className={`${location.pathname.includes("contacts") ? css.bold : ""}`}>
          <Link to={"HolovanMarynaPhotographer/contacts"}>Контакти</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
