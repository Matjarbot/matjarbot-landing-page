import Head from "next/head";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import PageHeader from "../../components/Panel/PageHeader";
import Panel from "../../components/Panel/Panel";
import AppLayout from "../../layouts/AppLayout";
//import Pagination from "react-js-pagination";
import { useTranslation } from "react-i18next";
import {
  FormInput,
  FormSelect,
  FormTextarea,
} from "../../components/Forms";
import { Checkbox, Space } from "antd";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import UploadPanel from "../../components/Panel/UploadPanel";
import { NextPage } from "next";
const data: any = [
  {
    id: 1,
    name_ar: "منتجات اخرى",
    name_en: "OTHER SPECIAL TYPES OF HONEY",
    type: 0,
    subcategories: [],
  },
  {
    id: 2,
    name_ar: "العسل اليمنى",
    name_en: "YEMANI HONEY",
    type: 0,
    subcategories: [],
  },
  {
    id: 3,
    name_ar: "العسل اليمنى",
    name_en: "YEMANI HONEY",
    type: 0,
    subcategories: [],
  },
  {
    id: 4,
    name_ar: "العسل اليمنى",
    name_en: "YEMANI HONEY",
    type: 0,
    subcategories: [],
  },
];
const AddNew: NextPage = () => {
  const { t } = useTranslation();
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 50, color: "#3da033" }} spin />
  );
  return (
    <AppLayout className="add-new-page">
      <Head>
        <title>{t("add_new_product_text")}</title>
      </Head>
      <PageHeader
        title={t("add_new_product_text")}
        size={"lg"}
        theme={"primary"}
      />
      <div className="app-new-content py-3 mt-2">
        <div className="row">
          <div className="col-lg-8">
            <Panel>
              <div className="row">
                <div className="col-xl-6">
                  <FormInput size={"xs"} title={t("product_name_text")} />
                </div>
                <div className="col-xl-6">
                  <FormInput
                    size={"xs"}
                    isLoading={true}
                    title={t("product_slug_text")}
                  />
                </div>
                <div className="col-xl-12">
                  <FormTextarea size={"xs"} title={t("product_content_text")} />
                </div>
              </div>
            </Panel>
            <UploadPanel />
            
            <Panel>
              <div className="row">
                <div className="col-xl-6">
                  <FormInput size={"xs"} title={'SKU (Stock Keeping Unit)'} />
                </div>
                <div className="col-xl-6">
                  <FormInput
                    size={"xs"}
                    type='number'
                    title={t("quantity_text")}
                  />
                </div>
                <div className="col-xl-12">
                  <FormInput
                    size={"xs"}
                    type='number'
                    title={t("security_stock_text")}
                  />
                  <div className="sb-form-note-text">
                      <p className="text">{t("security_stock_details")}</p>
                    </div>
                </div>
              </div>
            </Panel>
          </div>
          <div className="col-lg-4">
            <Panel>
              <div className="matjarbot-add-new-visibility">
                <div className="matjarbot-visibility-check">
                  <Checkbox onChange={onChange}>
                    {t("not_visibility_text")}
                    <div className="sb-form-note-text">
                      <p className="text">{t("visibility_details")}</p>
                    </div>
                  </Checkbox>
                </div>
                <div className="matjarbot-visibility-form">
                  <FormInput
                    title={t("availability_text")}
                    type="date"
                    size={"xs"}
                  />
                </div>
              </div>
            </Panel>
            <Panel>
              <FormSelect
                title={t("select_category_text")}
                data={data}
                size={"xs"}
              />
            </Panel>
            <Panel>
              <FormInput
                type={"number"}
                title={t("product_price_text")}
                size={"xs"}
              />
            </Panel>
          </div>
        </div>
        <div className="add-new-buttons">
          <Space>
            <button className="btn butt-sm butt-primary">
              {t('create_text')}
            </button>
            <button className="btn butt-sm butt-light">
              {t('create_another_text')}
            </button>
            <button className="btn butt-sm butt-light">
              {t('cancel_text')}
            </button>
          </Space>
        </div>
      </div>
    </AppLayout>
  );
}

export default AddNew;
