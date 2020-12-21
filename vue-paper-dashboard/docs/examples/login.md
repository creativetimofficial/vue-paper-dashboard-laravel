# Login

The login functionality is fully implemented in our theme helping you to start your project in no time. To login into dashboard you just have to add **/login** in the URL and fill the login form with one of the credentials (user: **admin@jsonapi.com**, **creator@jsonapi.com**, **member@jsonapi.com** and password: **secret**).

The `src\components\Dashboard\Views\Pages\Login.vue` is the Vue component which handles the login functinality. You can easily adapt it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

## Login Card

```
<div class="container">
  <div class="header-body text-center" style="margin-bottom: 15px;">
        <div class="row justify-content-center">
          <div class="text-center">
            <h1 class="text-white">Log in to Vue Paper Dashboard Laravel PRO Live Preview</h1>
            <p class="text-lead text-white">Log in to see how you can save more than 300 hours of work with an
            integrated Laravel API backend and ready-made CRUDs for managing:
            #users, #roles, #items, #categories, #tags.</p>
          </div>

          <div class="text-white">
            <h3 class="text-white"><strong>You can log in with 3 user types:</strong></h3>
            <div>Username <b>admin@jsonapi.com</b> Password <b>secret</b></div>
            <div>Username <b>creator@jsonapi.com</b> Password <b>secret</b></div>
            <div>Username <b>member@jsonapi.com</b> Password <b>secret</b></div>
          </div>
        </div>
  </div>
  <div class="col-lg-4 col-md-6 ml-auto mr-auto">
    <form @submit.prevent="login">
      <card type="login">
        <h3 slot="header" class="header text-center">Login</h3>

        <fg-input v-model="email" addon-left-icon="nc-icon nc-single-02" placeholder="Email"/>
        <validation-error :errors="apiValidationErrors.email" />
        <fg-input v-model="password" addon-left-icon="nc-icon nc-key-25" placeholder="Password" type="password"/>
        <validation-error :errors="apiValidationErrors.password" />
        <br>

        <p-button native-type="submit" slot="footer" type="warning" round block class="mb-3">Get started</p-button>
      </card>
    </form>
  </div>
</div>
```