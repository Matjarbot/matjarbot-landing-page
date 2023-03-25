import { useEffect, useState, useRef } from "react";
// @ts-ignore

import { Avatar, Badge, Layout } from "antd";
import ProfileMenu from "./Dropdown/ProfileMenu";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ThemeActions } from "../store/theme/themesActions";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import {
  AiOutlineGlobal,
  AiOutlineMessage,
  AiOutlineNotification, 
} from "react-icons/ai";
import useOutSide from "../hooks/useOutSide";
import LanguageMenu from "./Dropdown/LanguageMenu";
function Header() {
  const { Header } = Layout;
  const [isShowProfileMenu, setIsShowProfileMenu] = useState(false);
  const [isShowLanguageMenu, setIsShowLanguageMenu] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const lang = useAppSelector((state) => state.language.type);
  const dispatch = useAppDispatch();

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };
  useEffect(() => {
    isDarkMode
      ? dispatch(ThemeActions.change("dark"))
      : dispatch(ThemeActions.change("light"));
  }, [isDarkMode]);
  useEffect(() => {
    hideLanguage();
  }, [lang]);
  function hideLanguage() {
    setIsShowLanguageMenu(false);
  }
  const languageModal: any = useRef();
  const languageBtn: any = useRef();
  useOutSide([languageModal, languageBtn], hideLanguage);
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="flex-center justify-content-between">
        <div className="header-user-aside ">
          <button
            type="button"
            onClick={() => setIsShowProfileMenu(!isShowProfileMenu)}
            className="btn butt-white-text butt-md flex-center"
          >
            <Avatar
              style={{ marginInline: 4 }}
              size={"default"}
              src={`/img3.jpg`}
            />
          </button>
          {isShowProfileMenu && (
            <ProfileMenu setIsShowProfileMenu={setIsShowProfileMenu} />
          )}
        </div>
        <div className="tools-nav  px-2 flex-center">
          <button
            onClick={() => {
              setDarkMode(!isDarkMode);
            }}
            className={`circular-btn ${isDarkMode ? "dark" : "gray"} md mx-1`}
            type="button"
          >
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={16}
            />
          </button>
          <Badge
            className="ztop_100"
            count={4}
            size="small"
            offset={lang === "ar" ? [44, 7] : [7, 7]}
          >
            <button className="circular-btn gray md mx-1" type="button">
              <AiOutlineMessage />
            </button>
          </Badge>
          <Badge
            count={4}
            size="small"
            offset={lang === "ar" ? [44, 7] : [7, 7]}
          >
            <button className="circular-btn gray md mx-1" type="button">
              <AiOutlineNotification />
            </button>
          </Badge>

          <button
            className="circular-btn with-text gray md mx-1 d-flex align-items-center g-5"
            type="button"
            ref={languageBtn}
            onClick={() => setIsShowLanguageMenu(!isShowLanguageMenu)}
          >
            <AiOutlineGlobal /> {lang === "en" ? "English" : " العربية "}
          </button>

          {isShowLanguageMenu && <LanguageMenu refs={languageModal} />}
        </div>
      </div>
    </Header>
  );
}

export default Header;
