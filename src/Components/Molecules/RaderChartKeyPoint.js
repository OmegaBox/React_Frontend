import React from "react";
import { Radar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const RaderChartKeyPoint = () => {
  const rating = useSelector((state) => state.Movie.detail).key_point_count;
  const res = rating !== undefined && rating
  const options = {
    labal: false,
    legend: {
      display: false,
    },
    scales: {
      display: false,
      ticks: {
        suggestedMin: 30,
        suggestedMax: 150,

      },
      pointLabels: false,
    },


    maintainAspectRatio: false
  };

  const data = {
    labels: ["연출", "배우", "OST", "영상미", "스토리"],
    datasets: [
      {
        label: false,
        data: [
          res.actors,
          res.prods,
          res.story,
          res.visual,
          res.ost,
        ],
        backgroundColor: [
          '#6543b1',
          '#6543b1',
          '#6543b1',
          '#6543b1',
          '#6543b1',
        ],
        fill: [
          false,
        ],
        borderColor: '#6543b1',
        pointRadius: false,
      }
    ]
  }

  return (
    <div>
      <Radar
        data={data}
        width={216}
        height={216}
        options={options}
      />
    </div>
  );
};

export default RaderChartKeyPoint;
