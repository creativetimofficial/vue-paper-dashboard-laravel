# Tabs

If you have information that you don't need to show at once, we suggest you use tabs.
The first option for tabs is the plain text tabs and the second also contains icons.
We carefully crafted a custom tabs component which you can easily use

In order to use the tabs, import the necessary components

```js
import {Tabs, TabPane} from 'src/components'
```

Global usage

```js
// plugin import
Vue.component(Tab)
Vue.component(TabPane)
```

For local usage
```js
export default {
  components: {
    Tab,
    TabPane
  }
}
```

### Horizontal Tabs

:::demo
```html
<template>
  <tabs type="primary">
    <tab-pane label="Profile">
      Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
      users after installed base benefits.
      <br><br>
      Dramatically visualize customer directed convergence without revolutionary ROI.
    </tab-pane>

    <tab-pane label="Settings">
      Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
      deliverables for real-time schemas.
      <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
    </tab-pane>

    <tab-pane label="Options">
      Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
      one-to-one customer service with robust ideas.
      <br><br>Dynamically innovate resource-leveling customer service for state of the art customer service.
    </tab-pane>
  </tabs>
</template>

<script>
  export default {}
</script>
<style>

</style>
```
:::

### Navigation Pills

:::demo
```html
<template>
<tabs type="primary" vertical class="row">
  <tab-pane label="Profile">
    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
    users after installed base benefits.
    <br><br>
    Dramatically visualize customer directed convergence without revolutionary ROI.
  </tab-pane>

  <tab-pane label="Settings">
    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
    deliverables for real-time schemas.
    <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
  </tab-pane>

  <tab-pane label="Options">
    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
    one-to-one customer service with robust ideas.
    <br><br>Dynamically innovate resource-leveling customer service for state of the art customer service.
  </tab-pane>
</tabs>
</template>

<script>
  export default {}
</script>
<style>
</style>
```
:::

### Navigation Pills with Icons

:::demo
```html
<template>
<tabs type="primary"
      tabNavWrapperClasses="col-md-3"
      tabContentClasses="col-md-9"
      vertical
      square
      class="row">

  <tab-pane>
    <span slot="label">
      <i class="now-ui-icons objects_umbrella-13"></i>Home
    </span>
    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
    users after installed base benefits.
    <br><br>
    Dramatically visualize customer directed convergence without revolutionary ROI.
  </tab-pane>

  <tab-pane>
    <span slot="label">
      <i class="now-ui-icons ui-2_settings-90"></i>Settings
    </span>
    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
    deliverables for real-time schemas.
    <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
  </tab-pane>
</tabs>
</template>

<script>
  export default {}
</script>
<style>
</style>
```
:::

### Tabs as page subcategories

:::demo
```html
<template>
<tabs type="primary"
      tabContentClasses="tab-subcategories"
      square
      centered
      class="row">
  <tab-pane>
    <span slot="label">
      <i class="now-ui-icons objects_umbrella-13"></i>Home
    </span>
    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
    users after installed base benefits.
    <br><br>
    Dramatically visualize customer directed convergence without revolutionary ROI.
  </tab-pane>

  <tab-pane>
    <span slot="label">
      <i class="now-ui-icons shopping_shop"></i>Messages
    </span>
    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
    deliverables for real-time schemas.
    <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
  </tab-pane>

  <tab-pane>
    <span slot="label">
      <i class="now-ui-icons ui-2_settings-90"></i>Settings
    </span>
    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
    one-to-one customer service with robust ideas.
    <br><br>Dynamically innovate resource-leveling customer service for state of the art customer service.
  </tab-pane>
</tabs>
</template>

<script>
  export default {}
</script>
<style>
</style>
```
:::

### Control with v-model

:::tip
Tabs `v-model` will link each `label` of each tab-pane. Make sure you specify
  the `label` prop even if you use label slots to make `v-model` work.
:::

:::demo
```html
<template>
<tabs type="primary" vertical class="row" v-model="activeTab">
  <tab-pane label="Profile">
    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
    users after installed base benefits.
    <br><br>
    Dramatically visualize customer directed convergence without revolutionary ROI.
  </tab-pane>

  <tab-pane label="Settings">
    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
    deliverables for real-time schemas.
    <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
  </tab-pane>

  <tab-pane label="Options">
    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
    one-to-one customer service with robust ideas.
    <br><br>Dynamically innovate resource-leveling customer service for state of the art customer service.
  </tab-pane>
</tabs>
</template>

<script>
  export default {
    data(){
      return {
        activeTab: 'Options'
      }
    }
  }
</script>
<style>
</style>
```
:::

### Different types (colors)

:::demo
```html
<template>
<div>
<div v-for="type in tabTypes" :key="type">
<h4>{{type.toUpperCase()}}</h3>
<tabs  :type="type" vertical class="row">
  <tab-pane label="Profile">
    Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
    users after installed base benefits.
    <br><br>
    Dramatically visualize customer directed convergence without revolutionary ROI.
  </tab-pane>

  <tab-pane label="Settings">
    Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
    deliverables for real-time schemas.
    <br><br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
  </tab-pane>

  <tab-pane label="Options">
    Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
    one-to-one customer service with robust ideas.
    <br><br>Dynamically innovate resource-leveling customer service for state of the art customer service.
  </tab-pane>
  </tabs>
</div>
</div>
</template>

<script>
  export default {
    data(){
      return {
        tabTypes: ['primary', 'info', 'danger', 'success', 'warning', 'default']
      }
    }
  }
</script>
<style>
</style>
```
:::demo



### Tabs Props
<props-table component-name="tabs"/>

### Tabs Slots
| Name | Description |
|---------- |-------- |
|  default  | Default content for tabs |


### Tab Pane Props
<props-table component-name="tab-pane"/>

### Tab Pane Slots
| Name | Description |
|---------- |-------- |
|  default  | Default tab pane content |
|  label  | This slot will be not displayed in the tab-pane but in the corresponding upper clickable tab |


<script>
  module.exports = {
     data () {
      return {
        activeTab: 'Options',
        tabTypes: ['primary', 'info', 'danger', 'success', 'warning', 'default']
      }
    }
  }
</script>
