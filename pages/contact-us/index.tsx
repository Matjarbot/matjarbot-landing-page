import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormInput, FormSelect, FormTextarea } from "../../components/Forms";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import LandingLayout from "../../layouts/LandingLayout";
import { useAppSelector } from "../../store/hooks";
import { useForm, ValidationError } from "@formspree/react";

const ContactUs: NextPage = () => {
  const [state, handleSubmit] = useForm("xwkjrlva");
  const [full_name, setFull_name] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();
  const isDark = useAppSelector((state) => state.theme.type);
  return (
    <LandingLayout>
      <Head>
        <title>{t("contact_us_text")} - matjarbot</title>
      </Head> <HeaderTitle
        title={t("contact_us_text")}
        tools={
          <>
            <a
              href="https://api.whatsapp.com/send/?phone=962791082688"
              className={`btn butt-sm flex-center ${
                isDark == "light" ? "butt-dark" : "butt-light"
              }`}
            >
              <span className="material-icons material-icons-outline">
                contact_support
              </span>
              {t("direct_conversation_text")}
            </a>
          </>
        }
        noteText={t("contact_us_details")}
      />
      <div className="sb-contact-us-form">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-xl-6">
                  <FormInput
                    title={t("full_name_text")}
                    value={full_name}
                    handleChange={(e) => setFull_name(e.target.value)}
                    name="full_name"
                  />
                  <FormInput title={t("website_text")} />
                  <FormInput
                    title={t("email_text")}
                    type="email"
                    name="email"
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                  />
                  <ValidationError
                    prefix={t("email_text")}
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="col-xl-6">
                  <FormInput title={t("message_subject_text")} />
                  <FormTextarea
                    minHeight={210}
                    name="message"
                    title={t("message_content_text")}
                    value={message}
                    handleChange={(e) => setMessage(e.target.value)}
                  />
                  <ValidationError
                    prefix={t("message_content_text")}
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <div className="col-xl-12">
                  <ValidationError errors={state.errors} />
                  <div
                    className="d-flex"
                    style={{
                      paddingTop: 10,
                      borderTopWidth: 1,
                      borderTopStyle: "solid",
                      borderTopColor: isDark == "light" ? "#f2f2f2" : "#191919",
                      marginTop: 20,
                    }}
                  >
                    <span className="me-auto"></span>
                    <button className="btn butt-md butt-primary ml-auto">
                      {t("send_informations_text")}
                    </button>
                  </div>
                  {/* <div className="alert alert-success">
                    <strong>Success!</strong>{" "}
                    {state.succeeded && <>Thanks for your submission</>}
                  </div> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default ContactUs;
