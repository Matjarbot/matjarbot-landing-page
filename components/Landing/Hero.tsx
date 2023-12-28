import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import BotChat from "./BotChat";
import { useAppSelector } from "../../store/hooks";

function Hero() {
  const { t } = useTranslation();
  const isDark = useAppSelector((state) => state.theme.type);

  return (
    <motion.div
      className="sb-hero mb-5"
      style={{
        backgroundImage:
          isDark == "dark"
            ? `url('/headerbg_invert.png')`
            : `url('/headerbg.png')`,
      }}
    >
      <div className="sb-hero-content">
        <div className="row">
          <div className="col-lg-5">
            <BotChat />
          </div>
          <div className="col-lg-7">
            <div className="sb-hero-body d-flex align-items-center">
              <div style={{ overflow: "hidden" }}>
                <motion.h1
                  transition={{ duration: 1, type: "spring", delay: 0.62 }}
                  initial={{ y: 800, rotate: -80, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                  className="main-title"
                >
                  {t("whats_matjarbot")}
                </motion.h1>
                <motion.p
                  transition={{ duration: 1, type: "spring", delay: 0.64 }}
                  initial={{ y: 800, rotate: -80, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                  className="main-text"
                >
                  {t("whats_matjarbot_details")}
                </motion.p>
                <div className="butt-inner" style={{ overflow: "hidden" }}>
                  <a href={"#joinUs"}>
                    <motion.a
                      transition={{ duration: 1, type: "spring", delay: 0.7 }}
                      initial={{ y: 800, rotate: -80, opacity: 0 }}
                      animate={{ y: 0, rotate: 0, opacity: 1 }}
                      whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                      className="btn butt-primary butt-lg"
                    >
                      {t("join_us_text")}
                    </motion.a>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill={
                  isDark == "dark" ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)"
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill={
                  isDark == "dark" ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)"
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill={
                  isDark == "dark" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"
                }
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="7"
                fill={isDark == "dark" ? "rgba(0,0,0)" : "rgba(255,255,255)"}
              />
            </g>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
