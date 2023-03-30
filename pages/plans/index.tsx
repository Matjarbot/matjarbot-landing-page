import Cookies from "js-cookie";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";
import useSWR from "swr";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import LandingLayout from "../../layouts/LandingLayout";
//import { useAppSelector } from "../../store/hooks";


const lang = Cookies.get("lang");

interface Item {
  id: any;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  is_active: any;
  price: number;
  currency: string;
  interval: string;
  features: any;
}
interface Features {
  id: any;
  name_ar: string;
  name_en: string;
  description_ar: string;
  description_en: string;
  is_active: any;
  unit_ar: string;
  unit_en: string;
  pivot: {
    feature_id: any;
    plan_id: any;
    value_ar: string;
    value_en: string;
  };
}
const Home: NextPage = () => {
  const { t } = useTranslation();
  // const { data: plansItems } = useSWR(`landing/plans`);
  const plansItems = {
    data: [
      {
        id: 1,
        name_ar: "الأساسية / شهريا",
        name_en: "Basic",
        description_ar: "خطة اساسية",
        description_en: "basic",
        is_active: 1,
        price: 5,
        currency: "دينار أردني",
        interval: "month",
        created_at: null,
        updated_at: "2022-09-10T09:19:35.000000Z",
        features: [
          {
            id: "1",
            name_ar: "عدد الرسائل",
            name_en: "No. messages",
            unit_ar: "رسالة/شهريا",
            unit_en: "message/month",
            pivot: {
              feature_id: 1,
              plan_id: 1,
              value_ar: "1000",
              value_en: "1000",
            },
          },
          {
            id: "2",
            name_ar: "عدد المنتجات",
            name_en: "No. Products",
            unit_ar: "منتج",
            unit_en: "product",
            pivot: {
              feature_id: 2,
              plan_id: 1,
              value_ar: "30",
              value_en: "30",
            },
          },
          {
            id: "3",
            name_ar: "بوابات الدفع",
            name_en: "Payment gates",
            unit_ar: "",
            unit_en: "",
            pivot: {
              feature_id: 3,
              plan_id: 1,
              value_ar: " مدعوم",
              value_en: " supported",
            },
          },
          {
            id: "4",
            name_ar: "عمولة المبيعات",
            name_en: "Sales commission",
            unit_ar: "%",
            unit_en: "%",
            pivot: {
              feature_id: 4,
              plan_id: 1,
              value_ar: "0",
              value_en: "0",
            },
          },

          {
            id: "5",
            name_ar: "رسوم التجهيز لأول مرة",
            name_en: "Setup fees",
            unit_ar: "دينار أردني",
            unit_en: "JD",
            pivot: { 
              feature_id: 5,
              plan_id: 1,
              value_ar: "5",
              value_en: "5" },
          },
          {
            id: "6",
            name_ar: "عرض الصور",
            name_en: "Show images",
            unit_ar: "",
            unit_en: "",
            pivot: { 
              feature_id: 6,
              plan_id: 1,
              value_ar: "نعم",
              value_en: "Yes" },
          },
          {
            id: "7",
            name_ar: "الدعم الفني",
            name_en: "Support",
            unit_ar: "",
            unit_en: "",
            pivot: { 
              feature_id: 7,
              plan_id: 1,
              value_ar: "متوفر",
              value_en: "available" },
          },
        ],
      },
      {
        id: 2,
        name_ar: "المتقدّمة / شهريا",
        name_en: "Advanced",
        description_ar: "fgfd",
        description_en: "dfgdf",
        is_active: 1,
        price: 15,
        currency: "دينار أردني",
        interval: "year",
        created_at: null,
        updated_at: "2022-09-10T09:37:56.000000Z",
        features: [
          {
            id: "1",
            name_ar: "عدد الرسائل",
            name_en: "No. messages",
            unit_ar: "رسالة/شهريا",
            unit_en: "message/month",
            pivot: {
              feature_id: 1,
              plan_id: 2,
              value_ar: "5000",
              value_en: "5000",
            },
          },
          {
            id: "2",
            name_ar: "عدد المنتجات",
            name_en: "No. Products",
            unit_ar: "منتج",
            unit_en: "product",
            pivot: {
              feature_id: 2,
              plan_id: 2,
              value_ar: "60",
              value_en: "60",
            },
          },
          {
            id: "3",
            name_ar: "بوابات الدفع",
            name_en: "Payment gates",
            unit_ar: "",
            unit_en: "",
            pivot: {
              feature_id: 3,
              plan_id: 2,
              value_ar: " مدعوم",
              value_en: " supported",
            },
          },
          {
            id: "4",
            name_ar: "عمولة المبيعات",
            name_en: "Sales commission",
            unit_ar: "%",
            unit_en: "%",
            pivot: {
              feature_id: 4,
              plan_id: 2,
              value_ar: "0",
              value_en: "0",
            },
          },

          {
            id: "5",
            name_ar: "رسوم التجهيز لأول مرة",
            name_en: "Setup fees",
            unit_ar: "دينار أردني",
            unit_en: "JD",
            pivot: { 
              feature_id: 5,
              plan_id: 2,
              value_ar: "5",
              value_en: "5" },
          },
          {
            id: "6",
            name_ar: "عرض الصور",
            name_en: "Show images",
            unit_ar: "",
            unit_en: "",
            pivot: { 
              feature_id: 6,
              plan_id: 2,
              value_ar: "نعم",
              value_en: "Yes" },
          },
          {
            id: "7",
            name_ar: "الدعم الفني",
            name_en: "Support",
            unit_ar: "",
            unit_en: "",
            pivot: { 
              feature_id: 7,
              plan_id: 2,
              value_ar: " مدعوم",
              value_en: " supported",
           
             },
          },
        ],
      },
      {
        id: 3,
        name_ar: "الممتازة / سنويا",
        name_en: "Yearely",
        description_ar: "اشتراك مميز",
        description_en: "perfect",
        is_active: 1,
        price: 120,
        currency: "دينار أردني",
        interval: "year",
        created_at: null,
        updated_at: "2022-09-10T09:47:46.000000Z",
        features: [
          {
            id: "1",
            name_ar: "عدد الرسائل",
            name_en: "No. messages",
            unit_ar: "رسالة/شهريا",
            unit_en: "message/month",
            pivot: {
              feature_id: 1,
              plan_id: 3,
              value_ar: "10,000",
              value_en: "10,000",
            },
          },
          {
            id: "2",
            name_ar: "عدد المنتجات",
            name_en: "No. Products",
            unit_ar: "منتج",
            unit_en: "product",
            pivot: {
              feature_id: 2,
              plan_id: 3,
              value_ar: "500",
              value_en: "500",
            },
          },
          {
            id: "3",
            name_ar: "بوابات الدفع",
            name_en: "Payment gates",
            unit_ar: "",
            unit_en: "",
            pivot: {
              feature_id: 3,
              plan_id: 3,
              value_ar: " مدعوم",
              value_en: " supported",
            },
          },
          {
            id: "4",
            name_ar: "عمولة المبيعات",
            name_en: "Sales commission",
            unit_ar: "%",
            unit_en: "%",
            pivot: {
              feature_id: 4,
              plan_id: 3,
              value_ar: "0",
              value_en: "0",
            },
          },

          {
            id: "5",
            name_ar: "رسوم التجهيز لأول مرة",
            name_en: "Setup fees",
            unit_ar: "دينار أردني",
            unit_en: "JD",
            pivot: { 
              feature_id: 5,
              plan_id: 3,
              value_ar: "5",
              value_en: "5" },
          },
          {
            id: "6",
            name_ar: "عرض الصور",
            name_en: "Show images",
            unit_ar: "",
            unit_en: "",
            pivot: { 
              feature_id: 6,
              plan_id: 3,
              value_ar: "نعم",
              value_en: "Yes" },
          },
          {
            id: "7",
            name_ar: "الدعم الفني",
            name_en: "Support",
            unit_ar: "",
            unit_en: "",
            pivot: { 
              feature_id: 7,
              plan_id: 3,
              value_ar: "في أسرع وقت",
              value_en: "as soon as possible" },
          },
        ],
      },
    ],
  };

  function switchValue(value: any, unit: string) {
    switch (value) {
      case "false":
        return t("no_text");

      case "true":
        return t("yes_text");

      case "unlimited":
        return t("unlimited_text");

      default:
        return value + " " + unit;
        break;
    }
  }
  return (
    <LandingLayout>
      <Head>
        <title>{t("plan_text")} - matjarbot</title>
      </Head>
      <HeaderTitle title={t("plan_text")} />
      <div className="plans-wrapper">
        <div className="row">
          {plansItems &&
            plansItems.data.map((item: Item) => (
              <div className="col-lg-4" key={item.id}>
                <div
                  className={`plan-item ${item.id == "1" ? "blue" : ""} ${
                    item.id == "2" ? "green" : ""
                  }`}
                >
                  <div className="plan-item-header flex-center">
                    <div className="plan-item-header-content ml-auto">
                      <h4 className="title">
                        {lang == "ar" ? item.name_ar : item.name_en}
                      </h4>
                    </div>
                    <div className="plan-item-header-tools me-auto">
                      <span className="plan-price">
                        <span className="plan-price">
                          {" "}
                          {item.price}
                        </span>
                        {" "}
                        <span className="plan-price-symbole">
                          {" "}
                          {item.currency}
                        </span>
                     
                      </span>
                    </div>
                  </div>

                  <div className="plan-item-body">
                    {item.features && (
                      <ul className="plan-item-body-list">
                        {item.features.map((feat: Features) => (
                          <li key={feat.id}>
                            {lang === "ar" ? feat.name_ar : feat.name_en}
                            <span className="left-item">
                              {switchValue(
                                lang == "ar"
                                  ? feat.pivot.value_ar
                                  : feat.pivot.value_en,
                                lang == "ar" ? feat.unit_ar : feat.unit_en
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </LandingLayout>
  );
};

export default Home;
