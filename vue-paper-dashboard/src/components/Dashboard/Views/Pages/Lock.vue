<template>
  <div class="lock-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page ">
      <div class="full-page lock-page section-image" filter-color="black">
        <!--   you can change the color of the filter page using: data-color="blue | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <card type="lock" class="text-center">
                <img slot="header" src="/static/img/faces/joe-gardner-2.jpg" alt="...">
                <h4 class="card-title">Joe Gardner</h4>
                <fg-input type="password" placeholder="Enter Password.."></fg-input>
                <p-button slot="footer" type="default" round outline>
                  Unlock
                </p-button>
              </card>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div class="full-page-background" style="background-image: url(/static/img/background/bruno-abatti.jpg) "></div></div>
    </div>
  </div>
</template>
<script>
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import { Card, Button, FgInput } from 'src/components/UIComponents';

  export default {
    components: {
      Card,
      AppNavbar,
      AppFooter,
      FgInput,
      [Button.name]: Button
    },
    methods: {
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
