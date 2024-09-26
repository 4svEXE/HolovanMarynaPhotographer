import css from "./HeroSection.module.scss";
import Icon from "../../../../Components/Icon/Icon";
import heroImage1 from "../../../../images/shared/mobile/hero-image-1.png";
import heroImage1_2x from "../../../../images/shared/mobile/hero-image-1@2x.png";
import heroImage1_desktop from "../../../../images/shared/desktop/hero-image-1-desktop.png";
import heroImage1_desktop_2x from "../../../../images/shared/desktop/hero-image-1-desktop@2x.png";
import heroBgMobile from "../../../../images/shared/mobile/backgrounds/hero-bg-mobile.png";
import heroBg2xMobile from "../../../../images/shared/mobile/backgrounds/hero-bg-mobile@2x.png";
import heroBgDesktop from "../../../../images/shared/desktop/backgrounds/hero-bg-desktop.png";
import heroBg2xDesktop from "../../../../images/shared/desktop/backgrounds/hero-bg-desktop@2x.png";
import heroImage2_desktop from "../../../../images/shared/desktop/hero-image-2-desktop.png";


const HeroSection = () => {
  return (
    <section
      className={`section ${css.heroSection} pt-32 md:flex md:bg-right-bottom xlg:px-20 md:overflow-visible`}
    >
      <div
        className={`container pb-80 md:flex md:pb-0 xlg:justify-between xlg:pt-32 xlg:pb-20`}
      >
        <div className="md:w-1/2 xlg:flex xlg:flex-col">
          <h1 className={`flex flex-col xlg:w-96`}>
            Maryna
            <span className="relative left-10 sm:left-24 mk:left-24 lg:left-32 xlg:left-44 xlg:py-2">
              Holovan
            </span>
          </h1>

          <p className="text-right relative xlg:text-center xlg:text-base xlg:left-7">
            Ваша історія в кожній фотографії
          </p>

          <div className="flex flex-row justify-between xlg:mt-auto xlg:justify-normal">
            <button className="flex gap-2 items-center self-end">
              Записатися
              <Icon id={"arrow-white"} width={13} height={13} />
            </button>
            <div className="relative right-5 md:hidden">
              <Icon
                id={"curve-arrow"}
                width={89}
              />
            </div>
            <div className="ssm:hidden md:block xlg:relative xlg:left-40 xlg:bottom-10">
              <Icon
              id={"curve-arrow-big"}
              width={150}

              />
            </div>
          </div>

        </div>

        <div className={`${css.imageContainer} flex absolute bottom-12 -right-7 sm:bottom-20 sm:-right-1 xlg:bottom-1/3`}>

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

          <picture className="w-full relative top-4 xlg:top-10">
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

        <div className={`absolute -z-10 -bottom-7 right-0 flex justify-center md:justify-end xm:w-full`}>
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={`${heroBgDesktop} 1x, ${heroBg2xDesktop} 2x`}
            />
            <img
            className="xm:right-0"
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