<template>
  <div class="row buttons-with-margin">
    <div class="col-md-12">
      <div class="card">
        <div class="row">
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Pick your Color</h4>
            </div>
            <div class="card-body">
              <p-button>Default</p-button>
              <p-button type="primary">Primary</p-button>
              <p-button type="info">Info</p-button>
              <p-button type="success">Success</p-button>
              <p-button type="warning">Warning</p-button>
              <p-button type="danger">Danger</p-button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Buttons with Label</h4>
            </div>
            <div class="card-body">
              <p-button type="info">
                <i slot="label" class="nc-icon nc-settings-gear-65"></i>
                Info
              </p-button>

              <p-button type="success">
                <i slot="label" class="nc-icon nc-check-2"></i>
                Success
              </p-button>

              <p-button type="warning">
                <i slot="label" class="nc-icon nc-zoom-split"></i>
                Warning
              </p-button>

              <p-button type="danger">
                <i slot="label" class="nc-icon nc-simple-remove"></i>
                Danger
              </p-button>

              <p-button>
                <i slot="label" class="nc-icon nc-minimal-left"></i>
                Left
              </p-button>

              <p-button>
                <i slot="labelRight" class="nc-icon nc-minimal-right"></i>
                Right
              </p-button>

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Pick your Size</h4>
            </div>
            <div class="card-body">
              <p-button type="primary" size="sm">Small</p-button>
              <p-button type="primary">Regular</p-button>
              <p-button type="primary" size="lg">Large</p-button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Pick your Style</h4>
            </div>
            <div class="card-body">
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
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Pagination</h4>
            </div>
            <div class="card-body">
              <nav aria-label="Page navigation example">
                <p-pagination :page-count="10" v-model="defaultPagination"></p-pagination>
                <p-pagination type="info" :page-count="10" v-model="infoPagination"></p-pagination>
              </nav>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-header">
              <h4 class="card-title">Button Group</h4>
            </div>
            <div class="card-body">
              <div class="btn-group">
                <p-button type="info" round outline>Left</p-button>
                <p-button type="info" round outline>Middle</p-button>
                <p-button type="info" round outline>Right</p-button>
              </div>
              <br>
              <br>
              <div class="btn-group" data-toggle="buttons">
                <p-button type="info" round outline>1</p-button>
                <p-button type="info" round outline>2</p-button>
                <p-button type="info" round outline>3</p-button>
                <p-button type="info" round outline>4</p-button>
              </div>
              <div class="btn-group">
                <p-button type="info" round outline>5</p-button>
                <p-button type="info" round outline>6</p-button>
                <p-button type="info" round outline>7</p-button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <div class="card-header">
              <h4 class="card-title">Social buttons</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <p class="category">Default</p>
                  <button class="btn btn-twitter">
                    <i class="fa fa-twitter"></i> Connect with Twitter
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <p class="category">&nbsp;</p>
                  <button class="btn btn-icon btn-twitter">
                    <i class="fa fa-twitter"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <p class="category">&nbsp;</p>
                  <button class="btn btn-icon btn-round btn-twitter">
                    <i class="fa fa-twitter"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <p class="category">Neutral</p>
                  <button class="btn btn-icon btn-neutral btn-twitter">
                    <i class="fa fa-twitter"></i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <p class="category">&nbsp;</p>
                  <button class="btn btn-neutral btn-twitter">
                    <i class="fa fa-twitter"></i> Connect with Twitter
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-facebook">
                    <i class="fa fa-facebook-square"></i> Share · 2.2k
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-facebook">
                    <i class="fa fa-facebook-f"> </i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-facebook">
                    <i class="fa fa-facebook-f"> </i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-facebook">
                    <i class="fa fa-facebook-square"> </i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-facebook">
                    <i class="fa fa-facebook-square"></i> Share · 2.2k
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-google">
                    <i class="fa fa-google-plus"></i> Share on Google+
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon  btn-google">
                    <i class="fa fa-google-plus"> </i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-google">
                    <i class="fa fa-google-plus"> </i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-google">
                    <i class="fa fa-google-plus"> </i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-google">
                    <i class="fa fa-google-plus"></i> Share on Google+
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-linkedin">
                    <i class="fa fa-linkedin"></i> Connect with Linkedin
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon  btn-linkedin">
                    <i class="fa fa-linkedin"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-linkedin">
                    <i class="fa fa-linkedin"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-linkedin">
                    <i class="fa fa-linkedin"></i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-linkedin">
                    <i class="fa fa-linkedin"></i> Connect with Linkedin
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-pinterest">
                    <i class="fa fa-pinterest"></i> Pint it · 212
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-pinterest">
                    <i class="fa fa-pinterest"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-pinterest">
                    <i class="fa fa-pinterest"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-pinterest">
                    <i class="fa fa-pinterest"></i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-pinterest">
                    <i class="fa fa-pinterest"></i> Pint it · 212
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-youtube">
                    <i class="fa fa-youtube"></i> View on Youtube
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-youtube">
                    <i class="fa fa-youtube"> </i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-youtube">
                    <i class="fa fa-youtube"> </i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-youtube">
                    <i class="fa fa-youtube"> </i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-youtube">
                    <i class="fa fa-youtube"></i> View on Youtube
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-tumblr">
                    <i class="fa fa-tumblr-square"></i> Repost
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon  btn-tumblr">
                    <i class="fa fa-tumblr"> </i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-tumblr">
                    <i class="fa fa-tumblr"> </i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-tumblr">
                    <i class="fa fa-tumblr-square"> </i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-tumblr">
                    <i class="fa fa-tumblr-square"></i> Repost
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-github">
                    <i class="fa fa-github"></i> Connect with Github
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon  btn-github">
                    <i class="fa fa-github"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-github">
                    <i class="fa fa-github"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-github">
                    <i class="fa fa-github"></i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-github">
                    <i class="fa fa-github"></i> Connect with Github
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-behance">
                    <i class="fa fa-behance-square"></i> Follow us
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon  btn-behance">
                    <i class="fa fa-behance"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-behance">
                    <i class="fa fa-behance"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-behance">
                    <i class="fa fa-behance"></i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-behance">
                    <i class="fa fa-behance-square"></i> Follow us
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-dribbble">
                    <i class="fa fa-dribbble"></i> Find us on Dribble
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon  btn-dribbble">
                    <i class="fa fa-dribbble"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-dribbble">
                    <i class="fa fa-dribbble"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-dribbble">
                    <i class="fa fa-dribbble"></i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-dribbble">
                    <i class="fa fa-dribbble"></i> Find us on Dribble
                  </button>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 col-sm-5">
                  <button class="btn btn-reddit">
                    <i class="fa fa-reddit"></i> Repost · 232
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon  btn-reddit">
                    <i class="fa fa-reddit"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-round btn-reddit">
                    <i class="fa fa-reddit"></i>
                  </button>
                </div>
                <div class="col-md-1 col-sm-1 col-3">
                  <button class="btn btn-icon btn-neutral btn-reddit">
                    <i class="fa fa-reddit"></i>
                  </button>
                </div>
                <div class="col-md-3 col-sm-4">
                  <button class="btn btn-neutral btn-reddit">
                    <i class="fa fa-reddit"></i> Repost · 232
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {Button, Pagination} from 'src/components/UIComponents'
  export default {
    components: {
      [Pagination.name]: Pagination,
      [Button.name]: Button
    },
    data () {
      return {
        defaultPagination: 3,
        infoPagination: 5
      }
    }
  }
</script>
<style>

</style>
