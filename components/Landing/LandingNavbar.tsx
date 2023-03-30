import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaLanguage } from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useAppDispatch } from "../../store/hooks";
import { ThemeActions } from "../../store/theme/themesActions";
import Cookies from "js-cookie";
import LanguageMenu from "../Dropdown/LanguageMenu";

function LandingNavbar() {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setDarkMode] = useState(
    Cookies.get("dark_mode") == "true"
  );
  const [visible, setVisible] = useState(false);
  const [switchLangs, setSwitchLangs] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const dispatch: any = useAppDispatch();
  const navs = [
    {
      id: 1,
      name: t("main"),
      icon: "home",
      href: "/",
    },
    {
      id: 2,
      name: t("plan_text"),
      icon: "view_cozy",
      href: "/plans",
    },
    {
      id: 11,
      name: t("team_work_text"),
      icon: "group",
      href: "/team-work",
    },
    {
      id: 4,
      name: t("after_sales_service_text"),
      icon: "support_agent",
      href: "/services",
    },
    {
      id: 5,
      name: t("contact_us_text"),
      icon: "chat",
      href: "/contact-us",
    },
  ];
  const toggleDarkMode = (checked: boolean) => {
    Cookies.set("dark_mode", checked.toString());
    setDarkMode(checked);
  };

  const path = useRouter();
  useEffect(() => {
    isDarkMode
      ? dispatch(ThemeActions.change("dark"))
      : dispatch(ThemeActions.change("light"));
  }, [isDarkMode]);
  return (
    <div className="sb-navbar">
      <Drawer
        title={t("primary_menu_text")}
        placement="right"
        width={240}
        onClose={onClose}
        visible={visible}
      >
        <ul className="sb-mobile-aside-nav">
          {navs &&
            navs.map((e: any) => {
              return (
                <li key={e.id} className={e.href == path.route ? "active" : ""}>
                  <Link href={e.href}>
                    <a>
                      {e.isBranch}
                      <span
                        className={
                          e.href == path.route
                            ? "material-icons"
                            : " material-icons"
                        }
                      >
                        {e.icon}
                      </span>{" "}
                      {e.name}
                    </a>
                  </Link>
                </li>
              );
            })}
        </ul>
        <Link href={"/join-us"}>
          <a
            className="btn butt-xs mt-3 mx-1 butt-primary"
            style={{ width: "100%" }}
          >
            {t("join_us_text")}
          </a>
        </Link>
      </Drawer>
      <div className="sb-navbar-content">
        <div className="sb-navbar-right">
          <button
            onClick={showDrawer}
            type="button"
            className={`circular-btn sb-toggle-nav ${
              isDarkMode ? "dark" : "gray"
            } sm mx-1`}
          >
            <FaBars />
          </button>
          <Link href={"/"}>
            <a className="sb-logo">
              <img
                className="my-2"
                src={isDarkMode ? "/logo_invert.png" : "/logo.png"}
                height={40}
                width={50}
                alt=""
              />
            </a>
          </Link>
          <ul className="sb-navbar-nav">
            {navs &&
              navs.map((e: any) => {
                return (
                  <li
                    key={e.id}
                    className={e.href == path.route ? "active" : ""}
                  >
                    <Link href={e.href}>
                      <a>
                        {e.isBranch}
                        <span
                          className={
                            e.href == path.route
                              ? "material-icons"
                              : " material-icons"
                          }
                        >
                          {e.icon}
                        </span>{" "}
                        {e.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="sb-navbar-left">
          <ul className="sb-navbar-buttons">
            <li>
              <button
                type="button"
                onClick={() => setDarkMode(!isDarkMode)}
                className={`circular-btn ${
                  isDarkMode ? "dark" : "gray"
                } sm mx-1`}
              >
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  size={13}
                />
              </button>
            </li>
            <li>
              <button
                className="circular-btn sm gray mx-1"
                onClick={() => {
                  setSwitchLangs(!switchLangs);
                  //Cookies.set('lang')
                }}
                type="button"
              >
                <FaLanguage />
              </button>
              {switchLangs && <LanguageMenu setSwitchLangs={setSwitchLangs} />}
            </li>
            <li className="hidden-max-768">
              <Link href={"/join-us"}>
                <a className="btn butt-xs mx-1 butt-primary">
                  {t("join_us_text")}
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingNavbar;
