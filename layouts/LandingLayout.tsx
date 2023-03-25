import { ReactElement, useEffect, useState } from "react";
import Router from "next/router";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useAppSelector } from "../store/hooks";
import LandingNavbar from "../components/Landing/LandingNavbar";
import Footer from "../components/Landing/Footer";

const LandingLayout = ({
  children,
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
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 64, color: "#3da033" }} spin />
  );

  return (
    <>
      <div
        className={`sb_landing_wrapper ${
          theme === "light" ? "light" : "dark"
        } ${lang === "en" ? "ltr_lang" : "rtl_lang"}`}
      >
        <LandingNavbar />
        <Spin indicator={antIcon} spinning={loading}>
          {children}
        </Spin>
        <Footer />
      </div>
    </>
  );
};
LandingLayout.propTypes = {
  children: PropTypes.any,
};
export default LandingLayout;
