import css from "./IntroductionSection.module.scss";
import heroImage from "../../../../images/shared/mobile/hero-mobile.png";
import heroImage2x from "../../../../images/shared/mobile/hero-mobile@2x.png";
import heroImageDesktop from "../../../../images/shared/desktop/hero-desktop.png";
import heroImageDesktop2x from "../../../../images/shared/desktop/hero-desktop@2x.png";

const IntroductionSection = () => {
  return (
    <section className={`${css.introductionSection} section pt-20 pb-20 xlg:pt-32 xlg:pb-32`}>
      <div className="container md:flex">
        <div className={`${css.articleContainer} md:w-1/2 xlg:ml-20`}>
          <h2 className="mb-8 xlg:mb-16">Про мене</h2>
          <p className="mb-3 xlg:text-base xlg:mb-5">
            Мене звати Марина, я професійний фотограф, захоплена мистецтвом
            збереження унікальних моментів та емоцій. Маю освіту в галузі
            фотографії, здобуту в «КФШ», і продовжую розвиватися через
            онлайн-курси та майстер-класи.
          </p>
          <p className="mb-10 xlg:text-base xlg:mb-0">
            Спеціалізуюся на портретній, парній та НЮ фотографії, створюючи
            роботи, які вирізняються природністю та живими емоціями. Орієнтуюся
            на індивідуальні потреби кожного клієнта.
          </p>
        </div>
        <picture className="mx-auto flex justify-center -rotate-12 md:h-64 xlg:h-72">
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
