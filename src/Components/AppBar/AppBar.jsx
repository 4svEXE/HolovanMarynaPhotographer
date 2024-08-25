import Icon from "Components/Icon/Icon";
import Navigation from "Components/Navigation/Navigation";
import LocalizationList from "Components/LocalizationList/LocalizationList";
import css from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <header className={`${css.header}`}>
      <div className={"container flex justify-between items-center"}>
        <Icon
          id={"logo"}
          width={154}
          height={29}
          style={{ height: "auto" }}
        ></Icon>

        <button
          className={`flex justify-center items-center ${css.mobileMenuBtn} md:hidden`}
        >
          <Icon
            id={"menu"}
            width={22}
            height={18}
            style={{ fill: "#000000" }}
          ></Icon>
        </button>

        <div className={`hidden md:flex items-center ${css.mediumScreenNav} `}>
          <Navigation className={`ssm:hidden md:block`} />

          <LocalizationList />
        </div>
      </div>
    </header>
  );
};

export default AppBar;
