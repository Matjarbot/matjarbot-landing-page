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
import Router from "next/router";
import Alert from "../../components/Alert";

const Home: NextPage = () => {
  const { data: plansItems } = useSWR(`landing/plans`);
  const lang: any = Cookies.get("lang");
  const [validationsErrors, setValidationsErrors]: any = useState({});
  const [validationsGeneral, setValidationsGeneral]: any = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      trade_name: "",
      email: "",
      whatsapp_number: "",
      note: "",
      epayment: null,
      plan_id: "",
    },
    isInitialValid: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsSuccess(false);
      setIsCompleted(false);
      try {
        setValidationsErrors({});
        const res = await axios.post(`landing/subscription/store`, values, {
          headers: {
            "X-localization": lang,
          },
        });
        // Authentication was successful.
        if (res.status === 200) {
          setIsSuccess(false);
          switch (res.data.data.status) {
            case 0:
              setIsSuccess(true);
              
              message.success(t("join_us_message_registed_text"));
            case 1:
              setIsCompleted(true);
              break;

            default:
              setIsSuccess(false);
              setIsCompleted(false);
              message.success(t("join_us_message_text"));
              Router.push(`/otp/verify/${res.data.data.token}`);
              break;
          }
        }
      } catch (error: any) {
        setIsSuccess(false);
        setIsCompleted(false);
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
    <LoadingOutlined style={{ fontSize: 31, color: "#349946" }} spin />
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
                    {isSuccess ? (
                      <div style={{ marginBottom: 7 }}>
                        <Alert
                          title={t("join_us_message_registed_text")}
                          icon="alarm_on"
                          text={t("otp_success_text")}
                        />
                      </div>
                    ) : <>
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
                    <FormInput
                      title={t("full_name_text") + " (*)"}
                      name="full_name"
                      value={formik.values.full_name}
                      handleChange={formik.handleChange}
                      validationsErrors={
                        validationsErrors &&
                        validationsErrors.full_name &&
                        validationsErrors.full_name[0]
                      }
                    />
                    <FormInput
                      title={t("email_text")}
                      name="email"
                      value={formik.values.email}
                      handleChange={formik.handleChange}
                      validationsErrors={
                        validationsErrors &&
                        validationsErrors.email &&
                        validationsErrors.email[0]
                      }
                    />
                    <FormInput
                      title={t("whatsapp_number_text") + " (*)"}
                      name="whatsapp_number"
                      value={formik.values.whatsapp_number}
                      handleChange={formik.handleChange}
                      validationsErrors={
                        validationsErrors &&
                        validationsErrors.whatsapp_number &&
                        validationsErrors.whatsapp_number[0]
                      }
                    />
                    <div className="sb-form-note-text">
                      <p className="text">{t("whatsapp_number_details")}</p>
                    </div>
                    <FormSelect
                      data={plansItems && plansItems.data}
                      title={t("select_plans_text")}
                      name="plan_id"
                      value={formik.values.plan_id}
                      handleChange={formik.handleChange}
                      validationsErrors={
                        validationsErrors &&
                        validationsErrors.plan_id &&
                        validationsErrors.plan_id[0]
                      }
                    />
                    <div className="sb-form-note-text">
                      <p className="text">
                        {t("select_plans_details")}{" "}
                        <Link href={`/plans`}>
                          <a>{t("click_me_text")}</a>
                        </Link>{" "}
                      </p>
                    </div>
                    <FormSelect
                      data={[
                        {
                          id: 0,
                          name_ar: "كاش",
                          name_en: "Cash",
                        },
                        {
                          id: 1,
                          name_ar: "إلكتروني",
                          name_en: "Online",
                        },
                      ]}
                      title={t("payment_method_text")}
                      name="epayment"
                      value={formik.values.epayment}
                      handleChange={formik.handleChange}
                      validationsErrors={
                        validationsErrors &&
                        validationsErrors.epayment &&
                        validationsErrors.epayment[0]
                      }
                    />
                    <FormTextarea
                      title={t("other_notes_text")}
                      name="note"
                      value={formik.values.note}
                      handleChange={formik.handleChange}
                      validationsErrors={
                        validationsErrors &&
                        validationsErrors.note &&
                        validationsErrors.note[0]
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
                  <div className="col-xl-6">
                    <div className="sb-register-info">
                      <div className="sb-register-info-img">
                        <img src={"/5222.png"} alt="" />
                      </div>
                      <div className="sb-register-info-content">
                        <h3 className="title">{t("register_info_title")}</h3>
                        <ul className="meta-text">
                          <li>{t("register_info_text1")}</li>
                          <li>{t("register_info_text2")}</li>
                          <li>{t("register_info_text3")}</li>
                          <li>{t("register_info_text4")}</li>
                          <li>{t("register_info_text5")}</li>
                          <li>{t("register_info_text6")}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                </>}
              </div>
            </div>
          </div>
        </form>
      </Spin>
    </LandingLayout>
  );
};

export default Home;
