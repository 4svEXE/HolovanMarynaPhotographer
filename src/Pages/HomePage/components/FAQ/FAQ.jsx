import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import { useEffect } from "react";
import css from "./FAQ.module.scss";
import data from "../../../../localization/locale/ua.json";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  useEffect(() => {
    new Accordion(".accordion-container");
  },[])

  const {t} = useTranslation();

  const questionData = data.homepage.FAQ;

  return (
    <section className={`${css.FAQ} pt-20 pb-20 xlg:pt-28 xlg:pb-28`}>
      <div className={`container ${css.FAQContainer}`}>
        <h2 className="text-center mb-10">FAQ</h2>
        <ul className={`accordion-container`}>
          {questionData.map((item, index) => {
            return (
              <li
                key={index}
                className={`ac relative pt-2 pb-2 xlg:pt-10 xlg:pb-10`}
              >
                <div>
                  <h3 className={`ac-header`}>
                    <button type="button" className={`ac-trigger`}>
                      {t(`homepage.FAQ.${index}.question`)}
                    </button>
                  </h3>
                  <p className="acItemIcon absolute right-2 top-9 md:top-5 xlg:top-14 xlg:right-4">
                    +
                  </p>
                </div>
                <div className={`ac-panel`}>
                  <p className={`ac-text`}>{t(`homepage.FAQ.${index}.answer`)}</p>
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
