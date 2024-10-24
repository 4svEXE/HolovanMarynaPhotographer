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
    question: "Скільки часу займає обробка фотографій?",
    answer:
    "Зазвичай обробка фотографій займає від 1 до 2 тижнів, залежно від обсягу роботи та обраного пакету послуг. Я завжди повідомляю клієнтам про очікуваний термін на момент зйомки."
  },
  {
    question: "Чи можна замовити друк фотографій?",
    answer:
    "Так, я пропоную послуги друку фотографій на високоякісному фотопапері. Ви можете вибрати різні формати та матеріали для друку, обговоривши це під час замовлення."
  },
  {
    question:"Які ваші ціни на фотосесії?",
    answer:`Ціни залежать від типу фотосесії та тривалості. Детальний прайс-лист можна знайти на моєму сайті в розділі "Прайс" або звернувшись до мене безпосередньо.`
  },
  {
    question:"Як я отримаю свої фотографії?",
    answer:"Після завершення обробки, фотографії будуть доступні для завантаження через захищений онлайн-альбом або надані на флеш-накопичувачі, за вашим бажанням."
  },
  {
    question:"Чи можу я обрати місце для фотосесії?",
    answer:"Так, ви можете запропонувати своє улюблене місце для фотосесії, або я можу запропонувати кілька варіантів на вибір, виходячи з ваших побажань та теми зйомки."
  },
  {
    question:"Чи можна замовити подарунковий сертифікат на фотосесію?",
    answer:"Так, я пропоную подарункові сертифікати на фотосесію. Це чудовий подарунок для ваших близьких на будь-яке свято. Сертифікат можна замовити через мій сайт або зв'язавшись зі мною особисто.",
  }
];

const FAQ = () => {
  useEffect(() => {
    const accordion = new Accordion(".accordion-container", {
      duration: 700,
    });
  }, []);

  return (
    <section className={`${css.FAQ} pt-20 pb-20 xlg:pt-28 xlg:pb-28`}>
      <div className={`container ${css.FAQContainer}`}>
        <h2 className="text-center mb-10">FAQ</h2>
        <ul className={`accordion-container`}>
          {questions.map((item, index) => {
            return (
              <li 
                key={index}
                className={`ac relative pt-2 pb-2 xlg:pt-10 xlg:pb-10`}
              >
                <div>
                  <h3 className={`ac-header`}>
                    <button type="button" className={`ac-trigger`}>
                      {item.question}
                    </button>
                  </h3>
                  <p className="acItemIcon absolute right-2 top-9 xlg:top-14 xlg:right-4">+</p>
                </div>
                <div className={`ac-panel`}>
                  <p className={`ac-text`}>{item.answer}</p>
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
