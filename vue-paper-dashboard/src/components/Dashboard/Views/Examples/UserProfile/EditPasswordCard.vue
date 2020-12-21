<template>
  <div class="card">
    <div class="card-header">
      <h4 class="title">Edit Password</h4>
    </div>
    <div class="card-body">
      <form ref="password_form" @submit.prevent="changePassword">
        <fg-input v-model="password" placeholder="Password" label="Password" type="password"></fg-input>
        <validation-error :errors="apiValidationErrors.password" />
        <fg-input v-model="password_confirmation" placeholder="Confirm password" label="Confirm password" type="password"></fg-input>
        <validation-error :errors="apiValidationErrors.password_confirmation" />
        <div class="text-center">
          <button native-type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="changePassword">
            Update Password
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

    data: () => ({
      password: null,
      password_confirmation: null,
    }),
    methods: {
      async changePassword () {
        if (this.$isDemo && ["1"].includes(this.user.id)) {
          await this.$notify({
            type: "danger",
            message: "You are not allowed to change data of default users.",
          });
          return;
        }
        const user = {
          id: this.user.id,
          type: "users",
          password: this.password,
          password_confirmation: this.password_confirmation
        }
         try {
          this.resetApiValidation();
          await this.$store.dispatch("users/update", user)
          this.user = await this.$store.getters["profile/me"];
          this.$refs["password_form"].reset();
          
          this.$notify({
            type: 'success',
            message: 'Profile updated successfully.',
          })
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
