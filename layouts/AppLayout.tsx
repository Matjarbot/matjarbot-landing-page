import { ReactElement, useEffect, useState } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import { Layout, Spin } from "antd";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../store/hooks";
import NewHeader from "../components/Header";

const AppLayout = ({
  children,
  className = "",
}: {
  children: any;
  className?: string;
}): ReactElement => {
  const [loading, setLoading] = useState(false);

  const lang = useAppSelector((state: any) => state.language.type);
  const theme = useAppSelector((state: any) => state.theme.type);

  useEffect((): any => {
    const handleStart = (url: any) => {
      url !== Router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    // socket disconnet onUnmount if exists
  }, [Router]);
  const { Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 64, color: "#349946" }} spin />
  );

  return (
    <>
      <Layout
        className={`snap_layout_wrapper ${
          theme === "light" ? "light" : "dark"
        } ${lang === "en" ? "ltr_lang" : "rtl_lang"}`}
        style={{ minHeight: "100vh" }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          breakpoint={"lg"}
        >
          <div className="logo" />
          <Sidebar isHiddenItemsText={collapsed} />
        </Sider>
        <Layout className="site-layout">
          <NewHeader />
          <Content style={{ margin: "0 8px" }}>
            <Spin indicator={antIcon} spinning={loading}>
              <div
                className={`site-layout-background ${className} `}
                style={{ padding: 15, minHeight: 360 }}
              >
                {children}
              </div>
            </Spin>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <p
              className="copy-text"
              style={{ color: "#777", margin: 0, fontSize: 13 }}
            >
              (c) جميع الحقوق محفوظة لدى شركة matjarbot
            </p>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
AppLayout.propTypes = {
  children: PropTypes.any,
};
export default AppLayout;
