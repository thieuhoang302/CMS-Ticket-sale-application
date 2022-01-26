import React from "react";
import ApexChart from "react-apexcharts";

interface DonutPieProps {
  data: number[]
}

const totalSeries = (series:number[]) => {
  let total = 0;
  series.forEach((element:number) => {
    total = total+ element
  });
  return total;
}

const DonutPie = ({data}:DonutPieProps) => {
  
  const series = data;
  
  const options: any = {
    chart: {
      type: 'donut'
    },
    plotOptions: {
      pie: {
 	    expandOnClick: false,
        customScale: 0.4,
        donut: {
          size: 220,
          
        }
      }
    },
    labels: ["Vé đã sử dụng", "Vé chưa sử dụng"],
    colors: ["#4F75FF", "#FF8A48"],
    dataLabels: {
      enabled: true,
      background: {
        enabled: true,
        borderWidth: 10,
        borderRadius: "4px",
        foreColor: '#000',
        borderColor: '#fff',
        opacity: 1,
        padding: 15,
      },
      style: {
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 400,
        fontSize: '2rem',
      },
      formatter: function (val:any) {
        const value = (val/100)* totalSeries(series)
        if(value-Math.floor(value) < 0.5){
          return Math.floor(value)
        }else {
          return Math.ceil(value)
        }
      }
    },
    legend: {
      show: false
    },
  };
  return (
    <ApexChart
      options={options}
      series={series}
      type="donut"
      width="100%"
      height={250}
    />
  );
};

export default DonutPie;
