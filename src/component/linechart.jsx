import React, { Component } from "react";
// import Chart from 'chart.js';
// var ctx = document.getElementById('myChart').getContext('2d');
import { Line } from "react-chartjs-2";
// var PieChart = require("react-chartjs").Pie;
// var myPieChart = new Chart(ctx[0]).Pie(data,options);

// // And for a doughnut chart
// var myDoughnutChart = new Chart(ctx[1]).Doughnut(data,options);
// var piechart = new Chart(document.getElementById('my_chart'), {
//     type: 'pie',
//     data: {
//       datasets: [{
//         data: [40,60],
//         backgroundColor: ['rgba(82,199,197,1)', '#E5E5E5'],
//         borderWidth: 1
//       }]
//     },
//     options: {
//       tooltips: {
//         enabled: false
//       }
//     }
//   });

class Linechart extends Component {
  constructor(props) {
    super(props);
    this.data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Criminal Case",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          backgroundColor: "rgba(	54, 162, 235,0.5)",
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "Civil Case",
          fillColor: "rgba(151,187,205,0.2)",
          strokeColor: "rgba(151,187,205,1)",
          pointColor: "rgba(151,187,205,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          backgroundColor: "rgba(255, 99, 132,0.5)",
          pointHighlightStroke: "rgba(151,187,205,1)",
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
    this.options = {
      ///Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines: true,

      //String - Colour of the grid lines
      scaleGridLineColor: "rgba(0,0,0,.0005)",

      //Number - Width of the grid lines
      scaleGridLineWidth: 1,

      //Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,

      //Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines: true,

      //Boolean - Whether the line is curved between points
      bezierCurve: true,

      //Number - Tension of the bezier curve between points
      bezierCurveTension: 0.4,

      //Boolean - Whether to show a dot for each point
      pointDot: true,

      //Number - Radius of each point dot in pixels
      pointDotRadius: 4,

      //Number - Pixel width of point dot stroke
      pointDotStrokeWidth: 1,

      //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,

      //Boolean - Whether to show a stroke for datasets
      datasetStroke: false,

      //Number - Pixel width of dataset stroke
      datasetStrokeWidth: 2,

      //Boolean - Whether to fill the dataset with a colour
      datasetFill: false,

      //Boolean - Whether to horizontally center the label and point dot inside the grid
      offsetGridLines: false
    };
  }
  render() {
    return (
      <Line data={this.data} options={this.options} width="500" height="250" />
    );
  }
}

export default Linechart;
