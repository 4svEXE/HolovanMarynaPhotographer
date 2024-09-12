import css from "./PriceSection.module.scss";

const services = [
  {
    name: "Express",
    price: "500 кс",
    duration: "30 хв",
    photos: "5 шт",
    printPhotos: null,
  },
  {
    name: "Standart",
    price: "1500 кс",
    duration: "60 хв",
    photos: "15 шт",
    printPhotos: "5 шт",
  },
  {
    name: "Premium",
    price: "2 500 кс",
    duration: "90 хв",
    photos: "25 шт",
    printPhotos: "15 шт",
  },
];

const PriceSection = () => {
  return (
    <section className={`section ${css.priceSection}`}>
      <div className="container">
        <h2 className="mb-16">Прайс</h2>
        {/* Варік з грідами замість флексів (лаконічніше)*/}
        <ul className="grid gap-6 lg:grid-cols-3 grid-cols-1">
          {/* лаконічніше виводити повторювані дані циклом аби дотримуватись принципу DRY */}
          {services.map((service, index) => (

            // забрав дів і дав клас одразу лішці аби зменшити код
            <li key={index} className={`${css.priceContainer}`}>
              <h3>{service.name}</h3>
              <ul>
                <li>
                  Ціна <span>{service.price}</span>
                </li>
                <li>
                  Тривалість <span>{service.duration}</span>
                </li>
                <li>
                  Фото в обробці <span>{service.photos}</span>
                </li>
                {service.printPhotos && (
                  <li>
                    Фото в друк <span>{service.printPhotos}</span>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PriceSection;
