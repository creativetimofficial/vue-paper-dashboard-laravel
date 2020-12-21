<template>
  <component :is="tag"
             class="p-badge"
             :class="
               [`badge-${type}`,
                pill ? `badge-pill` : ''
               ]">
    <slot></slot>
  </component>
</template>
<script>
  export default {
    name: 'badge',
    props: {
      tag: {
        type: String,
        default: 'span',
        description: 'Html tag to use for the badge.'
      },
      pill: {
        type: Boolean,
        default: true,
        description: 'Whether badge is of pill type'
      },
      type: {
        type: String,
        default: 'default',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger', 'default'];
          return acceptedValues.indexOf(value) !== -1
        },
        description: 'Badge type (primary|info|danger|default|warning|success)'
      }
    }
  }
</script>
<style>
</style>
