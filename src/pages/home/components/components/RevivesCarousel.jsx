import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import RevivesCarouselItem from "./RevivesCarouselItem";
import Button from "components/shared/buttonToUp/button";

import "./CustomCarousel.css";

import img1 from "/img/home/revives/1.png";
import img2 from "/img/home/revives/2.png";
import img3 from "/img/home/revives/3.png";

export default function RevivesCarousel() {
  const { t } = useTranslation();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1300 },
      items: 1,
      centerMode: false,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 1,
      centerMode: false,
    },
    tablet: {
      breakpoint: { max: 1024, min: 645 },
      items: 1,
      centerMode: true,
    },
    mobile: {
      breakpoint: { max: 645, min: 0 },
      items: 1,
      centerMode: false,
    },
  };

  //responcive slider
  let responsiveCenterMode = true;
  function useWindowSize() {
    const [size, setSize] = useState([0]);

    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    if (size <= 1024) {
      responsiveCenterMode = false;
    }
  }
  useWindowSize();

  //Custom arrow for the carousel nav buttons
  const arrow = (direction = "right") => {
    return <div className={"carosel-custom-arrow arrow-" + direction}></div>;
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className="container flex justify-around carousel-button-group">
        <Button
          title={arrow("left")}
          className={currentSlide === 0 ? "opacity-50" : ""}
          onClick={() => previous()}
        />

        <Button title={arrow("right")} onClick={() => next()} />
      </div>
    );
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;

    return (
      <Button
        title=""
        className={active ? "opacity-100 w-20" : "opacity-50 w-20"}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <div className="container carousel-box text-white mb-20">
      <Carousel
        responsive={responsive}
        showDots
        customDot={<CustomDot />}
        arrows={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={true}
        customButtonGroup={<ButtonGroup />}
        rewind={true}
        centerMode={responsiveCenterMode}
      >
        <RevivesCarouselItem
          text={t([`homepage.Revives.Great_developer`])}
          img={img1}
          position={t([`homepage.Revives.Avalanche`])}
        />

        <RevivesCarouselItem
          text={t([`homepage.Revives.Artem_is_a`])}
          img={img2}
          position={t([`homepage.Revives.Traveldise`])}
        />

        <RevivesCarouselItem
          text={t([`homepage.Revives.Mykhailo_is`])}
          img={img3}
          position={t([`homepage.Revives.Etherium_Blockchain`])}
        />

        <RevivesCarouselItem
          text={t([`homepage.Revives.Great_developer`])}
          img={img1}
          position={t([`homepage.Revives.Avalanche`])}
        />

        <RevivesCarouselItem
          text={t([`homepage.Revives.Artem_is_a`])}
          img={img2}
          position={t([`homepage.Revives.Traveldise`])}
        />

        <RevivesCarouselItem
          text={t([`homepage.Revives.Mykhailo_is`])}
          img={img3}
          position={t([`homepage.Revives.Etherium_Blockchain`])}
        />

        <RevivesCarouselItem
          text={t([`homepage.Revives.Great_developer`])}
          img={img1}
          position={t([`homepage.Revives.Avalanche`])}
        />

        <RevivesCarouselItem
          text={t([`homepage.Revives.Artem_is_a`])}
          img={img2}
          position={t([`homepage.Revives.Traveldise`])}
        />

        <RevivesCarouselItem
          text={t([`homepage.Revives.Mykhailo_is`])}
          img={img3}
          position={t([`homepage.Revives.Etherium_Blockchain`])}
        />
      </Carousel>
    </div>
  );
}
