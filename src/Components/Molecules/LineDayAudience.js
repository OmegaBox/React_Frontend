import React from "react";
import { Line } from "react-chartjs-2";

const DayAudienceLine = () => {

  const options = {
    legend: {
      display: false,
      title: false,
    },
    scales: {
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          autoSkip: true,
          stepSize: 1,
          beginAtZero: true,
          display: false,
        },
      }],
      xAxes: [{
        ticks: {
          autoSkip: true,
          stepSize: 1,
          beginAtZero: true
        },
      }]
    },

    maintainAspectRatio: false
  };
  const data = {
    labels: ["7.12", "7.13", "7.14", "7.15", "7.16"],
    datasets: [
      {
        label: "누적관객수",
        data: [
          200,
          130,
          150,
          130,
          30
        ],
        backgroundColor: [
          '#309eb0',
          '#309eb0',
          '#309eb0',
          '#309eb0',
          '#309eb0',
        ],
        borderColor: "#309eb0",
        fill: false,
      }
    ]
  }

  return (
    <div>
      <Line
        data={data}
        width={216}
        height={216}
        options={options}
      />
    </div>
  );
};

export default DayAudienceLine;
