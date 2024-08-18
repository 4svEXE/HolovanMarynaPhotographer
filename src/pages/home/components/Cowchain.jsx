import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import "./Cowchain.css";
import logo from "/img/logo.svg";

import Button from 'components/shared/primotyButton/primotyButton'

export default function Cowchain() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  //to animate the logo if scroll to the top
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <section className="relative bg-opacity-25 bg-white-40 flex flex-col text-black content-center items-center justify-center dark:text-white">
      <div className="first-screen-logo flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap justify-center items-center max-w-screen-xl">
          <div className="flex justify-center CowchainLogo ">
            <a
              href="/"
              className={"flex items-center " + (visible ? "" : "active")}
              onClick={(e) => linkNav(e, "/")}
            >
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Cowchain Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Cowchain
              </span>

              <span className="sr-only">Cowchain</span>
            </a>
          </div>
        </div>
      </div>

      <h1 className="sm:text-7xl text-2xl ">
        <span className="text-purple ">
          {t([`homepage.SoftwareAndBlockchain`])}
        </span>
        <br></br>
        {t([`homepage.development`])}
      </h1>

      <div className="w-100 flex justify-center p-10 pb-20">
        <Button
          text={t([`homepage.ContactUs`])}
          url="/#contact"
          active="active"
        />
      </div>
    </section>
  );
}
