import Icon from "Components/Icon/Icon";
import Navigation from "Components/Navigation/Navigation";
import LocalizationList from "Components/LocalizationList/LocalizationList";
import css from "./AppBar.module.scss";
import MobileMenu from "Components/MobileMenu/MobileMenu";
import { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";

const AppBar = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`${css.header} w-full fixed z-50 ${isScrolled ? css.scrolled : ""}`}>
      <div className={"container flex justify-between items-center "}>
        <Icon
          id={"logo"}
          width={154}
          height={29}
          style={{ height: "auto" }}
        ></Icon>

        <button
          className={`flex justify-center items-center ${css.mobileMenuBtn} md:hidden`}
          onClick={()=>openModal()}
        >
          <Icon
            id={"menu"}
            width={22}
            height={18}
            style={{ fill: "#000000" }}
          ></Icon>
        </button>

        <div className={`hidden md:flex items-center  ${css.mediumScreenNav} `}>
          <Navigation nav={`ssm:hidden md:block`} navList={""}/>

          <LocalizationList style={"flex gap-4"} />
        </div>
        <MobileMenu modalIsOpen={modalIsOpen} closeModal={closeModal}/>
      </div>
    </header>
  );
};

export default AppBar;
