import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={""}>
      <ul className={`${css.navList} flex gap-4`}>
        <li className={css.checked}>Про мене</li>
        <li>Портфоліо</li>
        <li>Контакти</li>
      </ul>
    </nav>
  );
};


export default Navigation;
