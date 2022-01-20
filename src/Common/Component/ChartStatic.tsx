import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartStatic = () => {
  const xList = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];
  const yList = [145, 170, 178, 231, 212, 198 , 188];

  const chartSeries = [
    {
      name: "Fuel Usage",
      data: yList
    }
  ];

  const chartOptions = {
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

