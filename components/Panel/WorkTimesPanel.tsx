import { Statistic } from "antd";
import React from "react";
import Panel from "./Panel";

function WorkTimesPanel() {
  return (
    <Panel
      title={"أوقات العمل"}
      size={"sm"}
      theme={"primary"}
      btnSize={"xs"}
      handleClick={() => console.log("Test")}
      showAllText={"تعديل"}
    >
      <div className="work-new-times">
        <div className="row py-3">
          <div className="col-lg-6">
            <Statistic title="من" value={'07:00 AM'} />
          </div>
          <div className="col-lg-6">
            <Statistic title="إلى" value={'00:00 PM'} />
          </div>
        </div>
        <ul className="tags-list">
          <li>
            <span className="item-text">السبت</span>
          </li>
          <li>
            <span className="item-text">الأحد</span>
          </li>
          <li>
            <span className="item-text">الإثنين</span>
          </li>
          <li>
            <span className="item-text">الثلاثاء</span>
          </li>
          <li>
            <span className="item-text">الأربعاء</span>
          </li>
          <li>
            <span className="item-text">الخميس</span>
          </li>
        </ul>
      </div>
    </Panel>
  );
}

export default WorkTimesPanel;
