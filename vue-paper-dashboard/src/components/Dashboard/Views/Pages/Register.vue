<template>
  <div class="register-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page ">
      <div class="full-page register-page section-image" filter-color="black">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-md-5 ml-auto">
                <info-section class="mt-5"
                              type="primary"
                              title="Marketing"
                              description="We've created the marketing campaign of the website. It was a very interesting collaboration."
                              icon="nc-icon nc-tv-2">

                </info-section>
                <info-section type="primary"
                              title="Fully Coded in HTML5"
                              description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
                              icon="nc-icon nc-html5">

                </info-section>

                <info-section type="primary"
                              title="Built Audience"
                              description="There is also a Fully Customizable CMS Admin Dashboard for this product."
                              icon="nc-icon nc-atom">

                </info-section>
              </div>
              <div class="col-lg-4 col-md-6 mr-auto">
                <form @submit.prevent="register">
                <card type="signup">
                  <template slot="header">
                    <h4 class="card-title text-center">Register</h4>
                    <div class="social text-center">
                      <button class="btn btn-icon btn-round btn-twitter">
                        <i class="fa fa-twitter"></i>
                      </button>
                      <button class="btn btn-icon btn-round btn-dribbble">
                        <i class="fa fa-dribbble"></i>
                      </button>
                      <button class="btn btn-icon btn-round btn-facebook">
                        <i class="fa fa-facebook-f"></i>
                      </button>
                      <p class="card-description"> or be classical </p>
                    </div>
                  </template>

                  <fg-input v-model="name" class="mb-2" addon-left-icon="nc-icon nc-single-02" placeholder="Name"/>
                  <validation-error :errors="apiValidationErrors.name"/>
                  <fg-input v-model="email" class="mb-2 mt-1" addon-left-icon="nc-icon nc-email-85" placeholder="Email"/>
                  <validation-error :errors="apiValidationErrors.email"/>
                  <fg-input v-model="password" class="mb-2 mt-1" addon-left-icon="nc-icon nc-key-25" placeholder="Password" type="password"/>
                  <validation-error :errors="apiValidationErrors.password"/>
                  <fg-input v-model="password_confirmation" class="mb-2 mt-1" addon-left-icon="nc-icon nc-key-25" placeholder="Password confirmation" type="password"/>
                  <validation-error :errors="apiValidationErrors.password_confirmation"/>
                  <p-checkbox class="text-left" v-model="boolean">
                    I agree to the
                    <a href="#something">terms and conditions</a>.
                  </p-checkbox>

                  <p-button native-type="submit" slot="footer" type="info" round>Get Started</p-button>
                </card>
                </form>
              </div>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div class="full-page-background"
             style="background-image: url(/static/img/background/jan-sendereks.jpg) "></div>
      </div>
    </div>
  </div>
</template>
<script>
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import { Card, Checkbox, Button, InfoSection } from 'src/components/UIComponents';
  import formMixin from "@/mixins/form-mixin";
  import ValidationError from "src/components/UIComponents/ValidationError.vue";
  export default {
    mixins: [formMixin],
    components: {
      Card,
      AppNavbar,
      AppFooter,
      InfoSection,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button,
      ValidationError
    },
    data() {
      return {
        name: null,
        boolean: false,
        email: null,
        password: null,
        password_confirmation: null,
      };
    },
    methods: {
      async register() {
        if (!this.boolean) {
          await this.$notify({
            type: 'danger',
            message: 'You need to agree with our terms and conditions.',
          })
          return;
        }
        const user = {
          data: {
            type: "token",
            attributes: {
              name: this.name,
              email: this.email,
              password: this.password,
              password_confirmation: this.password_confirmation,
            },
          },
        };
        const requestOptions = {
          headers: {
            Accept: "application/vnd.api+json",
            "Content-Type": "application/vnd.api+json",
          },
        };
        try {
          await this.$store.dispatch("register", { user, requestOptions });
          this.$notify({
            type: 'success',
            message: 'Successfully registered.',
          })
        } catch (error) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
          })
          this.setApiValidation(error.response.data.errors);
        }
      },
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy() {
      this.closeMenu()
    }
  }
</script>
<style>
</style>