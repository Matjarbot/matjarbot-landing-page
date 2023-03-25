import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import Features from "../../components/Landing/Features";
import LandingLayout from "../../layouts/LandingLayout";
import { useAppSelector } from "../../store/hooks";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const isDark = useAppSelector((state) => state.theme.type);
  return (
    <LandingLayout>
      <Head>
        <title>{t("team_work_text")} - matjarbot</title>
      </Head>
      <HeaderTitle title={t("team_work_text")} />
      <div className="sb-who-us">
        <div className="row justify-content-center">
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
      <Features />
    </LandingLayout>
  );
};

export default Home;
