import { Statistic, Space, Spin } from "antd";
import Head from "next/head";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import PageHeader from "../../components/Panel/PageHeader";
import Panel from "../../components/Panel/Panel";
import AppLayout from "../../layouts/AppLayout";
import { useState } from "react";
import Link from "next/link";
import { Search, Table } from "../../components/_Snap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import AddNewCategory from "../../components/Modal/AddNewCategory";
import AddNewSubCategory from "../../components/Modal/AddNewSubCategory";
import { NextPage } from "next";
import { useTranslation } from "react-i18next";

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

  const [isShowAddNewCategory, setIsShowAddNewCategory] = useState(false);
  const [isShowAddNewSubCategory, setIsShowAddNewSubCategory] = useState(false);
  const columns = [
    { title: t("category_name"), dataIndex: "name_en" },
    {
      title: t("category_type"),
      dataIndex: "type",
      render(e: number) {
        return e == 0 ? t("reservation") : t("order");
      },
    },
    {
      title: t("tools"),
      dataIndex: "",
      render(e: { id: string; subcategories: Array<any> }) {
        return (
          <>
            <Space>
              <button className="circular-btn sm red">
                <FaTrash />
              </button>
              <Link href={`/categories/edit/${e.id}`}>
                <a className="circular-btn sm green">
                  <FaEdit />
                </a>
              </Link>
              <Link href={`/categories/${e.id}`}>
                <a className="circular-btn gray sm">
                  <FaEye />
                </a>
              </Link>
              <button
                type="button"
                onClick={() => setIsShowAddNewSubCategory(true)}
                className={`btn butt-xs2 ${
                  e.subcategories.length == 0 ? "butt-dark" : "butt-light"
                } flex-center`}
              >
                <span className="material-icons material-icons-outlined">
                  add
                </span>
                إضافة تصنيف فرعي جديد
              </button>
            </Space>
          </>
        );
      },
    },
  ];
  return (
    <AppLayout>
      <Head>
        <title>التصنيفات</title>
      </Head>
      {isShowAddNewCategory && (
        <AddNewCategory setIsShowAddNewCategory={setIsShowAddNewCategory} />
      )}
      {isShowAddNewSubCategory && (
        <AddNewSubCategory
          setIsShowAddNewSubCategory={setIsShowAddNewSubCategory}
          category_id={28} // Test Id
        />
      )}
      <PageHeader
        title={"التصنيفات"}
        size={"lg"}
        btnSize={"xs"}
        theme={"primary"}
        handleClick={() => setIsShowAddNewCategory(true)}
        showAllText={"إضافة تصنيف جديد"}
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
            <Search title="البحث في التصنيفات..." />
          </Panel>
        </div>
      </div>
      <div className="app-new-content">
        <Table data={data} columns={columns} />
        {/* <Spin indicator={antIcon} spinning={false}>
          <div className={"app-new-table"}>
            <table className="table">
              <thead>
                <tr>
                  <th>نوع التصنيف</th>
                  <th>اسم التصنيف بالعربي</th>
                  <th>اسم التصنيف بالإنجليزي</th>
                  <th>الأدوات</th>
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
                          <button className="circular-btn sm red">
                            <FaTrash />
                          </button>
                          <Link href={`/categories/edit/${e.id}`}>
                            <a className="circular-btn sm green">
                              <FaEdit />
                            </a>
                          </Link>
                          <Link href={`/categories/${e.id}`}>
                            <a className="circular-btn gray sm">
                              <FaEye />
                            </a>
                          </Link>
                          <button
                            type="button"
                            onClick={() => setIsShowAddNewSubCategory(true)}
                            className={`btn butt-xs2 ${
                              e.subcategories.length == 0
                                ? "butt-dark"
                                : "butt-light"
                            } flex-center`}
                          >
                            <span className="material-icons material-icons-outlined">
                              add
                            </span>
                            إضافة تصنيف فرعي جديد
                          </button>
                        </Space>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Spin> */}
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
};

export default Home;
