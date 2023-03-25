import React, { ReactElement, useState } from "react";
import EditPayMethodAPI from "../Modal/EditPayMethodAPI";
import Panel from "./Panel";

function PaymentPanel(): ReactElement {
  const [isShowEditPayMethodAPI, setIsShowEditPayMethodAPI] = useState(false);
  return (
    <>
      {isShowEditPayMethodAPI && (
        <EditPayMethodAPI
          setIsShowEditPayMethodAPI={setIsShowEditPayMethodAPI}
        />
      )}
      <Panel title={"بوابة الدفع"} size={"sm"} theme={"primary2"}>
        <div className="payment-integration">
          <div className="img">
            <img src="/009-payment-method.png" height={130} alt="" />
          </div>
          <h3 className="title">ربط ببوابة الدفع</h3>
          <p className="text">هنا يمكنك إضافة API key من أحد بوابات الدفع</p>
          <div className="payment-integration-connect">
            <button
              onClick={() => setIsShowEditPayMethodAPI(true)}
              className="btn butt-blue butt-sm flex-center-just"
              style={{ width: "100%" }}
            >
              ربط ببوابة الدفع
            </button>
          </div>
        </div>
      </Panel>
    </>
  );
}

export default PaymentPanel;
