# Sliders

<hr>
We used element-ui Sliders and restyled them
To use it, import it from element-ui

```js
import {Slider} from 'element-ui'
```

Global usage

```js
Vue.use(Slider.name, Slider)
```

For local usage

```js
export default {
  components: {
    [Slider.name]: Slider
  }
}
```

### Simple slider with v-model
:::tip
You can add one of select-`default|primary|info|danger|warning` classes to customize the color
of the slider.
:::

:::demo
```html
<template>
  <el-slider class="slider-success"
             v-model="simple">
  </el-slider>
</template>
<script>
  export default {
    data() {
      return {
      simple: 30,
      }
    }
  }
</script>
```
:::

### Range slider

:::demo
```html
<template>
 <el-slider class="slider-info"
            v-model="rangeSlider"
            :max="100"
            range>
 </el-slider>
</template>

<script>
  export default {
    data() {
      return {
        rangeSlider: [20, 50]
       }
    }
  }
</script>
```
:::


<script>
  module.exports = {
     data () {
      return {
        rangeSlider: [20, 50],
        simple: 30,
      }
    }
  }
</script>
