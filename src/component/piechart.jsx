import React, { Component } from "react";
// import Chart from 'chart.js';
// var ctx = document.getElementById('myChart').getContext('2d');
// var LineChart = require("react-chartjs").Line;
import { Pie } from "react-chartjs-2";

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

class Piechart extends Component {
  constructor(props) {
    super(props);
    // this.data = [
    //   {
    //     value: 300,
    //     color: "#F7464A",
    //     highlight: "#FF5A5E",
    //     label: "Criminal"
    //   },
    //   {
    //     value: 60,
    //     color: "#46BFBD",
    //     highlight: "#5AD3D1",
    //     label: "Civil"
    //   }
    // ];
    this.data = {
      datasets: [
        {
          data: [100, 20],
          backgroundColor: ["#FF6384", "#36A2EB"]
        }
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Vivek", "Ashank"]
    };
    this.options = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke: true,

      //String - The colour of each segment stroke
      segmentStrokeColor: "#005",

      //Number - The width of each segment stroke
      segmentStrokeWidth: 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout: 50, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps: 100,

      //String - Animation easing effect
      animationEasing: "easeOutBounce",

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: true
    };
  }
  render() {
    var colors = ["#43A19E", "#7B43A1", "#F2317A", "#FF9824", "#58CF6C"];
    return (
      <Pie data={this.data} options={this.options} width="600" height="250" />
    );
  }
}

export default Piechart;
