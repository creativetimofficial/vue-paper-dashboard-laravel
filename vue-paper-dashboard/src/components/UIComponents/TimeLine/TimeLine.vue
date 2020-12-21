<template>
  <div class="card card-timeline card-plain">
    <div class="card-body">
      <ul class="timeline" :class="{'timeline-simple': type === 'simple'}">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'time-line',
    props: {
      type: {
        type: String,
        default: '',
        description: 'Timeline type (simple|"")'
      }
    }
  }
</script>
<style>
</style>
