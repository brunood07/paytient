import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { FaDollarSign } from "react-icons/fa";

import { ChartContainer } from "./styles";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  colors: ["#00FF63", "#F00"],
  grid: {
    show: true,
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    curve: "smooth"
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "numeric",
    categories: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14"
    ],
  },
  fill: {
    opacity: 0,
  }
};

const series = [
  { name: "Vendas", data: [[1, 200], [2, 30], [3, 200], [4, 30], [5, 380], [6, 200], [7, 290], [8, 110], [9, 290], [10, 45], [11, 200], [12, 360], [13, 200], [14 ,290]] },
  { name: "Leads", data: [[1, 295], [2, 200], [3, 295], [4, 200], [5, 295], [6, 115], [7, 360], [8, 290], [9, 360], [10, 285], [11, 200], [12, 290], [13, 200], [14, 200]] }
];

export function ChartArea() {
  return (
    <ChartContainer>
      <div className="header">
        <FaDollarSign className="dollar-sign" />
        <p>Faturamento vs Custo Fixo</p>
        <div className="green"></div>
        <p>Faturamento</p>
        <div className="red"></div>
        <p>Custo Fixo</p>
      </div>
      <Chart options={options} series={series} type="area" height="223px" width="1100px" />
    </ChartContainer>
  );
}