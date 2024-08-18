import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Button from "components/shared/buttonToUp/button";
import localesHelper from "helpers/localesHelper";
import { LANGUAGES, NAVIGATION, baseHrefPrefix } from "constants";

import logo from "/img/logo.svg";
import "./header.scss";

export default function Header() {
  const { t } = useTranslation();
  const language = window.localStorage.getItem("i18nextLng") ?? "en";

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isStickyHeader, setIsStickyHeader] = useState(false);
  const [isHideStickyHeader, setIsHideStickyHeader] = useState(false);
  const [isShowStickyHeader, setIsShowStickyHeader] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= window.innerHeight / 2) {
        setIsShowStickyHeader(true);
        setIsHideStickyHeader(false);
        setIsScrolled(true);
        setIsStickyHeader(true);
      } else {
        if (window.pageYOffset < window.innerHeight / 2 - 100) {
          setIsShowStickyHeader(false);
          setIsHideStickyHeader(true);

          if (window.pageYOffset >= window.innerHeight / 3) {
            if (isScrolled) {
              setIsScrolled(false);
            }
          } else {
            setIsStickyHeader(false);
            setIsHideStickyHeader(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const setDocumentScrolling = (scroll) => {
    if (scroll) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  };

  return (
    <header
      className={`bg-white border-gray-200 w-full z-20 px-4 lg:px-6 dark:bg-dark-gray dark:text-white ${
        isStickyHeader ? "sticky" : ""
      } ${isHideStickyHeader ? "hide_sticky_header " : ""} ${
        isShowStickyHeader ? "show_sticky_header" : ""
      }`}
    >
      <div className="hd-wrapper flex items-center justify-between lg:border-b lg:border-gray-400 py-8">
        <div className="flex flex-wrap items-center max-w-screen-xl">
          <div className="flex lg:flex-1">
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-6 sm:h-9" alt="Cowchain Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Cowchain
              </span>

              <span className="sr-only">test project</span>
            </Link>
          </div>
        </div>

        <nav>
          {/* DESKTOP-MENU */}
          <ul className="desktop-nav hidden space-x-8 lg:flex items-center">
            {NAVIGATION.map((n) => (
              <li key={n.title + "_li"}>
                <a
                  key={n.title}
                  href={baseHrefPrefix + n.path}
                  onClick={() => setIsNavOpen((prev) => !prev)}
                  className="text-md text-black font-semibold leading-6 dark:before:bg-white dark:text-white header-nav"
                >
                  {t([`header.nav.${n.title}`, n.title])}
                </a>
              </li>
            ))}

            <div className="controls flex">
              <div className="hidden lg:flex lg:justify-end ml-4 pl-4 border-2 border-transparent dark:border-l-white border-l-gray-900">
                {LANGUAGES.map((lang) => (
                  <Button
                    key={lang.title}
                    title={lang.title}
                    onClick={() => {
                      localesHelper.setLAnguage(lang.language);
                    }}
                  />
                ))}
              </div>
            </div>
          </ul>

          {/* MOBILE-MENU */}
          <div className="mobile-nav flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() =>
                setIsNavOpen((prev) => !prev, setDocumentScrolling(false))
              } // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div
              className={
                isNavOpen
                  ? "showMenuNav bg-black dark:bg-[#530469] "
                  : "hideMenuNav"
              }
            >
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => {
                  setIsNavOpen(false), setDocumentScrolling(true);
                }} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600 dark:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                {NAVIGATION.map((n) => (
                  <li key={n.title + "_nav_li"} className="p-10">
                    <a
                      key={n.title + "_nav"}
                      href={baseHrefPrefix + n.path}
                      onClick={() => setIsNavOpen((prev) => !prev)}
                      className="text-md text-black font-semibold leading-6 dark:before:bg-white dark:text-white header-nav"
                    >
                      {t([`header.nav.${n.title}`, n.title])}
                    </a>
                  </li>
                ))}

                <div className="controls flex flex-col items-center">
                  <div className=" lg:flex lg:justify-end">
                    <Button
                      title={language === "en" ? <>UA</> : <>EN</>}
                      onClick={localesHelper.toggleLanguage}
                    />
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
