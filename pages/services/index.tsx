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
        <title>{t("after_sales_service_text")} - matjarbot</title>
      </Head>
      <HeaderTitle
        title={t("after_sales_service_text")}
        noteText={t("service_text_title")}
      />
      <div className="sb-who-us">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="sb-who-us-content">
              <ul className="text">
                <li style={{ marginBottom: 9 }}>{t("service_item_text1")}</li>
                <li style={{ marginBottom: 9 }}>{t("service_item_text2")}</li>
                <li style={{ marginBottom: 9 }}>{t("service_item_text3")}</li>
                <li style={{ marginBottom: 9 }}>{t("service_item_text4")}</li>
                <li style={{ marginBottom: 9 }}>{t("service_item_text5")}</li>
                <li style={{ marginBottom: 9 }}>{t("service_item_text6")}</li>
                <li style={{ marginBottom: 9 }}>{t("service_item_text7")}</li>
                <li style={{ marginBottom: 9 }}>{t("service_item_text8")}</li>
                <li>{t("service_item_text9")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </LandingLayout>
  );
};

export default Home;
