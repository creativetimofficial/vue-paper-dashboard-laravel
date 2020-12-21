<template>
  <div :class="vertical ? 'row' : ''">
    <div :class="vertical ? verticalNavClasses : ''">
      <div class="nav-tabs-navigation" :class="{'verical-navs': vertical}">
        <div class="nav-tabs-wrapper">
          <slot name="nav"></slot>
        </div>
      </div>
    </div>
    <div :class="vertical ? verticalTabContentClasses : ''">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs-layout',
    props: {
      vertical: Boolean,
      verticalNavClasses: [String, Object],
      verticalTabContentClasses: [String, Object],
    }
  }
</script>
