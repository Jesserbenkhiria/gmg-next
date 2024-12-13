import Link from "next/link";
import React from "react";
import useSticky from "../../hooks/use-sticky";
import MobileMenu from "./mobile-menu";
import NavMenus from "./nav-menus";
import Languages from "./component/languages";
import { useTranslation } from "next-i18next";

const HeaderFour = () => {
  const { headerSticky } = useSticky();
  const { t } = useTranslation("common"); // 'common' matches the translation file name

  return (
    <React.Fragment>
      <header className="d-none d-lg-block">
        <div
          id="header-sticky"
          className={`tp-header-area-two header-transparent header-space-three pl-115 pr-115 pt-35 ${
            headerSticky ? "header-sticky" : ""
          }`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xxl-3 col-xl-3 col-lg-3">
                <div className="tp-logo text-start">
                  <Link href="/">
                    <a>
                      <img src="/assets/img/logo/logo-blue.png" alt={t("menu")} />
                    </a>
                  </Link>
                </div>
              </div>

              {/* Navigation */}
              <div className="col-xxl-5 col-xl-6 col-lg-6">
                <div className="tp-main-menu tp-menu-black text-center">
                  <nav id="mobile-menu">
                    <NavMenus />
                  </nav>
                </div>
              </div>

              {/* Header Right */}
              <div className="col-xxl-4 col-xl-3 col-lg-3">
                <div className="tp-header-left d-flex align-items-center justify-content-end">
                  <ul className="d-none d-xxl-block">
                    <li>
                      <a className="#" href="#">
                        {t("language")} <i className="fal fa-arrow-down arrow-down"></i>
                      </a>
                      <Languages />
                    </li>
                  </ul>
                  <div className="tp-header-yellow-button">
                    <Link href="/contact">
                      <a className="tp-btn-sky">{t("contact")}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu logo={"logo-blue.png"} />
    </React.Fragment>
  );
};

export default HeaderFour;
