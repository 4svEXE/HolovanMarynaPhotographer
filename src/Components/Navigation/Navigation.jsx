import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={""}>
      <ul className={`${css.navList} flex flex-col`}>
        <li className={css.checked}>Про мене</li>
        <li>Портфоліо</li>
        <li>Контакти</li>
      </ul>
    </nav>
  );
};


export default Navigation;
