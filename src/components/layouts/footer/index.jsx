import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NAVIGATION } from "constants";

import logo from "/img/logo.svg";
import ContactForm from "./ContactForm";

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const linkNav = (e, path) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer aria-label="Site Footer" className="bg-black">
      <div className="text-white flex-col-reverse flex md:flex-row mx-auto">
        <nav className="mx-auto flex flex-col items-center justify-center px-6 py-10 lg:px-8">
          <div className=" pb-12 flex flex-wrap items-center ">
            <div className="flex lg:flex-1">
              <a
                href="/"
                className="flex items-center"
                onClick={(e) => linkNav(e, "/")}
              >
                <img
                  src={logo}
                  className="mr-3 h-6 sm:h-9"
                  alt="Cowchain Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Cowchain
                </span>

                <span className="sr-only">Cowchain project</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
            {NAVIGATION.map((n) => (
              <a
                key={n.title}
                href={n.path}
                className="text-md m-4 font-semibold leading-6 dark:before:bg-white dark:text-white header-nav"
              >
                {t([`header.nav.${n.title}`, n.title])}
              </a>
            ))}
          </div>
        </nav>

        <ContactForm />
      </div>
    </footer>
  );
}
