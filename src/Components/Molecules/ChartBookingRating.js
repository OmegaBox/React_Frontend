import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const RatingChart = () => {
  const bookingRate = useSelector((state) => state.Movie.ageBooking);


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

  const data = {
    labels: ["10대", "20대", "30대", "40대", "50대"],
    datasets: [
      {
        label: false,
        data: [
          bookingRate.teens,
          bookingRate.twenties,
          bookingRate.thirties,
          bookingRate.fourties,
          bookingRate.fifties,
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
  }

  return (
    <div>
      <Bar
        data={data}
        width={216}
        height={216}
        options={options}
      />
    </div>
  );
};

export default RatingChart;
