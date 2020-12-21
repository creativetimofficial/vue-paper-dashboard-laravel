<template>
  <div class="row">
    <div class="col-md-12">
      <p>Simple yet flexible JavaScript charting for designers &amp; developers. Made by our friends from
        <a target="_blank" rel="noopener" href="https://github.com/gionkunz/chartist-js">Chartist.js</a>. Please check
        <a target="_blank" rel="noopener" href="https://gionkunz.github.io/chartist-js/api-documentation.html">the full
          documentation</a>.</p>
    </div>
    <div class="col-md-6">
      <card>
        <template slot="header">
          <h4 class="card-title">24 Hours Performance</h4>
          <p class="category">Line Chart</p>
        </template>
        <line-chart :labels="activeUsersChart.labels"
                    :height="250"
                    :color="activeUsersChart.color"
                    :extra-options="activeUsersChart.options"
                    :data="activeUsersChart.data">
        </line-chart>
      </card>
    </div>

    <div class="col-md-6">
      <card>
        <template slot="header">
          <h4 class="card-title">NASDAQ: AAPL</h4>
          <p class="category">Line Chart with Points</p>
        </template>
        <line-chart :labels="stockChart.labels"
                    :height="250"
                    :color="stockChart.color"
                    :extra-options="stockChart.options"
                    :datasets="stockChart.datasets">
        </line-chart>
      </card>
    </div>
    <div class="col-md-6">
      <card>
        <template slot="header">
          <h4 class="card-title">Views</h4>
          <p class="category">Bar Chart</p>
        </template>
        <bar-chart :labels="viewsChart.labels"
                   :height="250"
                   :datasets="viewsChart.datasets">
        </bar-chart>
      </card>
    </div>
    <div class="col-md-6">
      <card>
        <template slot="header">
          <h4 class="card-title">Activity</h4>
          <p class="category">Multiple Bars Chart</p>
        </template>
        <bar-chart :labels="activityChart.labels"
                   :height="250"
                   :extra-options="activityChart.options"
                   :datasets="activityChart.datasets">
        </bar-chart>
      </card>
    </div>

    <div class="col-md-4">
      <chart-card :chart-data="emailChart"
                  chart-type="Pie"
                  title="Email Statistics"
                  description="Last Campaign Performance">
        <template slot="header">
          <h5 class="card-title">Email Statistics</h5>
          <p class="card-category">Last Campaign Performance</p>
        </template>
        <template slot="footer">
          <div class="legend">
            <i class="fa fa-circle text-warning"></i> Visited
          </div>
          <hr>
          <div class="stats">
            <i class="fa fa-check"></i> Campaign sent 2 days ago
          </div>
        </template>
      </chart-card>
    </div>
    <div class="col-md-8">
      <chart-card :chart-data="chartHours.data"
                  :chart-height="130"
                  :chart-options="chartHours.options">
        <template slot="header">
          <h5 class="card-title">Users Behavior</h5>
          <p class="card-category">24 Hours performance</p>
        </template>

        <template slot="footer">
          <hr>
          <div class="stats">
            <i class="fa fa-history"></i> Updated 3 minutes ago
          </div>
        </template>
      </chart-card>
    </div>
  </div>
</template>
<script>
  import { Card } from 'src/components/UIComponents'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard'
  import LineChart from 'src/components/UIComponents/Charts/LineChart'
  import BarChart from 'src/components/UIComponents/Charts/BarChart'
  import PieChart from 'src/components/UIComponents/Charts/PieChart'

  const tooltipOptions = {
    tooltipFillColor: "rgba(0,0,0,0.5)",
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipTitleFontSize: 14,
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#fff",
    tooltipYPadding: 6,
    tooltipXPadding: 6,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 10,
  };
  export default {
    components: {
      Card,
      ChartCard,
      LineChart,
      BarChart,
      PieChart
    },
    data() {
      return {
        activeUsersChart: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610],
          color: '#6bd098',
          options: {
            tooltips: tooltipOptions,
          }
        },
        stockChart: {
          labels: ["6pm", "9pm", "11pm", "2am", "4am", "6am", "8am"],
          datasets: [{
            label: "Active Users",
            borderColor: "#f17e5d",
            pointBackgroundColor: "#f17e5d",
            pointRadius: 3,
            pointHoverRadius: 3,
            lineTension: 0,
            fill: false,
            borderWidth: 3,
            data: [200, 250, 300, 350, 280, 330, 400]
          }],
          color: '#f17e5d',
          options: {
            tooltips: tooltipOptions,
            scales: {
              yAxes: [{

                ticks: {
                  fontColor: "#9f9f9f",
                  beginAtZero: false,
                  maxTicksLimit: 5,
                },
                gridLines: {
                  drawBorder: false,
                  borderDash: [8, 5],
                  zeroLineColor: "transparent",
                  color: '#9f9f9f'
                }

              }],

              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  borderDash: [8, 5],
                  color: '#9f9f9f',
                  zeroLineColor: "transparent"
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9f9f9f"
                }
              }]
            }
          }
        },
        viewsChart: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          datasets: [
            {
              label: "Data",
              borderColor: '#fcc468',
              fill: true,
              backgroundColor: '#fcc468',
              hoverBorderColor: '#fcc468',
              borderWidth: 5,
              data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
            }
          ]
        },
        activityChart: {
          labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
          datasets: [
            {
              label: "Data",
              borderColor: '#fcc468',
              fill: true,
              backgroundColor: '#fcc468',
              hoverBorderColor: '#fcc468',
              borderWidth: 8,
              data: [100, 120, 80, 100, 90, 130, 110, 100, 80, 110, 130, 140, 130, 120, 130, 80, 100, 90, 120, 130],
            },
            {
              label: "Data",
              borderColor: '#4cbdd7',
              fill: true,
              backgroundColor: '#4cbdd7',
              hoverBorderColor: '#4cbdd7',
              borderWidth: 8,
              data: [80, 140, 50, 120, 50, 150, 60, 130, 50, 130, 150, 100, 110, 80, 140, 50, 140, 50, 110, 150],
            }
          ],
          options: {
            tooltips: tooltipOptions
          }
        },
        emailChart: {
          labels: [1, 2, 3],
          datasets: [{
            label: "Emails",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              '#e3e3e3',
              '#4acccd',
              '#fcc468'
            ],
            borderWidth: 0,
            data: [542, 480, 430]
          }],
          options: {
            tooltips: tooltipOptions
          }
        },
        chartHours: {
          data: {

            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            datasets: [{
              borderColor: "#6bd098",
              backgroundColor: "#6bd098",
              pointRadius: 0,
              pointHoverRadius: 0,
              borderWidth: 3,
              data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
            },
              {
                borderColor: "#f17e5d",
                backgroundColor: "#f17e5d",
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 3,
                data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
              },
              {
                borderColor: "#fcc468",
                backgroundColor: "#fcc468",
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 3,
                data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
              }
            ]
          },
          options: {
            tooltips: tooltipOptions,
            scales: {
              yAxes: [{

                ticks: {
                  fontColor: "#9f9f9f",
                  beginAtZero: false,
                  maxTicksLimit: 5,
                  //padding: 20
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: "transparent",
                  color: 'rgba(255,255,255,0.05)'
                }

              }],

              xAxes: [{
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(255,255,255,0.1)',
                  zeroLineColor: "transparent",
                  display: false,
                },
                ticks: {
                  padding: 20,
                  fontColor: "#9f9f9f"
                }
              }]
            }
          }
        }
      }
    }
  }
</script>
<style>
</style>
