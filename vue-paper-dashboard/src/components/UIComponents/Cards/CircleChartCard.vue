<template>
  <div class="card">
    <div class="card-header text-center">
      <slot name="header">
        <h5 class="card-title">{{title}}</h5>
        <p class="card-category">{{description}}</p>
      </slot>
    </div>
    <div class="card-body">
      <doughnut-chart :data="chartData"
                      :chart-id="chartId"
                      :labels="labels"
                      :height="250"
                      :secondary-color="secondaryColor"
                      :color="color">
      </doughnut-chart>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  import DoughnutChart from '../Charts/DoughnutChart'

  export default {
    name: 'circle-chart-card',
    components: {
      DoughnutChart,
    },
    props: {
      color: {
        type: String,
        default: '#4acccd',
        description: 'Chart color'
      },
      secondaryColor: {
        type: String,
        default: '#f4f3ef',
        description: 'Secondayr color'
      },
      percentage: {
        type: Number,
        default: 0,
        description: 'Chart percentage'
      },
      title: {
        type: String,
        description: 'Chart card title'
      },
      description: {
        type: String,
        description: 'Chart card description'
      },
      labels: {
        type: Array,
        default: () => {
          return [1, 2]
        },
        description: 'Labels for each chart section'
      },
      chartId: String,
    },
    computed: {
      chartData() {
        return [this.percentage, 100 - this.percentage]
      }
    }
  }
</script>
<style>
</style>
