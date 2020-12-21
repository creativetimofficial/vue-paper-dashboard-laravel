<template>
  <component class="dropdown"
             :is="tag"
             :class="[{show: isOpen}]"
             aria-haspopup="true"
             :aria-expanded="isOpen"
             @click="toggleDropDown"
             v-click-outside="closeDropDown">
    <slot name="title" :is-open="isOpen">
      <a class="dropdown-toggle nav-link"
         :class="{'no-caret': hideArrow}"
         data-toggle="dropdown">
        <i :class="icon"></i>
        <span class="no-icon">{{title}}</span>
      </a>
    </slot>
    <ul class="dropdown-menu"
        :x-placement="directionAttribute"
        :class="[{'dropdown-menu-right': position === 'right'}, {show: isOpen}]">
      <slot></slot>
    </ul>
  </component>
</template>
<script>
  export default {
    name: 'drop-down',
    props: {
      direction: {
        type: String,
        default: 'down',
        description: 'Drop down menu direction (up|down)'
      },
      title: String,
      icon: String,
      position: {
        type: String,
        description: 'Drop down menu arrow position (left|right)'
      },
      hideArrow: {
        type: Boolean,
        description: 'Whether to hide drop down arrow'
      },
      tag: {
        type: String,
        default: 'li',
        description: 'Html tag of the dropdnown'
      }
    },
    data() {
      return {
        isOpen: false
      }
    },
    computed: {
      directionAttribute() {
        let baseDirection = '';
        if(this.direction === 'up'){
          baseDirection = 'top-start';
        } else if(this.direction === 'down') {
          baseDirection = 'bottom-start';
        }
        return baseDirection;
      }
    },
    methods: {
      toggleDropDown() {
        this.isOpen = !this.isOpen
        this.$emit('change', this.isOpen)
      },
      closeDropDown() {
        this.isOpen = false
        this.$emit('change', this.isOpen)
      }
    }
  }
</script>
<style>
  .dropdown {
    list-style-type: none;
  }

  .dropdown .dropdown-toggle {
    cursor: pointer;
  }
</style>
