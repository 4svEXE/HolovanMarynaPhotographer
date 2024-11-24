import css from "./PriceSection.module.scss";
import { useTranslation } from "react-i18next";

const services = [
  {
    name: "Express",
    price: "500 кс",
    duration: `30`,
    photos: "5",
    printPhotos: null,
  },
  {
    name: "Standart",
    price: "1500 кс",
    duration: "60",
    photos: "15",
    printPhotos: "5",
  },
  {
    name: "Premium",
    price: "2 500 кс",
    duration: "90",
    photos: "25",
    printPhotos: "15",
  },
];

const PriceSection = () => {
  const {t} = useTranslation();

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
                {t("homepage.Price.Price")}<span>{`${service.price}`} </span>
                </li>
                <li>
                {t("homepage.Price.Duration")}<span>{service.duration} {t("homepage.Price.Minutes")}</span>
                </li>
                <li>
                {t("homepage.Price.PhotosInProcessing")}<span>{service.photos} {t("homepage.Price.Pieces")}</span>
                </li>
                {service.printPhotos && (
                  <li>
                    {t("homepage.Price.PrintPhoto")}<span>{service.printPhotos} {t("homepage.Price.Pieces")}</span>
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
