import { useLocation, useParams } from "react-router-dom";
import css from "./Navigation.module.scss";
import PropTypes from "prop-types";

const Navigation = ({ nav, navList }) => {
  const params = useParams();
  
  console.log(params);
  return (
    <nav className={nav}>
      <ul className={`${navList} ${css.navList}`}>
        <li className={css.checked}>Про мене</li>
        <li className={css.bold}>Портфоліо</li>
        <li>Контакти</li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  nav: PropTypes.string,
  navList: PropTypes.string.isRequired,
};

export default Navigation;
