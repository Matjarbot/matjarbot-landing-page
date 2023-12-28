import { useScroll, motion, MotionValue, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import CenterHeading from "../CenterHeading";
import { useAppSelector } from "../../store/hooks";

function Features() {
  const ref = useRef(null);
  const isDark = useAppSelector((state) => state.theme.type);

  const { scrollYProgress } = useScroll({ target: ref });
  //const scaleX = useSpring(scrollYProgress);
  const { t } = useTranslation();

  return (
    <div className="feature-inner">
      <CenterHeading title={t("why_matjarbot_text")} />
      <div className="row">
        <div className="col-lg-4">
          <motion.div
            transition={{ duration: 1, type: "spring" }}
            ref={ref}
            style={{ translateY: scrollYProgress, overflow: "hidden" }}
            className="feature-item"
          >
            <div style={{ overflow: "hidden" }}>
              <motion.img
                src={isDark == "dark" ? "/721_invert.svg" : "/721.svg"}
                height={100}
                transition={{ duration: 2, type: "spring", delay: 0.2 }}
                initial={{ opacity: 0, rotate: 30 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                alt=""
              />
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                transition={{ duration: 1.3, type: "spring", delay: 0.4 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="title"
              >
                {t("easy_use_title")}
              </motion.h3>
            </div>
            <ul style={{ overflow: "hidden" }} className="text">
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("easy_use_text1")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.55 }}
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("easy_use_text2")}
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <div className="col-lg-4">
          <motion.div
            transition={{ duration: 1, type: "spring" }}
            ref={ref}
            style={{ translateY: scrollYProgress, overflow: "hidden" }}
            className="feature-item"
          >
            <div style={{ overflow: "hidden" }}>
              <motion.img
                src={isDark == "dark" ? "/760_invert.svg" : "/760.svg"}
                height={100}
                transition={{ duration: 2, type: "spring", delay: 0.2 }}
                initial={{ opacity: 0, rotate: 30 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                alt=""
              />
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                transition={{ duration: 1.3, type: "spring", delay: 0.4 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="title"
              >
                {t("satisfied_customers_title")}
              </motion.h3>
            </div>
            <ul style={{ overflow: "hidden" }} className="text">
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("satisfied_customers_text1")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.55 }}
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("satisfied_customers_text2")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.6 }}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("satisfied_customers_text3")}
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <div className="col-lg-4">
          <motion.div
            transition={{ duration: 1, type: "spring" }}
            ref={ref}
            style={{ translateY: scrollYProgress, overflow: "hidden" }}
            className="feature-item"
          >
            <div style={{ overflow: "hidden" }}>
              <motion.img
                src={isDark == "dark" ? "/1020_invert.svg" : "/1020.svg"}
                height={100}
                transition={{ duration: 2, type: "spring", delay: 0.2 }}
                initial={{ opacity: 0, rotate: 30 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                alt=""
              />
            </div>
            <div style={{ overflow: "hidden" }}>
              <motion.h3
                transition={{ duration: 1.3, type: "spring", delay: 0.4 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="title"
              >
                {t("unique_services_title")}
              </motion.h3>
            </div>
            <ul style={{ overflow: "hidden" }} className="text">
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.5 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("unique_services_text1")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.55 }}
                initial={{ opacity: 0, x: -70 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("unique_services_text2")}
              </motion.li>
              <motion.li
                transition={{ duration: 1.3, type: "spring", delay: 0.6 }}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                {t("unique_services_text3")}
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
