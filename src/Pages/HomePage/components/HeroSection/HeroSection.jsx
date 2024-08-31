import css from "./HeroSection.module.scss";
import Icon from "../../../../Components/Icon/Icon";
import icons from "../../../../images/favicon/icons.svg";
import heroImage1 from "../../../../images/shared/mobile/hero-image-1.png";
import heroImage1_2x from "../../../../images/shared/mobile/hero-image-1@2x.png";
import heroImage1_desktop from "../../../../images/shared/desktop/hero-image-1-desktop.png";
import heroImage1_desktop_2x from "../../../../images/shared/desktop/hero-image-1-desktop@2x.png";
import heroBgMobile from "../../../../images/shared/mobile/backgrounds/hero-bg-mobile.png";
import heroBg2xMobile from "../../../../images/shared/mobile/backgrounds/hero-bg-mobile@2x.png";
import heroBgDesktop from "../../../../images/shared/desktop/backgrounds/hero-bg-desktop.png";
import heroBg2xDesktop from "../../../../images/shared/desktop/backgrounds/hero-bg-desktop@2x.png";

const HeroSection = () => {
  return (
    <section
      className={`section relative ${css.heroSection} overflow-hidden md:flex md:bg-right-bottom md:overflow-visible xlg:px-20`}
    >
      <div
        className={`container md:flex xlg:justify-between xlg:pt-32 xlg:pb-20`}
      >
        <div className="md:w-1/2 xlg:flex xlg:flex-col">
          <h1 className={`flex flex-col xlg:w-96 xlg:text-7xl`}>
            Maryna
            <span className="relative left-10 sm:left-24 mk:left-24 lg:left-32 xlg:text-right xlg:-left-3">
              Holovan
            </span>
          </h1>

          <p className="text-right relative xlg:text-center">
            Ваша історія в кожній фотографії
          </p>

          <div className="flex flex-row justify-between xlg:justify-self-end">
            <button className="flex gap-2 items-center self-end">
              Записатися
              <Icon id={"arrow-white"} width={13} height={13} />
            </button>
            <div>
              <Icon
                id={"curve-arrow"}
                width={89}
                style={{ position: "relative", right: "20px" }}
              />
            </div>
          </div>

        </div>

        <div className={`${css.imageContainer} flex relative left-5`}>

          <picture className="w-full">
            <source
              media="(min-width: 1440px)"
              srcSet={`${heroImage1_desktop} 1x, ${heroImage1_desktop_2x} 2x`}
            />
            <img
              src={heroImage1}
              srcSet={`${heroImage1} 1x, ${heroImage1_2x} 2x`}
              alt=""
            />
          </picture>

          <picture className="w-full relative top-4">
            <source
              media="(min-width: 1440px)"
              srcSet={`${heroImage1_desktop} 1x, ${heroImage1_desktop_2x} 2x`}
            />

            {/* <source
              media="(min-width:320px)"
              srcSet={`${heroImage1} 1x, ${heroImage1_2x} 2x`}
            /> */}
            <img
              src={heroImage1}
              srcSet={`${heroImage1} 1x, ${heroImage1_2x} 2x`}
              alt=""
            />
          </picture>

        </div>

        <div className={`absolute -z-10 bottom-0 right-0 `}>
          <picture className="w-full relative">
            <source
              media="(min-width: 1440px)"
              srcSet={`${heroBgDesktop} 1x, ${heroBg2xDesktop} 2x`}
            />
            <img
              src={heroImage1}
              srcSet={`${heroBgMobile} 1x, ${heroBg2xMobile} 2x`}
              alt=""
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// mb-6 text-right
