import React from "react";
import { useTranslation } from "react-i18next";
import CenterHeading from "../CenterHeading";
import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hooks";

function LandingAbout() {
  const { t } = useTranslation();
  const isDark = useAppSelector((state) => state.theme.type);

  return (
    <div className="sb-landing-about">
      <CenterHeading title={t("app_about_text")} />

      <div className="row">
        <div className="col-lg-7">
          <div className="py-5">
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                transition={{ duration: 1.3, type: "spring", delay: 0.4 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="main-title"
              >
                {t("main_title_about_title")}
              </motion.h3>
            </div>
            <ul className="about-list">
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.3 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("about_text_item_text1")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.33 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                
              >
                {t("about_text_item_text2")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.36 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("about_text_item_text3")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.39 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("about_text_item_text4")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.42 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("about_text_item_text5")}
              </motion.li>
            </ul>
          </div>
        </div>
        <div className="col-lg-5">
          <motion.img
            transition={{ duration: 1.4, type: "spring", delay: 0.3 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={isDark == "dark" ? "/appAbout_invert.png" : "/appAbout.png"}
            alt=""
            className="sb-about-img"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingAbout;
