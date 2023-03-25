import React from "react";
import Alert from "../Alert";
import Panel from "./Panel";

function PrivacyPanel() {
  return (
    <Panel title={"سياسة المتجر"} size={"sm"} theme={"primary"}>
      <div className="store-new-privacy">
        <Alert
          title={"الدفع بعد الاستلام"}
          text={"هذا المتجر يدعم سياسة الدفع بعد الإستلام"}
          icon={"task_alt"}
        />
        <Alert
          title={"الدفع بعد الاستلام"}
          text={"هذا المتجر يدعم سياسة الدفع بعد الإستلام"}
          icon={"task_alt"}
        />
        <Alert
          title={"الدفع بعد الاستلام"}
          text={"هذا المتجر يدعم سياسة الدفع بعد الإستلام"}
          icon={"task_alt"}
        />
        <Alert
          title={"الدفع بعد الاستلام"}
          text={"هذا المتجر يدعم سياسة الدفع بعد الإستلام"}
          icon={"task_alt"}
        />
      </div>
    </Panel>
  );
}

export default PrivacyPanel;
