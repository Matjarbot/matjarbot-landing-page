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
        <title>{t("terms_text")} - matjarbot</title>
      </Head>
      <HeaderTitle title={t("terms_text")} />
      <div className="sb-who-us">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="sb-who-us-content">
              <p className="text">{t("terms_text_details1")}</p>
              <h2 className="title" style={{ marginBlock: 19 }}>{t("terms_text_title1")}</h2>
              <ul className="text">
                <li style={{ marginBottom: 9 }}>{t("terms_text_details1")}</li>
                <li style={{ marginBottom: 9 }}>{t("terms_text_details2")}</li>
                <li style={{ marginBottom: 9 }}>{t("terms_text_details3")}</li>
              </ul>
              <h2 className="title" style={{ marginBlock: 19 }}>{t("terms_text_title2")}</h2>
              <ul className="text">
                <li style={{ marginBottom: 9 }}>{t("terms_text_details4")}</li>
                <li style={{ marginBottom: 9 }}>{t("terms_text_details5")}</li>
                <li>{t("terms_text_details6")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Home;
