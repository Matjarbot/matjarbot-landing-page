import { NextPage } from "next";
import React from "react";
import { useTranslation } from "react-i18next";
import CenterHeading from "../components/CenterHeading";
import Features from "../components/Landing/Features";
import Hero from "../components/Landing/Hero";
import LandingAbout from "../components/Landing/LandingAbout";
import LandingLayout from "../layouts/LandingLayout";
import { useAppSelector } from "../store/hooks";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import FixedWhatapp from "../components/Landing/FixedWhatapp";
import Head from "next/head";
import MassengerChat from "../components/Chat/massengerChat";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import ContactUs from "./contact-us";
import JoinUs from "./join-us";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const isDark = useAppSelector((state) => state.theme.type);
  return (
    <LandingLayout>
      <Head>
        <title>{t("main")} - matjarbot</title>
      </Head>
      <Hero />
      {/* <div className="sb-clients-logos" dir="ltr">
        <CenterHeading title={t("our_clients_text")} />
        <ScrollingCarousel
          className="sb-logos-slider"
          rightIcon={
            <button className="navigate right-icon">
              <FaAngleRight />
            </button>
          }
          leftIcon={
            <button className="navigate left-icon">
              <FaAngleLeft />
            </button>
          }
        >
          <img src={isDark == "dark" ? "/l2_invert.png" : "/l2.png"} alt="" />
          <img src={isDark == "dark" ? "/l3_invert.png" : "/l3.png"} alt="" />
          <img src={isDark == "dark" ? "/l4_invert.png" : "/l4.png"} alt="" />
          <img src={isDark == "dark" ? "/l5_invert.png" : "/l5.png"} alt="" />
          <img src={isDark == "dark" ? "/l6_invert.png" : "/l6.png"} alt="" />
          <img src={isDark == "dark" ? "/l7_invert.png" : "/l7.png"} alt="" />
          <img src={isDark == "dark" ? "/l8_invert.png" : "/l8.png"} alt="" />
          <img src={isDark == "dark" ? "/l9_invert.png" : "/l9.png"} alt="" />
        </ScrollingCarousel>
      </div> */}

      <LandingAbout />
      <Features />

      <HeaderTitle title={t("team_work_text")} />
      <div className="sb-who-us ">
        <div
          className="row justify-content-center "
          style={{ paddingBlock: 100 }}
        >
          <div className="col-lg-10">
            <div className="row">
              <div className="col-xl-6">
                <div className="sb-who-us-img">
                  <img
                    src={
                      isDark == "light" ? "/kuwait.png" : "/kuwait_invert.png"
                    }
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="sb-who-us-content">
                  <h2 className="title">{t("who_us_title")}</h2>
                  <p className="text">{t("who_us_text")}</p>
                  <p className="text-location flex-center">
                    <span className="material-icons material-icons-outlined">
                      location_on
                    </span>
                    {t("who_us_location_text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JoinUs />
      {/* <ContactUs /> */}
      <MassengerChat />
      <FixedWhatapp />
    </LandingLayout>
  );
};

export default Home;
