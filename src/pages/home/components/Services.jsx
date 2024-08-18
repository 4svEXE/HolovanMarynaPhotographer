import React from "react";
import { useTranslation } from "react-i18next";

import "./Services.scss";

import ico1 from "/img/home/services/1.png";
import ico2 from "/img/home/services/2.png";
import ico3 from "/img/home/services/3.png";
import ico4 from "/img/home/services/4.png";
import ico5 from "/img/home/services/5.png";
import ico6 from "/img/home/services/6.png";
import ico7 from "/img/home/services/7.png";
import ico8 from "/img/home/services/8.png";
import ico9 from "/img/home/services/9.png";

import ServiceItem from "./components/ServiceItem";

function Services() {
  const { t } = useTranslation();

  return (
    <div className="HomePage-Services flex flex-col items-center h-max bg-blue dark:bg-purple-gradient">
      <h2 className="text-black dark:text-white ">{t([`homepage.Services`])}</h2>

      <div className="container grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 color-white" >
        <ServiceItem img={ico1} title={t([`homepage.Blockchain`])} />
        <ServiceItem img={ico2} title={t([`homepage.Decentralized`])} />
        <ServiceItem img={ico3} title={t([`homepage.Fullstack`])} />
        <ServiceItem img={ico4} title={t([`homepage.Smart`])} />
        <ServiceItem img={ico5} title={t([`homepage.MVP`])} />
        <ServiceItem img={ico6} title={t([`homepage.BackEnd`])} />
        <ServiceItem img={ico7} title={t([`homepage.NFT`])} />
        <ServiceItem img={ico8} title={t([`homepage.Cloud`])} />
        <ServiceItem img={ico9} title={t([`homepage.FrontEnd`])} />
      </div>
    </div>
  );
}

export default Services;
