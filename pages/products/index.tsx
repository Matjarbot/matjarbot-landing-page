import { Statistic, Space, Spin } from "antd";
import Head from "next/head";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import PageHeader from "../../components/Panel/PageHeader";
import Panel from "../../components/Panel/Panel";
import AppLayout from "../../layouts/AppLayout";
import Link from "next/link";
//import Pagination from "react-js-pagination";
import { FaEdit, FaEye, FaSearch, FaTrash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Router from "next/router";
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
const Home: NextPage = () => {
  const { t } = useTranslation();

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 50, color: "#349946" }} spin />
  );
  return (
    <AppLayout>
      <Head>
        <title>{t("products_or_services")}</title>
      </Head>
      <PageHeader
        title={t("products_or_services")}
        size={"lg"}
        btnSize={"xs"}
        theme={"primary"}
        handleClick={() => Router.push(`/products/add-new`)}
        showAllText={t("add_new_product_text")}
      />
      <div className="row py-2 mt-3">
        <div className="col-md-2">
          <Panel>
            <Statistic title="مجموع التصنيفات " value={43212} />
          </Panel>
        </div>
        <div className="col-md-2">
          <Panel>
            <Statistic title="تصنيفات الحجز" value={14} />
          </Panel>
        </div>
        <div className="col-md-2">
          <Panel>
            <Statistic title="تصنيفات الطلب " value={8} />
          </Panel>
        </div>
        <div className="col-md-6">
          <Panel>
            <div className="matjarbot-search-form">
              <input
                type="text"
                className="sb-form"
                placeholder="البحث في التصنيفات..."
              />
              <span className="search-icon">
                <FaSearch />
              </span>
            </div>
          </Panel>
        </div>
      </div>
      <div className="app-new-content">
        <Spin indicator={antIcon} spinning={false}>
          <div className={"app-new-table"}>
            <table className="table">
              <thead>
                <tr>
                  <th>{t("product_name_text")}</th>
                  <th>{t("quantity_text")}</th>
                  <th>{t("date_text")}</th>
                  <th>{t("outils_text")}</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((e: any) => (
                    <tr key={e.id}>
                      <td>{e.type == 0 ? "حجز" : "طلب"}</td>
                      <td>
                        {e.subcategories && e.subcategories.length > 0 ? (
                          <Link href={`/categories/${e.id}`}>
                            <a>{e.name_ar}</a>
                          </Link>
                        ) : (
                          <a className="pe-none text-black">{e.name_ar}</a>
                        )}
                      </td>
                      <td>
                        {e.subcategories && e.subcategories.length > 0 ? (
                          <Link href={`/categories/${e.id}`}>
                            <a>{e.name_en}</a>
                          </Link>
                        ) : (
                          <a className="pe-none text-black">{e.name_en}</a>
                        )}
                      </td>

                      <td>
                        <Space>
                          <button className="circular-btn sm red-text">
                            <FaTrash />
                          </button>
                          <Link href={`/categories/edit/${e.id}`}>
                            <a className="circular-btn sm green-text">
                              <FaEdit />
                            </a>
                          </Link>
                          <Link href={`/categories/${e.id}`}>
                            <a className="circular-btn gray sm">
                              <FaEye />
                            </a>
                          </Link>
                        </Space>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* {data && data.data?.length == 0 && (
              <Result
                status="404"
                title={t("empty_data_title")}
                subTitle={t("empty_data_text")}
              />
            )} */}
          </div>
        </Spin>
        {/* {data && data.data?.length !== 0 && (
          <div dir="ltr">
            <div className="app-new-pagination">
              <Pagination
                activePage={data.current_page}
                itemsCountPerPage={data.per_page || 0}
                totalItemsCount={data.total || 0}
                onChange={(pageNo) => setPageNumber(pageNo)}
                pageRangeDisplayed={8}
                itemClass="page-item"
                linkClass="page-link"
                firstPageText={t("first_page")}
                lastPageText={t("last_page")}
              />
            </div>
          </div>
        )} */}
      </div>
    </AppLayout>
  );
}

export default Home;
