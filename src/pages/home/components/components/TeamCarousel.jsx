import { useTranslation } from "react-i18next";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import TeamCarouselItem from "./TeamCarouselItem";

import Button from "components/shared/buttonToUp/button"; 

import "./CustomCarousel.css";

import img1 from "/img/home/team/1.png";
import img2 from "/img/home/team/2.png";
import img3 from "/img/home/team/3.png";
import img4 from "/img/home/team/4.png";
import img5 from "/img/home/team/5.png";
import img6 from "/img/home/team/6.png";

export default function TeamCarousel() {
  const { t } = useTranslation();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1300 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 645 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 645, min: 0 },
      items: 2,
    },
  };

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
      >
        <TeamCarouselItem
          name={t([`homepage.Team.MykhailoAdzhoieve`])}
          position="Founder, Team & Tech Lead"
          img={img1}
          link="/"
        />

        <TeamCarouselItem
          name={t([`homepage.Team.AleksandreaKharchenko`])}
          position="UI/UX Designer"
          img={img2}
          link="/"
        />

        <TeamCarouselItem
          name={t([`homepage.Team.BohdanSolomakha`])}
          position="Full-stack JS & Web3 developer"
          img={img3}
          link="/"
        />

        <TeamCarouselItem
          name={t([`homepage.Team.ViacheslavIvchenko`])}
          position="Blockchain Project Manager"
          img={img4}
          link="/"
        />

        <TeamCarouselItem
          name={t([`homepage.Team.JuriErmakov`])}
          position="Full Stack .NET & NodeJS developer"
          img={img5}
          link="/"
        />
        <TeamCarouselItem
          name={t([`homepage.Team.VladyslavFit`])}
          position=".NET Backend developer"
          img={img6}
          link="/"
        />

        {/* // */}

        <TeamCarouselItem
          name={t([`homepage.Team.MykhailoAdzhoieve`])}
          position="Founder, Team & Tech Lead"
          img={img1}
          link="/"
        />

        <TeamCarouselItem
          name={t([`homepage.Team.AleksandreaKharchenko`])}
          position="UI/UX Designer"
          img={img2}
          link="/"
        />

        <TeamCarouselItem
          name={t([`homepage.Team.BohdanSolomakha`])}
          position="Full-stack JS & Web3 developer"
          img={img3}
          link="/"
        />

        <TeamCarouselItem
          name={t([`homepage.Team.ViacheslavIvchenko`])}
          position="Blockchain Project Manager"
          img={img4}
          link="/"
        />

        <TeamCarouselItem
          name={t([`homepage.Team.JuriErmakov`])}
          position="Full Stack .NET & NodeJS developer"
          img={img5}
          link="/"
        />
        <TeamCarouselItem
          name={t([`homepage.Team.VladyslavFit`])}
          position=".NET Backend developer"
          img={img6}
          link="/"
        />
      </Carousel>
    </div>
  );
}


