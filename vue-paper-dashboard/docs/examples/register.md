# Register

The register functionality is fully implemented in our theme helping you to start your project in no time. To register a new user you just have to add **/register** in the URL or click on register link from login page and fill the register form with user details.

The `src\components\Dashboard\Views\Pages\Register.vue` is the Vue component which handles the login functinality. You can easily extend it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

## Register card

```
<form @submit.prevent="register">
  <card type="signup" class="text-center">
    <template slot="header">
      <h4 class="card-title">Register</h4>
      <div class="social">
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

    <fg-input v-model="name" addon-left-icon="nc-icon nc-single-02" placeholder="Name"/>
    <validation-error :errors="apiValidationErrors.name"/>
    <fg-input v-model="email" addon-left-icon="nc-icon nc-email-85" placeholder="Email"/>
    <validation-error :errors="apiValidationErrors.email"/>
    <fg-input v-model="password" addon-left-icon="nc-icon nc-key-25" placeholder="Password" type="password"/>
    <validation-error :errors="apiValidationErrors.password"/>
    <fg-input v-model="password_confirmation" addon-left-icon="nc-icon nc-key-25" placeholder="Password confirmation" type="password"/>
    <validation-error :errors="apiValidationErrors.password_confirmation"/>
    <p-checkbox class="text-left" v-model="boolean">
      I agree to the
      <a href="#something">terms and conditions</a>.
    </p-checkbox>

    <p-button native-type="submit" slot="footer" type="info" round>Get Started</p-button>
  </card>
</form>
```