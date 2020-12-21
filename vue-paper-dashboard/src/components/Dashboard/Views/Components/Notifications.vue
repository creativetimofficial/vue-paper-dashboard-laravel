<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <card>
          <template slot="header">
            <h5 class="card-title">Notifications</h5>
            <p class="card-category">Handcrafted by our friend
              <a target="_blank" href="https://github.com/binarcode">BinarCode</a>. Please checkout the
              <a href="https://github.com/binarcode/vue-notifyjs" target="_blank">full documentation.</a>
            </p>
          </template>
          <div class="row">
            <div class="col-md-6">
              <div class="card card-plain">
                <div class="card-header">
                  <h5 class="card-title">Notifications Style</h5>
                </div>
                <div class="card-body">
                  <div class="alert alert-info">
                    <span>This is a plain notification</span>
                  </div>
                  <div class="alert alert-info alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span>This is a notification with close button.</span>
                  </div>
                  <div class="alert alert-info alert-with-icon alert-dismissible fade show" data-notify="container">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span data-notify="icon" class="nc-icon nc-bell-55"></span>
                    <span data-notify="message">This is a notification with close button and icon.</span>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card card-plain">
                <div class="card-header">
                  <h5 class="card-title">Notification states</h5>
                </div>
                <div class="card-body">
                  <div class="alert alert-primary alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span>
                            <b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
                  </div>
                  <div class="alert alert-info alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span>
                            <b> Info - </b> This is a regular notification made with ".alert-info"</span>
                  </div>
                  <div class="alert alert-success alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span>
                            <b> Success - </b> This is a regular notification made with ".alert-success"</span>
                  </div>
                  <div class="alert alert-warning alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span>
                            <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                  </div>
                  <div class="alert alert-danger alert-dismissible fade show">
                    <button type="button" aria-hidden="true" class="close" data-dismiss="alert" aria-label="Close">
                      <i class="nc-icon nc-simple-remove"></i>
                    </button>
                    <span>
                            <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <card>
          <div class="places-buttons">
            <div class="row">
              <div class="col-md-6 ml-auto mr-auto text-center">
                <h4 class="card-title">
                  Notifications Places
                  <p class="category">Click to view notifications</p>
                </h4>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 ml-auto mr-auto">
                <div class="row">
                  <div class="col-md-4">
                    <p-button type="default" outline block round @click="notifyVue('top','left')">Top Left</p-button>
                  </div>
                  <div class="col-md-4">
                    <p-button type="default" outline block round @click="notifyVue('top','center')">Top Center
                    </p-button>
                  </div>
                  <div class="col-md-4">
                    <p-button type="default" outline block round @click="notifyVue('top','right')">Top Right</p-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-8 ml-auto mr-auto">
                <div class="row">
                  <div class="col-md-4">
                    <p-button type="default" outline block round @click="notifyVue('bottom','left')">Bottom Left</p-button>
                  </div>
                  <div class="col-md-4">
                    <p-button type="default" outline block round @click="notifyVue('bottom','center')">Bottom Center
                    </p-button>
                  </div>
                  <div class="col-md-4">
                    <p-button type="default" outline block round @click="notifyVue('bottom','right')">Bottom Right</p-button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 text-center">
              <div class="card-header">
                <h4 class="card-title">Modal</h4>
              </div>

              <p-button type="primary" @click.native="modals.classic = true">
                Classic modal
              </p-button>
              <p-button type="info" @click.native="modals.notice = true">
                Notice modal
              </p-button>
              <p-button @click.native="modals.mini = true">
                Small alert modal
              </p-button>

              <!-- Classic Modal -->
              <modal :show.sync="modals.classic" headerClasses="justify-content-center">
                <h4 slot="header" class="title title-up">Modal title</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                  the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                  language ocean. A small river named Duden flows by their place and supplies it with the necessary
                  regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
                  mouth.</p>
                <template slot="footer">

                  <div class="left-side">
                    <p-button type="default" link @click="modals.classic = false">Never mind</p-button>
                  </div>
                  <div class="divider"></div>
                  <div class="right-side">
                    <p-button type="danger" link @click="modals.classic = false">Delete</p-button>
                  </div>
                </template>
              </modal>

              <!-- notice modal -->
              <modal :show.sync="modals.notice"
                     footerClasses="justify-content-center"
                     type="notice">
                <h5 slot="header" class="modal-title">How Do You Become an Affiliate?</h5>
                <template>
                  <div class="instruction">
                    <div class="row">
                      <div class="col-md-8">
                        <strong>1. Register</strong>
                        <p class="description">The first step is to create an account at
                          <a href="http://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>
                      </div>
                      <div class="col-md-4">
                        <div class="picture">
                          <img src="/static/img/background/daniel-olahs.jpg" alt="Thumbnail Image" class="rounded img-raised">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="instruction">
                    <div class="row">
                      <div class="col-md-8">
                        <strong>2. Apply</strong>
                        <p class="description">The first step is to create an account at
                          <a href="http://www.creative-tim.com/">Creative Tim</a>. You can choose a social network or go for the classic version, whatever works best for you.</p>
                      </div>
                      <div class="col-md-4">
                        <div class="picture">
                          <img src="/static/img/background/david-marcu.jpg" alt="Thumbnail Image" class="rounded img-raised">
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>If you have more questions, don't hesitate to contact us or send us a tweet @creativetim. We're here to help!</p>

                </template>
                <div slot="footer" class="justify-content-center">
                  <p-button type="info" round @click.native="modals.notice = false">Sounds good!</p-button>
                </div>
              </modal>

              <!-- small modal -->
              <modal :show.sync="modals.mini"
                     class="modal-primary"
                     :show-close="false"
                     headerClasses="justify-content-center"
                     type="mini">
                <div slot="header" class="modal-profile ml-auto mr-auto">
                  <i class="nc-icon nc-bulb-63"></i>
                </div>
                <p>Always have an access to your profile</p>
                <template slot="footer">
                  <div class="left-side">
                    <p-button type="default" link @click="modals.mini = false">Back</p-button>
                  </div>
                  <div class="divider"></div>
                  <div class="right-side">
                    <p-button type="default" link @click="modals.mini = false">Close</p-button>
                  </div>
                </template>
              </modal>

            </div>
          </div>

        </card>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Button, Modal } from 'src/components/UIComponents'
  import NotificationTemplate from './NotificationTemplate'
  export default {
    components: {
      Card,
      Modal,
      [Button.name]: Button,
      NotificationTemplate
    },
    data() {
      return {
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        },
        modals: {
          classic: false,
          notice: false,
          mini: false
        }
      }
    },
    methods: {
      notifyVue(verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notify(
          {
            component: NotificationTemplate,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }

</script>
<style>
  .card .alert {
    position: relative !important;
    width: 100%
  }
</style>
