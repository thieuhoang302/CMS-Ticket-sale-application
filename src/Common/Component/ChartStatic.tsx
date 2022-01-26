import React from "react";
import ReactApexChart from "react-apexcharts";

interface ChartStaticProps {
  dataChart: number[]
}

const ChartStatic = ({dataChart}:ChartStaticProps) => {
  const xList = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];
  const yList = dataChart;

  const chartSeries = [
    {
      name: "Doanh thu",
      data: yList
    }
  ];
  const chartOptions:any = {
    chart: { toolbar: "false" },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth", width: 2 },
    markers: { size: 0, style: "hollow" },
    xaxis: {
      categories: xList
    },
    yaxis: {
      tickAmount: 3,
      min: 140,
      max: 260,
      labels: {
        formatter: function (value:any) {
          return value + "tr";
        },
      },
    },
    
    colors: ["#FF993C"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [50, 100, 100, 100]
      }
    }
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="area"
      height={250}
    />
  );
};

export default ChartStatic

