import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";
import { useEffect } from "react";
import css from "./FAQ.module.scss";

const questions = [
  {
    question: "Як я можу забронювати фотосесію?",
    answer:
      "Ви можете забронювати фотосесію, зв'язавшись зі мною через контактну форму на сайті, зателефонувавши або надіславши електронний лист. Ми узгодимо зручний для вас час та деталі зйомки.",
  },
  {
    question: "Як я можу забронювати фотосесію?",
    answer:
      "Ви можете забронювати фотосесію, зв'язавшись зі мною через контактну форму на сайті, зателефонувавши або надіславши електронний лист. Ми узгодимо зручний для вас час та деталі зйомки.",
  },
  {
    question: "Як я можу забронювати фотосесію?",
    answer:
      "Ви можете забронювати фотосесію, зв'язавшись зі мною через контактну форму на сайті, зателефонувавши або надіславши електронний лист. Ми узгодимо зручний для вас час та деталі зйомки.",
  },
];

const FAQ = () => {
  useEffect(() => {
    const accordion = new Accordion(".accordion-container", {
      showMultiple: true,
      duration: 700,
    });
  }, []);

  return (
    <section className={`${css.FAQ} pt-20 pb-20`}>
      <div className={`container ${css.FAQContainer}`}>
        <h2 className="text-center mb-10">FAQ</h2>
        <ul className={`accordion-container`}>
          {questions.map((item, index) => {
            return (
              <li
                key={index}
                className={`${css.ac} ac ${css.accItem} pt-2 pb-2 xlg:pt-10 xlg:pb-10`}
              >
                <h3 className={`${css.acHeader} ac-header`}>
                  <button
                    type="button"
                    className={`ac-trigger ${css.acTrigger}`}
                  >
                    {item.question}
                  </button>
                </h3>
                <div className={`${css.acPanel} ac-panel`}>
                  <p className={`${css.acText} ac-text`}>{item.answer}</p>
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
