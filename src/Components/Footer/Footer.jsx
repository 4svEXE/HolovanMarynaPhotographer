import scss from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
const {t} = useTranslation();
  return (
    <footer className={`${scss.footerSection} px-3 py-20 sm:px-16`}>
      <div className={`container ${scss.footerContainer} flex flex-wrap justify-between gap-x-20 gap-y-10`}>
        <span className="w-full font-bold lg:w-auto">HOLOVAN</span>
        <nav>
          <p>{t("footer.SiteNav.SiteNavTitle")}</p>
          <ul>
            <li>
              <a href="#aboutMe">{t("footer.SiteNav.AboutMe")}</a>
            </li>
            <li>
            <Link to={"HolovanMarynaPhotographer/portfolio"}>{t("footer.SiteNav.Portfolio")}</Link>
            </li>
            <li>
              <a href="#contacts">{t("footer.SiteNav.Contacts")}</a>
            </li>
          </ul>
        </nav>

        <div>
          <p>{t("footer.SocialsListTite")}</p>
          <ul>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Telegram</a>
            </li>
            <li>
              <a href="">Facebook</a>
            </li>
          </ul>
        </div>
        <div>
          <p>{t("footer.ContactsListTite")}</p>
          <ul>
            <li>
              <a href="tel:+420722255120">+420722255120</a>
            </li>
            <li>
              <a href="mailto:marynaholovanph@gmail.com">
                marynaholovanph@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
