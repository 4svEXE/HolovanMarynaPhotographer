import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./cases-content.module.scss";

import PrimotyButton from "components/shared/primotyButton/primotyButton";
import masd from "/img/home/MASD.png";

export default function CasesContent() {
  const { t } = useTranslation();

  return (
    <section className="flex pt-10 flex-col h-max items-center bg-white text-black dark:text-white dark:bg-black py-8 z-10">
      <div className="flex flex-col-reverse lg:flex-row container">
        <div className={styles.case + " flex flex-col p-7"}>
          <h3>{t([`homepage.MASDMarketplace`])}</h3>
          <div className="flex flex-wrap pt-4">
            <small>#Blockchain</small>
            <small>#Solidity</small>
            <small>#Node.JS</small>
            <small>#React</small>
            <small>#MongoDB</small>
          </div>
          <p className="py-7">{t([`homepage.MASDMarketplaceText`])}</p>

          <PrimotyButton text="Details" url="#" active="active" />
        </div>
        <img src={masd} alt={t([`homepage.MASDMarketplace`])} />
      </div>

      <div className="container grid lg:grid-cols-3 grid-cols-1">
        <div className="flex py-7">
          <div className={styles.case + " flex flex-col p-7"}>
            <h3>{t([`homepage.GameDesignDevelopment`])}</h3>

            <div className="flex flex-wrap pt-4">
              <small>#SmartContract</small>
              <small>#Solidity</small>
              <small>#MySQL</small>
              <small>#.Net Framework</small>
              <small>#React</small>
            </div>
            <p className="py-7">{t([`homepage.GameDesignDevelopmentText`])}</p>

            <PrimotyButton text="Details" url="#" active="active" />
          </div>
        </div>

        <div className="flex py-7">
          <div className={styles.case + " flex flex-col p-7"}>
            <h3>{t([`homepage.GameDesignDevelopment`])}</h3>
            <div className="flex flex-wrap pt-4">
              <small>#SmartContract</small>
              <small>#Solidity</small>
              <small>#PostGreSQL</small>
              <small>#Node.JS</small>
              <small>#React</small>
            </div>
            <p className="py-7">{t([`homepage.GameDesignDevelopmentText2`])}</p>

            <PrimotyButton text="Details" url="#" active="active" />
          </div>
        </div>

        <div className="flex py-7">
          <div className={styles.case + " flex flex-col p-7"}>
            <h3 className="pb-1 lg:pb-9">{t([`homepage.WebDevelopment`])}</h3>

            <div className="flex flex-wrap pt-4">
              <small>#SmartContract</small>
              <small>#Blockchain</small>
              <small>#Node.JS</small>
              <small>#React</small>
              <small>#Solidity</small>
              <small>#MongoDB</small>
            </div>
            <p className="py-7">{t([`homepage.WebDevelopmentText`])}</p>

            <PrimotyButton text="Details" url="#" active="active" />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row container">
        <div className={styles.case + " flex flex-col p-7"}>
          <h3>{t([`homepage.MASDMarketplace`])}</h3>
          <div className="flex flex-wrap pt-4">
            <small>#Blockchain</small>
            <small>#Solidity</small>
            <small>#Node.JS</small>
            <small>#React</small>
            <small>#MongoDB</small>
          </div>
          <p className="py-7">{t([`homepage.MASDMarketplaceText`])}</p>

          <PrimotyButton text="Details" url="#" active="active" />
        </div>
        <img src={masd} alt={t([`homepage.MASDMarketplace`])} />
      </div>

      <div className="container grid lg:grid-cols-3 grid-cols-1">
        <div className="flex py-7">
          <div className={styles.case + " flex flex-col p-7"}>
            <h3>{t([`homepage.GameDesignDevelopment`])}</h3>

            <div className="flex flex-wrap pt-4">
              <small>#SmartContract</small>
              <small>#Solidity</small>
              <small>#MySQL</small>
              <small>#.Net Framework</small>
              <small>#React</small>
            </div>
            <p className="py-7">{t([`homepage.GameDesignDevelopmentText`])}</p>

            <PrimotyButton text="Details" url="#" active="active" />
          </div>
        </div>

        <div className="flex py-7">
          <div className={styles.case + " flex flex-col p-7"}>
            <h3>{t([`homepage.GameDesignDevelopment`])}</h3>
            <div className="flex flex-wrap pt-4">
              <small>#SmartContract</small>
              <small>#Solidity</small>
              <small>#PostGreSQL</small>
              <small>#Node.JS</small>
              <small>#React</small>
            </div>
            <p className="py-7">{t([`homepage.GameDesignDevelopmentText2`])}</p>

            <PrimotyButton text="Details" url="#" active="active" />
          </div>
        </div>

        <div className="flex py-7">
          <div className={styles.case + " flex flex-col p-7"}>
            <h3 className="pb-1 lg:pb-9">{t([`homepage.WebDevelopment`])}</h3>

            <div className="flex flex-wrap pt-4">
              <small>#SmartContract</small>
              <small>#Blockchain</small>
              <small>#Node.JS</small>
              <small>#React</small>
              <small>#Solidity</small>
              <small>#MongoDB</small>
            </div>
            <p className="py-7">{t([`homepage.WebDevelopmentText`])}</p>

            <PrimotyButton text="Details" url="#" active="active" />
          </div>
        </div>
      </div>
    </section>
  );
}
