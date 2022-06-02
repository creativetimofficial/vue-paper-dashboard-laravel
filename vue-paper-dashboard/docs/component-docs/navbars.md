# Navbars


<script>
module.exports = {
 data(){
    return {
      types: ['white', 'default', 'primary', 'danger', 'success', 'warning', 'info'],
      showMenu: true
    }
  },
  methods: {
    toggleNavbar() {
      // applies on mobile only
      document.body.classList.toggle('nav-open')
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      document.body.classList.remove('nav-open')
      this.showMenu = false
    }
   }
}
</script>
We restyled the classic Bootstrap Navbar.

<hr>
To use the navbar, first import it:

```js
import {Navbar} from 'src/components'
```

Global usage

```js
Vue.component(Navbar)
```

Local usage

```js
export default {
 components: {
   Navbar
 }
}
```

### Primary navbar

:::tip
 `showMenu` property applies only on small viewport (mobile). Shrink the browser to see that in action
:::

:::demo
```html
<template>
  <navbar :show-navbar="showMenu" type="primary" :transparent="false" position="relative">
   <div class="navbar-wrapper">
     <div class="navbar-toggle" :class="{toggled: showMenu}">
       <navbar-toggle-button @click.native="toggleNavbar">
       </navbar-toggle-button>
     </div>
     <a class="navbar-brand" href="#pablo">Now UI Dashboard Pro</a>
   </div>

   <template slot="navbar-menu">
     <li class="nav-item active">
       <a class="nav-link">
         <i class="now-ui-icons design_app"></i>
         Dashboard
       </a>
     </li>
   </template>

 </navbar>
</template>

<script>
  export default {
    data(){
      return {
        showMenu: true
      }
    },
   methods: {
    toggleNavbar() {
      // applies on mobile only
      document.body.classList.toggle('nav-open')
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      document.body.classList.remove('nav-open')
      this.showMenu = false
    }
   }
  }
</script>
```
:::

:::tip
 You can change navbar color with the `type` prop.
:::
## Colored navbars

:::demo
```html
<template>
  <div>
    <navbar v-for="type in types" :key="type"
            :show-navbar="showMenu"
            :type="type"
            :transparent="false"
             position="relative">
     <div class="navbar-wrapper">
       <div class="navbar-toggle" :class="{toggled: showMenu}">
         <navbar-toggle-button @click.native="toggleNavbar">
         </navbar-toggle-button>
       </div>
       <a class="navbar-brand" href="#">{{type}}</a>
     </div>
   </navbar>
</div>
</template>

<script>
  export default {
    data(){
      return {
        types: ['white', 'default', 'primary', 'danger', 'success', 'warning', 'info']
      }
    }
  }
</script>
```
:::


### Navbar Props
<props-table component-name="navbar"/>

### Slots
| Name | Description |
|---------- |-------- |
|  default  | Navbar left side content (brand and toggle button )|
|  navbar-menu  | Content of the navbar (right on desktop, dropdown menu on mobile) |
