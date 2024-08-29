import css from "./HeroSection.module.scss";
import Icon from "../../../../Components/Icon/Icon";
import icons from "../../../../images/favicon/icons.svg";
import heroImage1 from "../../../../images/shared/mobile/hero-image-1.png";
import heroImage1_2x from "../../../../images/shared/mobile/hero-image-1@2x.png";
import heroBg from "../../../../images/shared/backgrounds/hero-bg-mobile.png";

const HeroSection = () => {
  return (
    <section
      className={`section ${css.heroSection} overflow-hidden md:flex md:overflow-visible`}
    >
      <div className={`container`}>
        <div>
          <h1 className={`lg:w-1/2 lg:flex lg:flex-col`}>
            Maryna{" "}
            <span className="relative flex flex-col items-start left-28 lg:left-32">
              Holovan <p className="text-left">Ваша історія в кожній фотографії</p>
            </span>
          </h1>
          <div className="flex flex-row-reverse justify-between">
            {/* <Icon id={"curve-arrow"} width={89} style={{}} /> */}
            <svg
              href={`${icons}#curve-arrow`}
              stroke="currentColor"
              fill="currentColor"
              width={89}
              height={150}
            />
            <button className="flex gap-2 items-center self-end">
              Записатися
              <Icon id={"arrow-white"} width={13} height={13} />
            </button>
          </div>
        </div>
        <div className={`${css.imageContainer} flex relative`}>
          <img
            src={heroImage1}
            srcSet={`${heroImage1} 1x, ${heroImage1_2x} 2x`}
            alt=""
          />
          <img
            src={heroImage1}
            srcSet={`${heroImage1} 1x, ${heroImage1_2x} 2x`}
            className="relative top-2"
            alt=""
          />
          {/* <img src={heroBg} className="absolute" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// mb-6 text-right
