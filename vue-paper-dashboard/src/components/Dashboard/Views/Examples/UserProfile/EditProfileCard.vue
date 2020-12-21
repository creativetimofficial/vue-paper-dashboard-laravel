<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Profile</h4>
    </div>
    <div class="card-body">
      <form ref="profile_form" @submit.prevent="updateProfile">
        <fg-input v-model="user.name" placeholder="Name" label="Name"></fg-input>
        <validation-error :errors="apiValidationErrors.name" />
        <fg-input v-model="user.email" placeholder="Enter email" label="Email address"></fg-input>
        <validation-error :errors="apiValidationErrors.email" />
        <div class="text-center">
          <button native-type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
            Update Profile
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
import formMixin from "@/mixins/form-mixin";
import ValidationError from "src/components/UIComponents/ValidationError.vue";
  export default {
    mixins: [formMixin],
    components: {
      ValidationError
    },
    props: {
      user: Object
    },

    data() {
      return {};
    },
    methods: {
      async updateProfile () {
        if (this.$isDemo && ["1"].includes(this.user.id)) {
          await this.$notify({
            type: "danger",
            message: "You are not allowed to change data of default users.",
          });
          return;
        }
         try {
          await this.$store.dispatch("profile/update", this.user)
          this.resetApiValidation();
          this.$notify({
            type: 'success',
            message: 'Profile updated successfully.',
          })
          await this.$store.getters["profile/me"]
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
          })
          this.setApiValidation(e.response.data.errors)
        }
      }
    }
  }
</script>

