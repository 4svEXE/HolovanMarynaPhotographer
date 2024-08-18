import React from "react";
import Cowchain from "./components/Cowchain";
import Services from "./components/Services";
import Cases from "./components/Cases";
import OurTechnology from "./components/OurTechnology";
import Team from "./components/Team";
import Revives from "./components/Reviews";


export default function HomePage() {
  return (
    <div className="w-full flex-col content-center items-center justify-center bg-white dark:bg-editor-dark">
      <Cowchain />

      <Services id="services" />

      <Cases id="cases" />

      <OurTechnology id="ourTechnology" />

      <Team id="team" />

      <Revives id="reviews" />
    </div>
  );
}
