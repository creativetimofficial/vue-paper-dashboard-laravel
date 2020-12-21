<template>
  <component :is="layoutComponent"
             :vertical-nav-classes="verticalNavClasses"
             :vertical-tab-content-classes="verticalTabContentClasses"
             :vertical="vertical">
    <template slot="nav">
      <ul class="nav"
          role="tablist"
          :class="
            [type ? `nav-pills-${type}`: '',
              pills ? 'nav-pills': 'nav-tabs',
             {'nav-pills-icons': icons},
             {'flex-column nav-stacked': vertical},
             {'justify-content-center': centered},
             tabNavClasses
            ]">

        <li v-for="tab in tabs"
            class="nav-item"
            :key="tab.id || tab.title">

          <a data-toggle="tab"
             role="tab"
             class="nav-link"
             :href="`#${tab.id || tab.title}`"
             @click.prevent="activateTab(tab)"
             :aria-selected="tab.active"
             :class="{active: tab.active}">
            <tab-item-content :tab="tab">
            </tab-item-content>
          </a>

        </li>

      </ul>
    </template>
    <div slot="content" class="tab-content"
         :class="[tabContentClasses]">
      <slot></slot>
    </div>
  </component>
</template>

<script>
  import PillsLayout from './PillsLayout'
  import TabsLayout from './TabsLayout'
  export default {
    name: 'tabs',
    components: {
      TabsLayout,
      PillsLayout,
      TabItemContent: {
        props: ['tab'],
        render(h) {
          return h('div', [this.tab.$slots.title || this.tab.title])
        }
      }
    },
    provide() {
      return {
        addTab: this.addTab,
        removeTab: this.removeTab
      }
    },
    computed: {
      layoutComponent() {
        return this.pills ? 'pills-layout' : 'tabs-layout';
      }
    },
    props: {
      type: {
        type: String,
        default: '',
        validator: (value) => {
          let acceptedValues = ['', 'primary', 'info', 'success', 'warning', 'danger']
          return acceptedValues.indexOf(value) !== -1
        },
        description: 'Tabs type (primary|info|danger|default|warning|success)'
      },
      pills: {
        type: Boolean,
        description: 'Whether tabs are pills'
      },
      activeTab: {
        type: String,
        default: '',
        description: 'Default active tab name'
      },
      tabNavWrapperClasses: {
        type: [String, Object],
        default: '',
        description: 'Tab Nav wrapper (div) css classes'
      },
      tabNavClasses: {
        type: [String, Object],
        default: '',
        description: 'Tab Nav (ul) css classes'
      },
      tabContentClasses: {
        type: [String, Object],
        default: '',
        description: 'Tab content css classes'
      },
      vertical: {
        type: Boolean,
        description: 'Whether tabs are vertical'
      },
      verticalNavClasses: {
        type: [String, Object],
        default: 'col-lg-4 col-md-5 col-sm-4 col-6',
        description: 'Vertical tab css classes'
      },
      verticalTabContentClasses: {
        type: [String, Object],
        default: 'col-lg-8 col-md-7 col-sm-8 col-6',
        description: 'Vertical Tab content css classes'
      },
      icons: {
        type: Boolean,
        description: 'Whether tabs should be of icon type (small no text)'
      },
      centered: {
        type: Boolean,
        description: 'Whether tabs are centered'
      },
      value: {
        type: String,
        description: 'Initial value (active tab)'
      }
    },
    data() {
      return {
        tabs: []
      }
    },
    methods: {
      findAndActivateTab(title){
        let tabToActivate = this.tabs.find(t=> t.title === title);
        if(tabToActivate){
          this.activateTab(tabToActivate);
        }
      },
      activateTab(tab) {
        if (this.handleClick) {
          this.handleClick(tab)
        }
        this.deactivateTabs()
        tab.active = true
      },
      deactivateTabs() {
        this.tabs.forEach(tab => {
          tab.active = false
        });
      },
      addTab(tab) {
        const index = this.$slots.default.indexOf(tab.$vnode)
        if (!this.activeTab && index === 0) {
          tab.active = true;
        }
        if (this.activeTab === tab.name) {
          tab.active = true
        }
        this.tabs.splice(index, 0, tab)
      },
      removeTab(tab) {
        const tabs = this.tabs
        const index = tabs.indexOf(tab)
        if (index > -1) {
          tabs.splice(index, 1)
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (this.value) {
          this.findAndActivateTab(this.value);
        }
      })
    },
    watch: {
      value(newVal) {
        this.findAndActivateTab(newVal);
      }
    }
  }
</script>

