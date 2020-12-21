<template>
  <div class="container-fluid">
    <h4 class="card-title">Sweet Alert 2</h4>
    <p class="category">A beautiful plugin, that replace the classic alert, Handcrafted by our friend <a target="_blank"
                                                                                                         rel="noopener"
                                                                                                         href="https://twitter.com/t4t5">Tristan Edwards</a>. Please check out the <a
      href="http://limonte.github.io/sweetalert2/" target="_blank" rel="noopener">full documentation.</a></p>

    <br><br>

    <div class="places-sweet-alerts">
      <div class="row">
        <div class="col-md-3">
          <card card-body-classes="text-center">
              <p class="card-text">Basic example</p>
              <p-button type="default" round outline @click="showSwal('basic')">Try me!</p-button>
          </card>
        </div>
        <div class="col-md-3">
          <card card-body-classes="text-center">
              <p class="card-text">A title with a text under</p>
              <p-button type="default" round outline @click="showSwal('title-and-text')">Try me!</p-button>
          </card>
        </div>
        <div class="col-md-3">
          <card card-body-classes="text-center">
              <p class="card-text">A success message</p>
              <p-button type="default" round outline @click="showSwal('success-message')">Try me!</p-button>
          </card>
        </div>
        <div class="col-md-3">
          <card card-body-classes="text-center">
              <p class="card-text">Custom HTML description</p>
              <p-button type="default" round outline @click="showSwal('custom-html')">Try me!</p-button>
          </card>
        </div>
        <div class="col-md-3">
          <card card-body-classes="text-center">
              <p class="card-text">A warning message, with a function attached to the "Confirm" Button...</p>
              <p-button type="default" round outline @click="showSwal('warning-message-and-confirmation')">
                Try me!
              </p-button>
          </card>
        </div>
        <div class="col-md-3">
          <card card-body-classes="text-center">
              <p class="card-text">...and by passing a parameter, you can execute something else for "Cancel"</p>
              <p-button type="default" round outline @click="showSwal('warning-message-and-cancel')">Try me!</p-button>
          </card>
        </div>
        <div class="col-md-3">
          <card card-body-classes="text-center">
              <p class="card-text">A message with auto close timer set to 2 seconds</p>
              <p-button type="default" round outline @click="showSwal('auto-close')">Try me!</p-button>
          </card>
        </div>
        <div class="col-md-3">
          <card card-body-classes="text-center">
              <p class="card-text">Modal window with input field</p>
              <p-button type="default" round outline @click="showSwal('input-field')">Try me!</p-button>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import swal from 'sweetalert2'
  import {Button, Card} from 'src/components/UIComponents'
  export default {
    components: {
      [Button.name]: Button,
      Card
    },
    methods: {
      showSwal (type) {
        if (type === 'basic') {
          swal({
            title: `Here's a message!`,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success btn-fill'
          })
        } else if (type === 'title-and-text') {
          swal({
            title: `Here's a message!`,
            text: `It's pretty, isn't it?`,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-info btn-fill'
          })
        } else if (type === 'success-message') {
          swal({
            title: `Good job!`,
            text: 'You clicked the button!',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success btn-fill',
            type: 'success'
          })
        } else if (type === 'warning-message-and-confirmation') {
          swal({
            title: 'Are you sure?',
            text: `You won't be able to revert this!`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success btn-fill',
            cancelButtonClass: 'btn btn-danger btn-fill',
            confirmButtonText: 'Yes, delete it!',
            buttonsStyling: false
          }).then(function () {
            swal({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              type: 'success',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false
            })
          })
        } else if (type === 'warning-message-and-cancel') {
          swal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
            confirmButtonClass: 'btn btn-success btn-fill',
            cancelButtonClass: 'btn btn-danger btn-fill',
            buttonsStyling: false
          }).then(function () {
            swal({
              title: 'Deleted!',
              text: 'Your imaginary file has been deleted.',
              type: 'success',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false
            })
          }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
              swal({
                title: 'Cancelled',
                text: 'Your imaginary file is safe :)',
                type: 'error',
                confirmButtonClass: 'btn btn-info btn-fill',
                buttonsStyling: false
              })
            }
          })
        } else if (type === 'custom-html') {
          swal({
            title: 'HTML example',
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-success btn-fill',
            html: 'You can use <b>bold text</b>, ' +
            '<a href="http://github.com">links</a> ' +
            'and other HTML tags'
          })
        } else if (type === 'auto-close') {
          swal({
            title: 'Auto close alert!',
            text: 'I will close in 2 seconds.',
            timer: 2000,
            showConfirmButton: false
          })
        } else if (type === 'input-field') {
          swal({
            title: 'Input something',
            html: '<div class="form-group">' +
            '<input id="input-field" type="text" class="form-control" />' +
            '</div>',
            showCancelButton: true,
            confirmButtonClass: 'btn btn-success btn-fill',
            cancelButtonClass: 'btn btn-danger btn-fill',
            buttonsStyling: false
          }).then(function (result) {
            swal({
              type: 'success',
              html: 'You entered',
              confirmButtonClass: 'btn btn-success btn-fill',
              buttonsStyling: false

            })
          }).catch(swal.noop)
        }
      }
    }
  }
</script>
<style>
</style>
