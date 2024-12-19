import { useEffect } from "react";
import css from "./FAQ.module.scss";
import data from "../../../../localization/locale/ua.json";
import { useTranslation } from "react-i18next";
const FAQ = () => {
    const handleClick = (e) =>{
        const parent = e.target.closest(".ac");
        const panel = parent.querySelector(".ac-panel");

        // Toggle active class for the current item
        parent.classList.toggle("active");

        // Show or hide the panel
        if (parent.classList.contains("active")) {
          panel.style.maxHeight = `${panel.scrollHeight}px`;
        } else {
          panel.style.maxHeight = "0px";
        }
      };

  const { t } = useTranslation();

  const questionData = data.homepage.FAQ;

  return (
    <section className={`${css.FAQ} pt-20 pb-20 xlg:pt-28 xlg:pb-28`}>
      <div className={`container ${css.FAQContainer}`}>
        <h2 className="text-center mb-10">FAQ</h2>
        <ul>
          {questionData.map((item, index) => {
            return (
              <li
                key={index}
                className={`ac relative bg-slate-500 pt-2 pb-2 xlg:pt-10 xlg:pb-10`}
              >
                  <div className={`ac-trigger`} onClick={(e)=>handleClick(e)}>
                    <button type="button">
                      {t(`homepage.FAQ.${index}.question`)}
                      <p className="acItemIcon absolute right-2 top-3 md:top-4 xlg:top-12 xlg:right-4">
                        +
                      </p>
                    </button>
                  </div>
                <div
                  className={`ac-panel`}
                  style={{
                    maxHeight: "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p className={`ac-text`}>
                    {t(`homepage.FAQ.${index}.answer`)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
