import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
function Sidebar({ isHiddenItemsText }: any): ReactElement {
  const { t } = useTranslation();
  const navs = [
    {
      id: 1,
      name: t("main"),
      icon: "home",
      href: "/",
      count: null,
      isBranch: true,
      isReserv: false,
      isOrder: true,
    },
    {
      id: 2,
      name: t("categories_text"),
      icon: "local_offer",
      href: "/categories",
      count: 123,
      isBranch: true,
      isReserv: false,
      isOrder: true,
    },
    {
      id: 11,
      name: t("products_or_services"),
      icon: "style",
      href: "/products",
      isBranch: true,
      isReserv: false,
      count: 438,
      isOrder: true,
    },
    {
      id: 4,
      name: t("orders_text"),
      icon: "collections_bookmark",
      href: "/orders",
      count: 40,
      isBranch: true,
      isReserv: false,
      isOrder: true,
    },
    {
      id: 5,
      name: t("reservations_text"),
      icon: "calendar_month",
      count: 15,
      href: "/reservations",
      isBranch: true,
      isReserv: false,
      isOrder: true,
    },
    {
      id: 6,
      name: t("employees_text"),
      icon: "people",
      href: "/employees",
      count: 5,
      isBranch: true,
      isReserv: false,
      isOrder: true,
    },
  ];

  const path = useRouter();
  return (
    <>
      <div className="app-new-sidebar-logo">
        <Link href="/landing">
          <a>
            {isHiddenItemsText ? (
              <img height={35} src="/favicon.png" alt="" />
            ) : (
              <img height={40} src="/logo.png" alt="" />
            )}
          </a>
        </Link>
      </div>
      <div className="app-new-sidebar-inner">
        <ul className="app-new-sidebar">
          {navs &&
            navs.map((e: any) => {
              if (e.isBranch) {
                if (!e.isReserv) {
                  if (e.isOrder) {
                    return (
                      <li className={e.href == path.route ? "active" : ""}>
                        <Link href={e.href}>
                          <a>
                            {e.isBranch}
                            <span
                              className={
                                e.href == path.route
                                  ? "material-icons"
                                  : " material-icons-two-tone"
                              }
                            >
                              {e.icon}
                            </span>{" "}
                            {isHiddenItemsText ? "" : e.name}
                            {e.count ? (
                              <span className="me-auto nav-count">
                                {e.count}
                              </span>
                            ) : (
                              ""
                            )}
                          </a>
                        </Link>
                      </li>
                    );
                  }
                }
              }
            })}
        </ul>
        <ul className="app-new-sidebar">
          <li className="title">
            {isHiddenItemsText ? "" : t("store_about_text")}
          </li>
        </ul>
        <ul className="app-new-sidebar">
          <li className={"/branchs" == path.route ? "active" : ""}>
            <Link href={"/branchs"}>
              <a>
                <span
                  className={
                    "/branchs" == path.route
                      ? "material-icons"
                      : " material-icons-two-tone"
                  }
                >
                  info
                </span>{" "}
                {isHiddenItemsText ? "" : t("store_about_text")}
              </a>
            </Link>
          </li>
          <li className={"/branchs" == path.route ? "active" : ""}>
            <Link href={"/branchs"}>
              <a>
                <span
                  className={
                    "/branchs" == path.route
                      ? "material-icons"
                      : " material-icons-two-tone"
                  }
                >
                  explore
                </span>{" "}
                {isHiddenItemsText ? "" : t("available_branches_text")}
              </a>
            </Link>
          </li>
          <li className={"/settings" == path.route ? "active" : ""}>
            <Link href={"/settings"}>
              <a>
                <span
                  className={
                    "/settings" == path.route
                      ? "material-icons"
                      : " material-icons-two-tone"
                  }
                >
                  settings
                </span>{" "}
                {isHiddenItemsText ? "" : t("settings_text")}
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
Sidebar.propTypes = {
  isHiddenItemsText: PropTypes.bool,
};
