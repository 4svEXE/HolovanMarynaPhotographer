import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import css from "./ReviewSection.module.scss";
import icons from '../../../../images/favicon/icons.svg';

import Icon from "Components/Icon/Icon";
import ReviewerItem from "Components/ReviewerItem/ReviewerItem";

import bgMobile from "../../../../images/shared/mobile/backgrounds/review-section-bg-mobile.png";
import bgMobile2x from "../../../../images/shared/mobile/backgrounds/review-section-bg-mobile@2x.png";
import bgDesktop from "../../../../images/shared/desktop/backgrounds/reviews-bg.png";

import reviewer from "../../../../images/shared/mobile/reviews-section-photo.png";
import { useEffect } from "react";


const reviews = [
  {
    name: "Аня",
    profession: "таргетолог",
    review:
      "Це була моя перша фотосесія, мене лякало, що я буду скована і не зможу позувати. Але після знайомства і консультації з Мариною, всі страхи розвіялись. Я отримала багато фото різного плана і тепер можу не заморочувати голову, які фото викласти в Інстаграм. А саме головне — я отримала задоволення від процесу! Дякую, Марина!",
    picture: { reviewer },
  },
  {
    name: "Аня",
    profession: "таргетолог",
    review:
      "Це була моя перша фотосесія, мене лякало, що я буду скована і не зможу позувати. Але після знайомства і консультації з Мариною, всі страхи розвіялись. Я отримала багато фото різного плана і тепер можу не заморочувати голову, які фото викласти в Інстаграм. А саме головне — я отримала задоволення від процесу! Дякую, Марина!",
    picture: { reviewer },
  },
  {
    name: "Аня",
    profession: "таргетолог",
    review:
      "Це була моя перша фотосесія, мене лякало, що я буду скована і не зможу позувати. Але після знайомства і консультації з Мариною, всі страхи розвіялись. Я отримала багато фото різного плана і тепер можу не заморочувати голову, які фото викласти в Інстаграм. А саме головне — я отримала задоволення від процесу! Дякую, Марина!",
    picture: { reviewer },
  },

  
];

const ReviewSection = () => {
  useEffect(()=>{
    const swiper = new Swiper(".swiper", {
      // configure Swiper to use modules
      modules: [Navigation],
    
      direction: "horizontal",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  
  },[]);
  return (
    <section className={`section relative pt-28`}>
      <div className={`container`}>
        <h2 className="mb-32">Відгуки</h2>
        <div className={`swiper ${css.swiperConainer} flex flex-col justify-around items-center xlg:flex-row`}>

          <div className="swiper-button-prev absolute left-20 top-3/4 hidden xlg:block">
            <Icon id={"arrow-black"} width={23} height={23}></Icon>
          </div>

          <ul className={`swiper-wrapper mb-5 xlg:mb-0`}>
            {reviews.map((item, index) => {
              return (
                <li key={index} className={`swiper-slide flex flex-col items-center w-full md:flex-row md:justify-between`}>
                  <ReviewerItem data={item}></ReviewerItem>
                </li>
              );
            })}
          </ul>

          <div className="flex justify-center gap-20 items-center xlg:hidden">
            <div className="swiper-button-prev">
              <Icon id={"arrow-black"} width={23} height={23}></Icon>
            </div>
            <div className={`swiper-button-next ${css.navBtnNext}`}>
              <Icon id={"arrow-black"} width={23} height={23}></Icon>
            </div>
          </div>

          <div className={`swiper-button-next ${css.navBtnNext} absolute right-20 top-3/4 hidden xlg:block`}>
            <Icon id={"arrow-black"} width={23} height={23}></Icon>
          </div>

        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 -z-50">
        <svg className="w-full h-96">
          <use className={css.bg} href={`${icons}#reviews-bg`}/>
        </svg>
      </div> */}
      <div className="absolute bottom-0 left-0 -z-50 xlg:w-full">
        <picture>
          <source media="(min-width:1400px)"
          srcSet={bgDesktop}/>
          <img className={css.bg} src={bgMobile} srcSet={bgMobile2x} alt="" />
        </picture>
      </div>
    </section>
  );
};

export default ReviewSection;