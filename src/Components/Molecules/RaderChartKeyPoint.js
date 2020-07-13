import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";

const RaderChartKeyPoint = () => {
  const [raderData, setRaderData] = useState({});

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
    setRaderData({

      labels: ["연출", "배우", "OST", "영상미", "스토리"],
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
      <Radar
        data={raderData}
        width={216}
        height={216}
        options={options}
      />
    </div>
  );
};

export default RaderChartKeyPoint;
