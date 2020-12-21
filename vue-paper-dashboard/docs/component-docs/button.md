### Button

<component-status component-name="Button"/>
# Buttons

<hr>

To use the custom button you need to import the custom made component:

```js
import {Button} from 'src/components'
```

Global usage

```js
Vue.component(Button.name, Button)
```

For local usage
```js
export default {
  components: {
    [Button.name]: Button
  }
}
```

## Colors

Paper Dashboard PRO has changed the predefined button styles from Bootstrap, each serving its own semantic purpose, with a few extras thrown in for more control.
:::demo
```html

<template>
  <div>
    <p-button type="default">Default</p-button>
    <p-button type="primary">Primary</p-button>
    <p-button type="info">Info</p-button>
    <p-button type="success">Success</p-button>
    <p-button type="warning">Warning</p-button>
    <p-button type="danger">Danger</p-button>
    <p-button type="neutral">Neutral</p-button>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


## Style buttons
:::demo
```html

<template>
  <div style="display: flex">
   <p-button type="default">Default</p-button>
   <p-button type="default" round>Round</p-button>
   <p-button type="default" icon round>
     <i class="fa fa-heart"></i>
   </p-button>
   <p-button type="default" outline round>
     <i class="fa fa-heart"></i> with icon
   </p-button>

   <p-button type="default" link>
     link
   </p-button>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


## Sizes

Fancy larger or smaller buttons? Add `size="lg"` or `size="sm"` for additional sizes.

:::demo
```html

<desc>
</desc>
<template>
  <div>
    <p-button type="primary" size="lg">Large</p-button>
    <p-button type="primary" >Normal</p-button>
    <p-button type="primary" size="sm">Small</p-button>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


## Extra mile
We added extra classes mapped directly to props that can help you better customise the look. You can use regular buttons, filled buttons, right-pulled buttons, buttons that span over the entire given space or plain simple link like buttons. Let's see some examples:

:::demo
```html

<template>
  <div>
    <p-button type="primary" simple>Simple</p-button>
    <p-button type="primary" wide>Wide</p-button>
    <p-button type="success" block>Block</p-button>
  </div>
</template>

<script>
  export default {}
</script>
```
:::


## Social buttons

:::demo
```html

