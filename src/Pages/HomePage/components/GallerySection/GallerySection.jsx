import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./GallerySection.module.scss";

import data from "../../../../localization/locale/en.json";
import photosList from "./photosData";

const GallerySection = ({
  categoriesContainer,
  categoriesList,
  categoryBtnActive,
  section,
  categoryButton,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
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
                console.log(selectedCategory === category)
                return (
                  <li key={index}>
                    <button
                      onClick={() => setSelectedCategory(category.Category)}
                      className={`${css.categoryButton} ${
                        selectedCategory === category.Category
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
          {photosList.map((item, index) => {
            if(item.category == selectedCategory){
              return (
                <li key={index} className="xlg:odd:relative xlg:odd:top-20">
                  <picture>
                    <source
                      media="(min-width:1440px)"
                      srcSet={`${item.desktop} 1x, ${item.desktop2x} 2x`}
                    />
                    <img
                      src={item.mobile}
                      srcSet={`${item.mobile} 1x, ${item.mobile2x} 2x`}
                      alt=""
                    />
                  </picture>
                </li>
              );
            }else if(selectedCategory == "All"){
              return (
                <li key={index} className="xlg:odd:relative xlg:odd:top-20">
                  <picture>
                    <source
                      media="(min-width:1440px)"
                      srcSet={`${item.desktop} 1x, ${item.desktop2x} 2x`}
                    />
                    <img
                      src={item.mobile}
                      srcSet={`${item.mobile} 1x, ${item.mobile2x} 2x`}
                      alt=""
                    />
                  </picture>
                </li>
              );
            }
          })}
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
