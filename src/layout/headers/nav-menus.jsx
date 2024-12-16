import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next"; // Import useTranslation hook
import menu_data from "./menu-data";

const NavMenus = () => {
  const { t } = useTranslation("common"); // Load the "common" namespace for translations

  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li
          key={i}
          className={`${menu.has_dropdown ? "has-dropdown" : ""} ${
            menu.mega_menu ? "has-mega-menu" : ""
          }`}
        >
          <Link href={menu.link}>
            <a>
              {t(menu.title)} {/* Translate menu title */}
              {menu.has_dropdown && <i className="fal fa-angle-down"></i>}
            </a>
          </Link>
          {menu.has_dropdown && (
            <ul className="submenu text-start">
              {menu.sub_menus.map((sub_m, i) => (
                <li key={i}>
                  <Link href={sub_m.link}>
                    <a>{t(sub_m.title)}</a> {/* Translate submenu title */}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;
