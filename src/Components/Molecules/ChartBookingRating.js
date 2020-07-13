import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const RatingChart = () => {
  const [chartData, setChartData] = useState({});

  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          autoSkip: true,
          stepSize: 1,
          beginAtZero: true,
          display: false,
        },
        gridLines: {
          display: false,
        }
      }],
      xAxes: [{
        ticks: {
          autoSkip: true,
          stepSize: 1,
          beginAtZero: true
        },
        gridLines: {
          display: false,
        }
      }]
    },
    maintainAspectRatio: false
  };

  const data = () => {
    setChartData({

      labels: ["10대", "20대", "30대", "40대", "50대"],
      datasets: [
        {
          label: false,
          data: [
            100,
            100,
            100,
            100,
            100
          ],
          backgroundColor: [
            '#309eb0',
            '#309eb0',
            '#309eb0',
            '#309eb0',
            '#309eb0',
          ]
        }
      ]
    })
  }
  useEffect(() => {
    data()
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        width={216}
        height={216}
        options={options}
      />
    </div>
  );
};

export default RatingChart;
