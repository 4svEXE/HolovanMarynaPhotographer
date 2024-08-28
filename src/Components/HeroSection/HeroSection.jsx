import css from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section className="section">
      <div>
        <div className={css.hero}>
          <h1 className={css.pageTitle}>
            Maryna <span className="relative">Holovan</span>
          </h1>
          <p className="leading-normal mb-10 text-right">Ваша історія в кожній фотографії</p>
          <button>Записатися</button>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
