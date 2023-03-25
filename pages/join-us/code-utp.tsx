import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormInput, FormSelect, FormTextarea } from "../../components/Forms";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import LandingLayout from "../../layouts/LandingLayout";
import { useAppSelector } from "../../store/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import { message, Spin } from "antd";
import useSWR from "swr";
import { useFormik } from "formik";
import axios from "../../lib/axios";
import Cookies from "js-cookie";

const Home: NextPage = () => {
  const { data: plansItems } = useSWR(`landing/plans`);
  const lang: any = Cookies.get("lang");
  const [validationsErrors, setValidationsErrors]: any = useState({});
  const [validationsGeneral, setValidationsGeneral]: any = useState({});
  const formik = useFormik({
    initialValues: {
      full_name: "",
      trade_name: "",
      email: "",
      whatsapp_number: "",
      note: "",
      plan_id: "",
    },
    isInitialValid: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        setValidationsErrors({});
        const res = await axios.post(`landing/subscription/store`, values, {
          headers: {
            "X-localization": lang,
          },
        });
        // Authentication was successful.
        if (res.status === 200) {
          message.success("لقد تم إضافة الميزة بنجاح");
          //Router.reload()
        }
      } catch (error: any) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.errors
        ) {
          setValidationsErrors(error.response.data.errors);
        }
        if (error.response && error.response.data) {
          setValidationsGeneral(error.response.data);
        }
        message.error(t("error"));
      }
    },
  });
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 31, color: "#3da033" }} spin />
  );
  const { t } = useTranslation();
  const isDark = useAppSelector((state) => state.theme.type);
  return (
    <LandingLayout>
      <Head>
        <title>{t("join_us_text")} - matjarbot</title>
      </Head>
      <HeaderTitle title={t("join_us_text")} />
      <Spin indicator={antIcon} spinning={formik.isSubmitting}>
        <form onSubmit={formik.handleSubmit}>
          <div className="sb-contact-us-form">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-xl-6">
                    <FormInput
                      title={t("trade_name_text")}
                      name="trade_name"
                      value={formik.values.trade_name}
                      handleChange={formik.handleChange}
                      validationsErrors={
                        validationsErrors &&
                        validationsErrors.trade_name &&
                        validationsErrors.trade_name[0]
                      }
                    />
                    <div
                      className="d-flex"
                      style={{
                        paddingTop: 10,
                        borderTopWidth: 1,
                        borderTopStyle: "solid",
                        borderTopColor:
                          isDark == "light" ? "#f2f2f2" : "#191919",
                        marginTop: 20,
                      }}
                    >
                      <span className="me-auto"></span>
                      <button
                        className="btn butt-lg butt-primary ml-auto"
                        style={{ width: "100%" }}
                      >
                        {t("join_us_text")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Spin>
    </LandingLayout>
  );
};

export default Home;
