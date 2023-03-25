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
        <title>{t("privacy_text")} - matjarbot</title>
      </Head>
      <HeaderTitle title={t("privacy_text")} />
      <div className="sb-who-us">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="sb-who-us-content">
              <h2 className="title" style={{ marginBlock: 19 }}>
                {t("privacy_text_title1")}
              </h2>
              <p className="text">{t("privacy_text_details1")}</p>
              <h2 className="title" style={{ marginBlock: 19 }}>
                {t("privacy_text_title2")}
              </h2>
              <p className="text">{t("privacy_text_details2")}</p>
              <h2 className="title" style={{ marginBlock: 19 }}>
                {t("privacy_text_title3")}
              </h2>
              <p className="text">{t("privacy_text_details3")}</p>
              <h2 className="title" style={{ marginBlock: 19 }}>
                {t("privacy_text_title4")}
              </h2>
              <p className="text">{t("privacy_text_details4")}</p>
              <h2 className="title" style={{ marginBlock: 19 }}>
                {t("privacy_text_title5")}
              </h2>
              <p className="text">{t("privacy_text_details5")}</p>
              <h2 className="title" style={{ marginBlock: 19 }}>
                {t("privacy_text_title6")}
              </h2>
              <p className="text">{t("privacy_text_details6")}</p>
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Home;
