import React from "react";
import Panel from "./Panel";

function RegionsPanel() {
  return (
    <Panel
      title={"مدن التغطية"}
      size={"sm"}
      theme={"primary"}
      btnSize={"xs"}
      handleClick={() => console.log("Test")}
      showAllText={"تعديل"}
    >
      <table className="table app-sm-table">
        <thead>
          <tr>
            <th>المدينة</th>
            <th>رسوم التوصيل</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>الجلفة</td>
            <td>12</td>
          </tr>
          <tr>
            <td>الجلفة</td>
            <td>12</td>
          </tr>
          <tr>
            <td>الجلفة</td>
            <td>12</td>
          </tr>
          <tr>
            <td>الجلفة</td>
            <td>12</td>
          </tr>
          <tr>
            <td>الجلفة</td>
            <td>12</td>
          </tr>
          <tr>
            <td>الجلفة</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </Panel>
  );
}

export default RegionsPanel;
