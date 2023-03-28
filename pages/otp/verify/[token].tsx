import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useSWR from "swr";
import AppLayout from "../../../layouts/AppLayout";
import Head from "next/head";
import { useAppSelector } from "../../../store/hooks";
import { LoadingOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { message, Spin } from "antd";
import axios from "../../../lib/axios";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Router from "next/router";
import LandingLayout from "../../../layouts/LandingLayout";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";
import PageHeader from "../../../components/Panel/PageHeader";
import Alert from "../../../components/Alert";

function Id() {
  const router = useRouter();
  const query = router.query;
  const lang: any = Cookies.get("lang");
  const [validationsErrors, setValidationsErrors]: any = useState({});
  const [validationsGeneral, setValidationsGeneral]: any = useState({});
  const [isSending, setIssending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  async function ResendCode() {
    setIssending(true);
    try {
      setValidationsErrors({});
      const res = await axios.post(
        `landing/otp/resend`,
        { token: query.token },
        {
          headers: {
            "X-localization": lang,
          },
        }
      );
      // Authentication was successful.
      if (res.status === 200) {
        setIssending(false);
      }
    } catch (error: any) {
      setIssending(false);
      if (error.response && error.response.data && error.response.data.errors) {
        setValidationsErrors(error.response.data.errors);
      }
      if (error.response && error.response.data) {
        setValidationsGeneral(error.response.data);
      }
      message.error(t("error_message_form"));
    }
  }
  const formik = useFormik({
    initialValues: {
      otp: "",
      token: query.token,
    },
    isInitialValid: true,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsSuccess(false);
      try {
        setValidationsErrors({});
        const res = await axios.post(`landing/otp/verify`, values, {
          headers: {
            "X-localization": lang,
          },
        });
        // Authentication was successful.
        if (res.status === 200) {
          message.success(t("otp_message_success_form"));
          setIsSuccess(true);
        }
      } catch (error: any) {
        setIsSuccess(false);
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
        message.error(t("error_message_form"));
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
        <title>{t("confirm_activation_code_text")}</title>
      </Head>
      <form onSubmit={formik.handleSubmit}>
        <div className="sb-contact-us-form">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <Spin indicator={antIcon} spinning={formik.isSubmitting}>
                <PageHeader title={t("confirm_activation_code_text")} />
                <div className="otp-code-form">
                  {!isSuccess && validationsGeneral.msg && (
                    <div style={{ marginBottom: 7 }}>
                      <Alert
                        title={t("error_title")}
                        theme="red"
                        icon="report_problem"
                        text={validationsGeneral.msg}
                      />
                    </div>
                  )}
                  {isSuccess && (
                    <div style={{ marginBottom: 7 }}>
                      <Alert
                        title={t("otp_success_title")}
                        icon="alarm_on"
                        text={t("otp_success_text")}
                      />
                    </div>
                  )}
                  {isSuccess ? (
                    ""
                  ) : (
                    <>
                      <input
                        placeholder="######"
                        className="large-code-input"
                        type="text"
                        name="otp"
                        value={formik.values.otp}
                        onChange={formik.handleChange}
                      />
                      {validationsErrors && validationsErrors.otp && (
                        <div style={{ overflow: "hidden" }}>
                          <motion.div
                            initial={{ y: -12, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="app-form-note form-note-error"
                          >
                            <p className="text">{validationsErrors.otp[0]}</p>
                          </motion.div>
                        </div>
                      )}
                      <button
                        type="submit"
                        className="btn butt-primary butt-sm"
                        style={{ width: "100%", marginBottom: 8 }}
                      >
                        {t("code_verification_text")}
                      </button>
                      <button
                        onClick={ResendCode}
                        type="button"
                        disabled={isSending}
                        className="btn butt-light butt-sm flex-just-center"
                        style={{ width: "100%", flexDirection: "row" }}
                      >
                        {isSending && (
                          <LoadingOutlined spin style={{ marginInline: 5 }} />
                        )}
                        {!isSending
                          ? t("resend_otp_code_test")
                          : t("loading_text")}
                      </button>
                    </>
                  )}
                </div>
              </Spin>
            </div>
          </div>
        </div>
      </form>
    </LandingLayout>
  );
}

export default Id;
