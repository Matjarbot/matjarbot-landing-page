import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { LanguageActions } from "../../store/languages/languageActions";
import { useAppDispatch } from "../../store/hooks";
import Cookies from "js-cookie";
function LanguageMenu({ refs, setSwitchLangs }: any) {
  const dispatch = useAppDispatch();
  return (
    <motion.div
      ref={refs}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="nav-profile-list"
    >
      <div className="nav-profile-list-content">
        <ul className="list-profile-withicons">
          <li
            className="active"
            onClick={() => {
              Cookies.set('lang', 'ar')
              dispatch(LanguageActions.change("ar"))
              setSwitchLangs(false)
            }}
          >
            <a>العربية</a>
          </li>
          <li onClick={() => {
            dispatch(LanguageActions.change("en"))
            Cookies.set('lang', 'en')
            setSwitchLangs(false)
          }}>
            <a>English</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
LanguageMenu.propTypes = {
  setSwitchLangs: PropTypes.func,
  refs: PropTypes.any,
};
export default LanguageMenu;
