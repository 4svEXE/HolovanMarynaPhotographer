import css from "./IntroductionSection.module.scss";
import heroImage from "../../../../images/shared/mobile/hero-mobile.png";
import heroImage2x from "../../../../images/shared/mobile/hero-mobile@2x.png";
import heroImageDesktop from "../../../../images/shared/desktop/hero-desktop.png";
import heroImageDesktop2x from "../../../../images/shared/desktop/hero-desktop@2x.png";
import { useTranslation } from "react-i18next";

const IntroductionSection = () => {
  const {t} = useTranslation();
  return (
    <section id="aboutMe" className={`${css.introductionSection} section pt-20 pb-20 xlg:pt-32 xlg:pb-32`}>
      <div className="container md:flex">
        <div className={`${css.articleContainer} md:w-1/2 xlg:ml-20`}>
          <h2 className="mb-8 xlg:mb-16">{t("homepage.AboutMe.SectionTitle")}</h2>
          <p className="mb-3 xlg:text-base xlg:mb-5">
            {t("homepage.AboutMe.AboutMeText1")}
          </p>
          <p className="mb-10 xlg:text-base xlg:mb-0">
          {t("homepage.AboutMe.AboutMeText2")}
          </p>
        </div>
        <picture className="mx-auto relative top-left bottom-right flex justify-center -rotate-12 md:h-64 xlg:h-72">
          <source
            media="(min-width:1440px)"
            srcSet={`${heroImageDesktop} 1x,${heroImageDesktop2x} 2x`}
            width={380}
            height={300}
          />
          <img
            src={heroImage}
            srcSet={`${heroImage} 1x,${heroImage2x} 2x`}
            alt=""
          />
        </picture>
      </div>
    </section>
  );
};

export default IntroductionSection;
