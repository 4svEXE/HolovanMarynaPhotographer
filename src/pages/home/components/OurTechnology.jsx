import React from "react";
import { useTranslation } from "react-i18next";
import OurTechnologyItem from "./components/OurTechnologyItem";

import ico1 from "/img/home/services/1.png";
import ico2 from "/img/home/services/9.png";
import ico3 from "/img/home/services/6.png";
import ico4 from "/img/home/services/8.png";

export default function OurTechnology() {
  const { t } = useTranslation();

  const tags1 = ["ethereum (solidity)", "near", "web3", "ethers"];
  const tags2 = ["reactJS", "typescript", "angularJS"];
  const tags3 = ["net", "nodeJS", "subgraph"];
  const tags4 = ["azure", "aws", "gcp"];

  return (
    <div className="bg-opacity-25 flex flex-col items-center dark:bg-black p-1 md:p-20">
      <h2 className="text-black dark:text-white w-max mb-5 md:mb-20">
        {t([`homepage.OurTechnology.title`])}
      </h2>

      <div className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
        <OurTechnologyItem
          title={t([`homepage.OurTechnology.Blockchain`])}
          img={ico1}
          tags={tags1}
          text={t([`homepage.OurTechnology.BlockchainText`])}
        />
        <OurTechnologyItem
          title={t([`homepage.OurTechnology.FrontEnd`])}
          img={ico2}
          tags={tags2}
          text={t([`homepage.OurTechnology.FrontEndText`])}
        />
        <OurTechnologyItem
          title={t([`homepage.OurTechnology.BackEnd`])}
          img={ico3}
          tags={tags3}
          text={t([`homepage.OurTechnology.BackEndText`])}
        />
        <OurTechnologyItem
          title={t([`homepage.OurTechnology.Cloud`])}
          img={ico4}
          tags={tags4}
          text={t([`homepage.OurTechnology.CloudText`])}
        />
      </div>
    </div>
  );
}
