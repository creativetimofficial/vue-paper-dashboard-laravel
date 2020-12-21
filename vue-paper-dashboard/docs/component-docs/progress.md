# Progress

The progress bars from Bootstrap hold the same classes and functionality.
Adding this kit over your existing project will only make it look more clean and minimal.

<hr>
To use the custom radio buttons you need to import the custom made component:

```js
import {Progress} from 'src/components'
```

Global usage

```js
Vue.component(Progress.name)
```

For local usage
```js
export default {
  components: {
    [Progress.name]: Progress
  }
}
```

## Simple

:::demo
```html
<template>
 <div class="row">
  <div class="col-12">
  <p-progress :value="60"></p-progress>
</div>
 </div>
</template>

<script>
  export default {}
</script>
```
:::

## Colors

:::demo
```html
<template>
 <div>
  <p-progress :value="60" type="info"></p-progress>
  <p-progress :value="60" type="success"></p-progress>
  <p-progress :value="60" type="danger"></p-progress>
  <p-progress :value="60" type="warning"></p-progress>
  <p-progress :value="60" type="primary"></p-progress>
 </div>
</template>

<script>
  export default {}
</script>
<style>
 .progress{
   margin-top: 20px;
  }
</style>
```
:::

## With text

:::demo
```html
<template>
 <div style="height: 40px;">
  <p-progress :value="60" type="danger" show-value></p-progress>
 </div>
</template>

<script>
  export default {}
</script>
<style>
 .progress{
   margin-top: 20px;
  }
</style>
```
:::

## With custom slot

:::demo
```html
<template>
 <div>
  <p-progress :value="90" type="success" :height="15">
    Almost done
  </p-progress>
 </div>
</template>

<script>
  export default {}
</script>
<style>
 .progress{
   margin-top: 20px;
  }
</style>
```
:::


### Progress Props
<props-table component-name="p-progress"/>

### Slots
| Name | Description |
|---------- |-------- |
|  label  | Progress badge/label content |
|  default  | Default content for progress text |

<style>
.progress {
  margin-top: 5px;
}
</style>
