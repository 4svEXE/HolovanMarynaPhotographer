import { useState } from "react";
import css from "./GallerySection.module.scss";
import galleryImage1 from "../../../../images/shared/mobile/Gallery-picture-1.png";
import galleryImage1_2x from "../../../../images/shared/mobile/Gallery-picture-1@2x.png";
import galleryImage1Desktop from "../../../../images/shared/desktop/Gallery-picture-1.png";
import galleryImage1_2xDesktop from "../../../../images/shared/desktop/Gallery-picture-1@2x.png";
import { Link } from "react-router-dom";

const GallerySection = ({
  categoriesContainer,
  categoriesList,
  categoryBtnActive,
  section,
  categoryButton,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Всі", "Портрет", "Love Story", "НЮ"];

  return (
    <section
      id="portfolio"
      className={`${css.gallerySection} section ${section}`}
    >
      <div className="container">
        <div className={`${categoriesContainer}`}>
          <h2 className="mb-8">Портфоліо</h2>
          <div className={`overflow-x-scroll mb-10 ${categoriesList}`}>
            <ul className="w-max flex gap-2 ">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`${css.categoryButton} ${
                      selectedCategory === category
                        ? categoryBtnActive
                        : categoryButton
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
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
                srcSet={`${galleryImage1Desktop} 1x, ${galleryImage1_2xDesktop} 2x`}
              />
              <img
                src={galleryImage1}
                srcSet={`${galleryImage1} 1x, ${galleryImage1_2x} 2x`}
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
            Дивитися більше
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
