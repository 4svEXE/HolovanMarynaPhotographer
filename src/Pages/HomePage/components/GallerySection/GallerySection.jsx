import { useState } from "react";
import css from "./GallerySection.module.scss";
import galleryImage1 from "../../../../images/shared/mobile/portfolio/Gallery-picture-1.png";
import galleryImage1_2x from "../../../../images/shared/mobile/portfolio/Gallery-picture-1@2x.png";
import galleryImage2 from "../../../../images/shared/mobile/portfolio/Gallery-picture-2.png";
import galleryImage2_2x from "../../../../images/shared/mobile/portfolio/Gallery-picture-2@2x.png";
import galleryImage3 from "../../../../images/shared/mobile/portfolio/Gallery-picture-3.png";
import galleryImage3_2x from "../../../../images/shared/mobile/portfolio/Gallery-picture-3@2x.png";
import galleryImage4 from "../../../../images/shared/mobile/portfolio/Gallery-picture-4.png";
import galleryImage4_2x from "../../../../images/shared/mobile/portfolio/Gallery-picture-4@2x.png";
import galleryImage5 from "../../../../images/shared/mobile/portfolio/Gallery-picture-5.png";
import galleryImage5_2x from "../../../../images/shared/mobile/portfolio/Gallery-picture-5@2x.png";
import galleryImage6 from "../../../../images/shared/mobile/portfolio/Gallery-picture-6.png";
import galleryImage6_2x from "../../../../images/shared/mobile/portfolio/Gallery-picture-6@2x.png";

import galleryImage1Desktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-1.png";
import galleryImage1_2xDesktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-1@2x.png";
import galleryImage2Desktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-2.png";
import galleryImage2_2xDesktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-2@2x.png";
import galleryImage3Desktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-3.png";
import galleryImage3_2xDesktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-3@2x.png";
import galleryImage4Desktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-4.png";
import galleryImage4_2xDesktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-4@2x.png";
import galleryImage5Desktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-5.png";
import galleryImage5_2xDesktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-5@2x.png";
import galleryImage6Desktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-6.png";
import galleryImage6_2xDesktop from "../../../../images/shared/desktop/portfolio/Gallery-picture-6@2x.png";


import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import data from "../../../../localization/locale/ua.json";

const GallerySection = ({
  categoriesContainer,
  categoriesList,
  categoryBtnActive,
  section,
  categoryButton,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = data.homepage.Portfolio.Categories;
  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className={`${css.gallerySection} section ${section}`}
    >
      <div className="container">
        <div className={`${categoriesContainer}`}>
          <h2 className="mb-8">{t("homepage.Portfolio.SectionTitle")}</h2>
          <div className={`overflow-x-scroll mb-10 ${categoriesList}`}>
            <ul className="w-max flex gap-2 ">
              {categories.map((category, index) => {
                return (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`${css.categoryButton} ${
                        selectedCategory === category
                          ? categoryBtnActive
                          : categoryButton
                      }`}
                    >
                      {t(`homepage.Portfolio.Categories.${index}.Category`)}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <ul className="flex flex-col gap-4 mb-10 md:flex-wrap xlg:flex-row xlg:flex-wrap xlg:gap-6 xlg:mb-40">
          <li className="xlg:odd:relative xlg:odd:top-20">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`${galleryImage1Desktop} 1x, ${galleryImage1_2xDesktop} 2x`}
              />
              <img
                src={galleryImage1}
                srcSet={`${galleryImage1} 1x, ${galleryImage1_2x} 2x`}
                alt=""
              />
            </picture>
          </li>
          <li className="xlg:odd:relative xlg:odd:top-20">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`${galleryImage2Desktop} 1x, ${galleryImage2_2xDesktop} 2x`}
              />
              <img
                src={galleryImage2}
                srcSet={`${galleryImage2} 1x, ${galleryImage2_2x} 2x`}
                alt=""
              />
            </picture>
          </li>
          <li className="xlg:odd:relative xlg:odd:top-20">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`${galleryImage3Desktop} 1x, ${galleryImage3_2xDesktop} 2x`}
              />
              <img
                src={galleryImage3}
                srcSet={`${galleryImage3} 1x, ${galleryImage3_2x} 2x`}
                alt=""
              />
            </picture>
          </li>
          <li className="xlg:odd:relative xlg:odd:top-20">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`${galleryImage4Desktop} 1x, ${galleryImage4_2xDesktop} 2x`}
              />
              <img
                src={galleryImage4}
                srcSet={`${galleryImage4} 1x, ${galleryImage4_2x} 2x`}
                alt=""
              />
            </picture>
          </li>
          <li className="xlg:odd:relative xlg:odd:top-20">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`${galleryImage5Desktop} 1x, ${galleryImage5_2xDesktop} 2x`}
              />
              <img
                src={galleryImage5}
                srcSet={`${galleryImage5} 1x, ${galleryImage5_2x} 2x`}
                alt=""
              />
            </picture>
          </li>
          <li className="xlg:odd:relative xlg:odd:top-20">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`${galleryImage6Desktop} 1x, ${galleryImage6_2xDesktop} 2x`}
              />
              <img
                src={galleryImage6}
                srcSet={`${galleryImage6} 1x, ${galleryImage6_2x} 2x`}
                alt=""
              />
            </picture>
          </li>
        </ul>

        <div className="text-center">
          <Link
            to={"/HolovanMarynaPhotographer/portfolio"}
            className={`${css.loadMoreBtn} p-3 leading-normal center text-center xlg:p-4`}
          >
            {t("homepage.Portfolio.LoadMoreBtn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
