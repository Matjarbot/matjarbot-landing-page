import Router from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";

const LoginLayout = ({ children }: any): ReactElement => {
  const token = Cookies.get("storeToken");
  const { t } = useTranslation();
  const lang = Cookies.get("lang");
  const [switchLang, setSwitchLang] = useState(lang || "");
  function switchLanguage(e: any) {
    if (e.target.value) {
      setSwitchLang(e.target.value);
      Cookies.set("lang", e.target.value);
      Router.reload();
    }
  }
  useEffect(() => {
    if (token) {
      Router.push("/");
    }
  }, []);
  return (
    <div className="app-login-layout">
      <div className="app-panel">
        <div className="app-panel-header">
          <Image src={Logo} width={120} height={45} alt="matjarbot" />
        </div>
        <div className="app-panel-content">{children}</div>
        <div className="app-panel-footer">
          {/* <p className="text">&copy; {t("copyright_text")}</p> */}
          <p className="text">&copy;{t("copyright_text")}</p>
          <ul className="nav app-footer-nav">
            <li>
              <Link href={"/"}>{t("terms_text")}</Link>
            </li>
            <li>
              <Link href={"/"}>{t("privacy_text")}</Link>
            </li>
            <li>
              <Link href={"/"}>{t("about_text")}</Link>
            </li>
            <li>
              <select
                className="switch-lang"
                name="switchLang"
                id="switchLang"
                value={switchLang}
                onChange={switchLanguage}
              >
                <option value="">اختر اللغة</option>
                <option value="ar">عربي</option>
                <option value="en">English</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
LoginLayout.propTypes = {
  children: PropTypes.any,
};
export default LoginLayout;