<desc>
</desc>
<template>
  <div class="card-body">
    <div class="row">
      <div class="col-md-4 col-sm-5">
        <p class="category">
          Default
        </p>
        <p-button class="btn-twitter">
          <i class="fa fa-twitter"></i> Connect with Twitter
        </p-button>
        <br>
        <p-button class="btn-facebook">
          <i class="fa fa-facebook-square"></i> Share · 2.2k
        </p-button>
        <br>
        <p-button class="btn-google">
          <i class="fa fa-google-plus-square"></i> Share on Google+
        </p-button>
        <br>
        <p-button class="btn-linkedin">
          <i class="fa fa-linkedin-square"></i> Connect with Linkedin
        </p-button>
        <br>
        <p-button class="btn-pinterest">
          <i class="fa fa-pinterest"></i> Pint it · 212
        </p-button>
        <br>
        <p-button class="btn-youtube">
          <i class="fa fa-youtube-play"></i> View on Youtube
        </p-button>
        <br>
        <p-button class="btn-tumblr">
          <i class="fa fa-tumblr-square"></i> Repost
        </p-button>
        <br>
        <p-button class="btn-github">
          <i class="fa fa-github"></i> Connect with Github
        </p-button>
        <br>
        <p-button class="btn-behance">
          <i class="fa fa-behance-square"></i> Follow us
        </p-button>
        <br>
        <p-button class="btn-dribbble">
          <i class="fa fa-dribbble"></i> Find us on Dribbble
        </p-button>
        <br>
        <p-button class="btn-reddit">
          <i class="fa fa-reddit"></i> Repost · 232
        </p-button>
        <br>
        <p-button class="btn-stumbleupon">
          <i class="fa fa-stumbleupon"></i> View on StumbleUpon
        </p-button>
        <br>
      </div>

      <div class="col-md-1 col-sm-1">
        <p-button class="btn-twitter" social icon>
          <i class="fa fa-twitter"></i>
        </p-button>
        <br>
        <p-button class="btn-facebook" social icon>
          <i class="fa fa-facebook"> </i>
        </p-button>
        <br>
        <p-button class="btn-google" social icon>
          <i class="fa fa-google-plus"> </i>
        </p-button>
        <br>
        <p-button class="btn-linkedin" social icon>
          <i class="fa fa-linkedin"></i>
        </p-button>
        <br>
        <p-button class="btn-pinterest" social icon>
          <i class="fa fa-pinterest"></i>
        </p-button>
        <br>
        <p-button class="btn-youtube" social icon>
          <i class="fa fa-youtube"> </i>
        </p-button>
        <br>
        <p-button class="btn-tumblr" social icon>
          <i class="fa fa-tumblr"> </i>
        </p-button>
        <br>
        <p-button class="btn-github" social icon>
          <i class="fa fa-github"></i>
        </p-button>
        <br>
        <p-button class="btn-behance" social icon>
          <i class="fa fa-behance"></i>
        </p-button>
        <br>
        <p-button class="btn-dribbble" social icon>
          <i class="fa fa-dribbble"></i>
        </p-button>
        <br>
        <p-button class="btn-reddit" social icon>
          <i class="fa fa-reddit"></i>
        </p-button>
        <br>
        <p-button class="btn-stumbleupon" social icon>
          <i class="fa fa-stumbleupon"></i>
        </p-button>
        <br>
      </div>
      <div class="col-md-1 col-sm-1">

        <p-button class="btn-twitter" social icon round>
          <i class="fa fa-twitter"></i>
        </p-button>
        <br>
        <p-button class="btn-facebook" social icon round>
          <i class="fa fa-facebook"> </i>
        </p-button>
        <br>
        <p-button class="btn-google" social icon round>
          <i class="fa fa-google-plus"> </i>
        </p-button>
        <br>
        <p-button class="btn-linkedin" social icon round>
          <i class="fa fa-linkedin"></i>
        </p-button>
        <br>
        <p-button class="btn-pinterest" social icon round>
          <i class="fa fa-pinterest"></i>
        </p-button>
        <br>
        <p-button class="btn-youtube" social icon round>
          <i class="fa fa-youtube"> </i>
        </p-button>
        <br>
        <p-button class="btn-tumblr" social icon round>
          <i class="fa fa-tumblr"> </i>
        </p-button>
        <br>
        <p-button class="btn-github" social icon round>
          <i class="fa fa-github"></i>
        </p-button>
        <br>
        <p-button class="btn-behance" social icon round>
          <i class="fa fa-behance"></i>
        </p-button>
        <br>
        <p-button class="btn-dribbble" social icon round>
          <i class="fa fa-dribbble"></i>
        </p-button>
        <br>
        <p-button class="btn-reddit" social icon round>
          <i class="fa fa-reddit"></i>
        </p-button>
        <br>
        <p-button class="btn-stumbleupon" social icon round>
          <i class="fa fa-stumbleupon"></i>
        </p-button>
        <br>

      </div>
      <div class="col-md-1 col-sm-1">

        <p-button class="btn-twitter" type="neutral" social>
          <i class="fa fa-twitter"></i>
        </p-button>
        <br>
        <p-button class="btn-facebook" type="neutral" social>
          <i class="fa fa-facebook"> </i>
        </p-button>
        <br>
        <p-button class="btn-google" type="neutral" social>
          <i class="fa fa-google-plus"> </i>
        </p-button>
        <br>
        <p-button class="btn-linkedin" type="neutral" social>
          <i class="fa fa-linkedin"></i>
        </p-button>
        <br>
        <p-button class="btn-pinterest" type="neutral" social>
          <i class="fa fa-pinterest"></i>
        </p-button>
        <br>
        <p-button class="btn-youtube" type="neutral" social>
          <i class="fa fa-youtube"> </i>
        </p-button>
        <br>
        <p-button class="btn-tumblr" type="neutral" social>
          <i class="fa fa-tumblr"> </i>
        </p-button>
        <br>
        <p-button class="btn-github" type="neutral" social>
          <i class="fa fa-github"></i>
        </p-button>
        <br>
        <p-button class="btn-behance" type="neutral" social>
          <i class="fa fa-behance"></i>
        </p-button>
        <br>
        <p-button class="btn-dribbble" type="neutral" social>
          <i class="fa fa-dribbble"></i>
        </p-button>
        <br>
        <p-button class="btn-reddit" type="neutral" social>
          <i class="fa fa-reddit"></i>
        </p-button>
        <br>
        <p-button class="btn-stumbleupon" type="neutral" social>
          <i class="fa fa-stumbleupon"></i>
        </p-button>
        <br>

      </div>
      <div class="col-md-3 col-sm-4">

        <p class="category">
          Default
        </p>
        <p-button class="btn-twitter" type="neutral">
          <i class="fa fa-twitter"></i> Connect with Twitter
        </p-button>
        <br>
        <p-button class="btn-facebook" type="neutral">
          <i class="fa fa-facebook-square"></i> Share · 2.2k
        </p-button>
        <br>
        <p-button class="btn-google" type="neutral">
          <i class="fa fa-google-plus-square"></i> Share on Google+
        </p-button>
        <br>
        <p-button class="btn-linkedin" type="neutral">
          <i class="fa fa-linkedin-square"></i> Connect with Linkedin
        </p-button>
        <br>
        <p-button class="btn-pinterest" type="neutral">
          <i class="fa fa-pinterest"></i> Pint it · 212
        </p-button>
        <br>
        <p-button class="btn-youtube" type="neutral">
          <i class="fa fa-youtube-play"></i> View on Youtube
        </p-button>
        <br>
        <p-button class="btn-tumblr" type="neutral">
          <i class="fa fa-tumblr-square"></i> Repost
        </p-button>
        <br>
        <p-button class="btn-github" type="neutral">
          <i class="fa fa-github"></i> Connect with Github
        </p-button>
        <br>
        <p-button class="btn-behance" type="neutral">
          <i class="fa fa-behance-square"></i> Follow us
        </p-button>
        <br>
        <p-button class="btn-dribbble" type="neutral">
          <i class="fa fa-dribbble"></i> Find us on Dribbble
        </p-button>
        <br>
        <p-button class="btn-reddit" type="neutral">
          <i class="fa fa-reddit"></i> Repost · 232
        </p-button>
        <br>
        <p-button class="btn-stumbleupon" type="neutral">
          <i class="fa fa-stumbleupon"></i> View on StumbleUpon
        </p-button>
        <br>

      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

```
:::

 <props-table component-name="p-button"/>
