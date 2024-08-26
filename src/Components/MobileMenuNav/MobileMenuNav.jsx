import css from "./MobileMenuNav.module.scss";

const MobileMenuNav = () => {
  return (
    <nav className={""}>
      <ul className={`${css.navList} mb-40`}>
        <li className={css.bold}><a href="">Про мене</a></li>
        <li><a href="">Портфоліо</a></li>
        <li><a href="">Контакти</a></li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
