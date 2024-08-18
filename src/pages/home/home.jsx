import React from "react";
import Cowchain from "./components/Cowchain";
import Services from "./components/Services";
import Cases from "./components/Cases";
import OurTechnology from "./components/OurTechnology";
import Team from "./components/Team";
import Revives from "./components/Reviews";
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <div className="w-full flex-col content-center items-center justify-center bg-white dark:bg-editor-dark">
      <Helmet>
        <title>Holovan Maryna the Photographer in Liberec</title>
        <link
          rel="canonical"
          href="https://4svEXE.github.io/HolovanMarynaPhotographer"
        />
      </Helmet>

      <Cowchain />

      <div id="services">
        <Services />
      </div>

      <div id="cases">
        <Cases />
      </div>

      <div id="ourTecnology">
        <OurTechnology />
      </div>

      <div id="team">
        <Team />
      </div>

      <div id="reviews">
        <Revives />
      </div>

      <div id="contact"></div>
    </div>
  );
}
