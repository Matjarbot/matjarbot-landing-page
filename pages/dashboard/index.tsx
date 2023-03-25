import type { NextPage } from "next";
import PageHeader from "../../components/Panel/PageHeader";
import PaymentPanel from "../../components/Panel/PaymentPanel";
import PrivacyPanel from "../../components/Panel/PrivacyPanel";
import RegionsPanel from "../../components/Panel/RegionsPanel";
import { useTranslation } from "react-i18next";
import WorkTimesPanel from "../../components/Panel/WorkTimesPanel";
import AppLayout from "../../layouts/AppLayout";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <AppLayout>
      <PageHeader
        title={t("main")}
        size={"lg"}
        btnSize={"xs"}
        theme={"primary"}
        handleClick={() => console.log("Test")}
        showAllText={t("see_more")}
      />
      <div className="row py-3 mt-3">
        <div className="col-xl-8 max-700">
          <div className="row">
            <div className="col-md-6 max-700">
              <RegionsPanel />
            </div>
            <div className="col-md-6 max-700">
              <PaymentPanel />
            </div>
            <div className="col-xl-12 max-700"></div>
          </div>
        </div>
        <div className="col-xl-4 max-700">
          <WorkTimesPanel />
          <PrivacyPanel />
        </div>
      </div>
    </AppLayout>
  );
};

export default Home;
