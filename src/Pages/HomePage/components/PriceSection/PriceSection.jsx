import css from "./PriceSection.module.scss";

const PriceSection = () => {
  return (
    <section className={`section ${css.priceSection}`}>
      <div className="container">
        <h2 className="mb-16">Прайс</h2>
        <ul className="flex flex-col gap-6 xlg:flex-row xlg:justify-between">
          <li>
            <div className={`${css.priceContainer} `}>
              <h3>Express</h3>
              <ul>
                <li>
                  Ціна <span>500 кс</span>
                </li>
                <li>
                  Тривалість <span>30 хв</span>
                </li>
                <li>
                  Фото в обробці <span>5 шт</span>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div className={`${css.priceContainer} `}>
              <h3>Standart</h3>
              <ul>
                <li>
                  Ціна <span>1500 кс</span>
                </li>
                <li>
                  Тривалість <span>60 хв</span>
                </li>
                <li>
                  Фото в обробці <span>15 шт</span>
                </li>
                <li>Фото в друк <span>5 шт</span></li>
              </ul>
            </div>
          </li>

          <li>
          <div className={`${css.priceContainer} `}>
              <h3>Premium</h3>
              <ul>
                <li>
                  Ціна <span>2 500 кс</span>
                </li>
                <li>
                  Тривалість <span>90 хв</span>
                </li>
                <li>
                  Фото в обробці <span>25 шт</span>
                </li>
                <li>Фото в друк <span>15 шт</span></li>
              </ul>
            </div>

          </li>
        </ul>
      </div>
    </section>
  );
};

export default PriceSection;
