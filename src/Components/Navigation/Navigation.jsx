import css from "./Navigation.module.scss"
const Navigation = ({className}) => {
  return (
    <nav className={className}>
      <ul className={css.navList}>
        <li className={css.checked}>Про мене</li>
        <li>Портфоліо</li>
        <li>Контакти</li>
      </ul>
    </nav>
  );
};

export default Navigation;
