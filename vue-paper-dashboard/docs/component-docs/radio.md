# Radio buttons

<hr>
To use the custom radio buttons you need to import the custom made component:

```js
import {Radio} from 'src/components'
```

Global usage

```js
Vue.component(Radio.name, Radio)
```

For local usage
```js
export default {
  components: {
    [Radio.name]: Radio
  }
}
```

## Custom radio buttons

:::demo
```html
<template>
  <div>
     <p-radio v-model="enabledRadio" label="1">Radio is off</p-radio>
     <p-radio v-model="enabledRadio" label="2">Radio is on</p-radio>

     <p-radio disabled v-model="disabledRadio" label="1">Disabled radio is off</p-radio>
     <p-radio disabled v-model="disabledRadio" label="2">Disabled radio is on</p-radio>
  </div>
</template>

<script>
  export default {
    data () {
        return {
           enabledRadio: '2',
           disabledRadio: '2',
        }
      }
  }
</script>
```
:::

#### Changing colors
To change default radio color, go to `_checkboxes-radios.css` and change line 160

```scss{1}
@include radio-colors($default-color);
@include checkbox-colors($default-color);
```

If you want to have multiple checkbox colors, we recommend extending these 2 mixins 
with extra css classes (e.g `.form-check.form-check-success`) and add the corresponding classes
to `Radio.vue` component.


### Radio Props
<props-table component-name="p-radio"/>

### Radio Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| input  | triggers when the binding value changes | the updated value |

<script>
  module.exports = {
     data () {
      return {
        enabledRadio: '2',
        disabledRadio: '2',
      }
    }
  }
</script>
