<template>
  <li :class="{'timeline-inverted': inverted}">
    <slot name="badge">
      <div class="timeline-badge" :class="badgeType">
        <i :class="badgeIcon"></i>
      </div>
    </slot>
    <div class="timeline-panel">
      <div class="timeline-heading">
        <slot name="header"></slot>
      </div>
      <div class="timeline-body" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
      <div v-if="$slots.footer" class="timeline-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </li>
</template>
<script>
  export default {
    name: 'time-line-item',
    props: {
      inverted: {
        type: Boolean,
        description: 'Whether item is on the right or left'
      },
      badgeType: {
        type: String,
        default: 'success',
        description: 'Timeline badge type (primary|info|danger|default|warning|success)'
      },
      badgeIcon: {
        type: String,
        default: '',
        description: 'Timeline badge icon'
      }
    }
  }
</script>
<style>
</style>
