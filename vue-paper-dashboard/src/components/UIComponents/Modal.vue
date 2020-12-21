<template>
  <SlideYUpTransition :duration="animationDuration">
    <div class="modal fade"
         @click.self="closeModal"
         :class="[{'show d-block': show}, {'d-none': !show}, {'modal-mini': type === 'mini'}]"
         v-show="show"
         tabindex="-1"
         role="dialog"
         :aria-hidden="!show">

      <div class="modal-dialog"
           :class="[{'modal-notice': type === 'notice'}, modalClasses]">
        <div class="modal-content">

          <div class="modal-header"
               v-if="showHeader"
               :class="headerClasses">
            <slot name="close-button">
              <button type="button"
                      v-if="showClose"
                      @click="closeModal"
                      class="close"
                      data-dismiss="modal"
                      :aria-hidden="!show">
                <i class="nc-icon nc-simple-remove"></i>
              </button>
            </slot>
            <slot name="header"></slot>
          </div>

          <div class="modal-body" :class="bodyClasses">
            <slot></slot>
          </div>

          <div class="modal-footer" :class="footerClasses">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>

    </div>
  </SlideYUpTransition>
</template>
<script>
  import {SlideYUpTransition} from 'vue2-transitions'

  export default {
    name: 'modal',
    components: {
      SlideYUpTransition
    },
    props: {
      show: Boolean,
      showHeader: {
        type: Boolean,
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: '',
        validator(value) {
          let acceptedValues = ['', 'notice', 'mini']
          return acceptedValues.indexOf(value) !== -1
        },
        description: 'Modal type (notice|mini|"") '
      },
      modalClasses: {
        type: [Object, String],
        description: 'Modal dialog css classes'
      },
      headerClasses: {
        type: [Object, String],
        description: 'Modal Header css classes'
      },
      bodyClasses: {
        type: [Object, String],
        description: 'Modal Body css classes'
      },
      footerClasses: {
        type: [Object, String],
        description: 'Modal Footer css classes'
      },
      animationDuration: {
        type: Number,
        default: 500,
        description: 'Modal transition duration'
      }
    },
    methods: {
      closeModal() {
        this.$emit('update:show', false)
        this.$emit('close')
      }
    },
    watch: {
      show(val) {
        let documentClasses = document.body.classList
        if (val) {
          documentClasses.add('modal-open')
        } else {
          documentClasses.remove('modal-open')
        }
      }
    }
  }
</script>
<style>
  .modal.show {
    background-color: rgba(0, 0, 0, 0.3)
  }
</style>
