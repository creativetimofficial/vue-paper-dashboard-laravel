# Dropdown

<hr>
To use the custom dropdown you need to import the custom made component:

```js
import {DropDown} from 'src/components'
```

Global usage
```js
Vue.component(DropDown)
```

For local usage
```js
export default {
  components: {
    DropDown
  }
}
```
:::warning
 **Note** Drop-down uses a click outside directive internally. You will get a warning if the directive is not imported.
You can find the declaration of this directive in `src/globalDirectives.js`
:::

### Simple

:::tip
You can specify the tag you the drop-down to be rendered as through the `tag` prop
:::


:::demo
```html
<template>
<drop-down tag="div" title="Simple">
  <a class="dropdown-item">Notification 1</a>
  <a class="dropdown-item">Notification 2</a>
  <a class="dropdown-item">Notification 3</a>
  <a class="dropdown-item">Notification 4</a>
  <a class="dropdown-item">Another notification</a>
</drop-down>
</template>

<script>
  export default {}
</script>
```
:::

### As button

:::demo
```html
<template>
<div>
  <div class="col-3">
    <drop-down>
      <p-button slot="title"
                class="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                type="primary"
                block
                round>
        Dropdown
      </p-button>
      <h6 class="dropdown-header">Dropdown header</h6>
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </drop-down>
  </div>
</div>
</template>

<script>
  export default {}
</script>
```
:::


### DropDown Props
<props-table component-name="drop-down"/>

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the dropdown is opened/closed | the updated value |

### Slots
| Name | Description |
|---------- |-------- |
|  default  | content for dropdown menu |
|  title  | content for dropdown title|
