import React, { ReactElement } from "react";
import Panel from "./Panel";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StatisticsPanel(): ReactElement {
  const options = {
    responsive: true,
    rtl: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = [
    "السبت",
    "الأحد",
    "الإثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "قيد الإنتظار",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgba(62, 160, 51, 0.6)",
        backgroundColor: "hsla(97, 25%, 10%, 0.493)",
      },
      {
        label: "قيد التنفيذ",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgba(233, 195, 22, 0.541)",
        backgroundColor: "rgba(233, 195, 22, 0.541)",
      },
    ],
  };

  return (
    <Panel title={"إحصائيات الطلبات"} size={"sm"} theme={"primary2"}>
      <Line options={options} data={data} />
    </Panel>
  );
}

export default StatisticsPanel;
