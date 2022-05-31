# [Vue Paper Dashboard Laravel](https://vue-paper-dashboard-laravel.creative-tim.com/?ref=mdpl-readme)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/vue-paper-dashboard-laravel.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-paper-dashboard-laravel/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/vue-paper-dashboard-laravel/vue-paper-dashboard-laravel.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-paper-dashboard-laravel/issues?q=is%3Aissue+is%3Aclosed)

_Frontend version_: Paper Dashboard v2.0.1. More info at https://www.creative-tim.com/product/paper-dashboard-2

![Product Image](https://s3.amazonaws.com/creativetim_bucket/products/404/original/opt_pd_vuelaravel_thumbnail.jpg)

What if your frontend came not only with reusable components, but also with a reusable backend? API-driven development is more than just a buzzword and we partnered with [UPDIVISION](https://updivision.com) to prove it. Build awesome-looking apps with a flexible architecture across a variety of devices and operating systems with Vue Paper Dashboard Laravel. 

# Download

For the free version of the project you can either
- download the .zip file from the Creative Tim site and extract it or 
- make a clone from the Github repository

You will get two project folders: one for the Laravel API project and one for the Vue frontend.

# Laravel API Setup

## Introduction

JSON:API is a specification for how a client should request that resources be fetched or modified, and how a server should respond to those requests. It is designed to minimize both the number of requests and the amount of data transmitted between clients and servers. This efficiency is achieved without compromising readability, flexibility, or discoverability.

[Click here to go to the JSON:API docs](https://explore.postman.com/api/6357/laravel-jsonapi)

## Prerequisites

### JSON:API backend
The Laravel JSON:API backend project requires a proper multi-threaded web server such as Apache/Nginx environment with PHP, Composer and MySQL.

**Do not use `php artisan serve` as it will result in stalled requests due to the single-threaded nature of the built-in PHP web server.** 

We strongly recommend using [Laradock](https://laradock.io/) for Linux and Mac or [Laragon](https://laragon.org/download/) for Windows if possible.

Other options for your local environment:
- Windows: [How to install WAMP on Windows](https://updivision.com/blog/post/beginner-s-guide-to-setting-up-your-local-development-environment-on-windows)
- Linux: [How to install LAMP on Linux](https://howtoubuntu.org/how-to-install-lamp-on-ubuntu)
- Mac: [How to install MAMP on MAC](https://wpshout.com/quick-guides/how-to-install-mamp-on-your-mac/)

You will also need to install Composer 2: [https://getcomposer.org/doc/00-intro.md](https://getcomposer.org/doc/00-intro.md)

### Vue Paper frontend
The Vue Paper frontend project requires a working local environment with NodeJS version 8.9 or above (8.11.0+ recommended), npm, VueCLI.

Install Node: https://nodejs.org/ (version 8.11.0+ recommended)

Install NPM: https://www.npmjs.com/get-npm

Install VueCLI: https://cli.vuejs.org/guide/installation.html

## Laravel JSON:API Project Installation

1. Navigate in your Laravel API project folder: `cd your-laravel-json-api-project`
2. Install project dependencies: `composer install`
3. Create a new .env file: `cp .env.example .env`
3. Add your own database credentials in the .env file in DB_DATABASE, DB_USERNAME, DB_PASSWORD
5. Create users table: `php artisan migrate --seed`
6. Generate application key: `php artisan key:generate`
7. Install Laravel Passport: `php artisan passport:install`
8. Add your own mailtrap.io credentials in MAIL_USERNAME and MAIL_PASSWORD in the .env file

## Vue Paper Dashboard Project Installation

1. Navigate to your Vue Paper Dashboard project folder:  `cd your-vue-paper-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_BASE_URL` should contain the URL of your Vue Paper Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build`  to build release distributables.

*Extra Note*
- use `npx npm@6.14.16 install` if `npm install` failed. Ref: [StackOverflow](https://stackoverflow.com/a/68479189/5033470)

## Usage

Register a user or login using admin@jsonapi.com and secret and start testing the theme.

Besides the dashboard and the auth pages this theme also has an edit profile page. All the necessary files are installed out of the box and all the needed routes are added to `src\router\index.js`. Keep in mind that all the features can be viewed once you log in using the credentials provided above or by registering your own user.

### Dashboard

You can access the dashboard either by using the "**Dashboards/Dashboard**" link in the left sidebar or by adding **/home** in the URL.

### Login

The login functionality is fully implemented in our theme helping you to start your project in no time. To login into dashboard you just have to add **/login** in the URL and fill the login form with one of the credentials (user: **admin@jsonapi.com**, **creator@jsonapi.com**, **member@jsonapi.com** and password: **secret**).

The `src\components\Dashboard\Views\Pages\Login.vue` is the Vue component which handles the login functinality. You can easily adapt it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

### Login Card

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

### Register

The register functionality is fully implemented in our theme helping you to start your project in no time. To register a new user you just have to add **/register** in the URL or click on register link from login page and fill the register form with user details.

The `src\components\Dashboard\Views\Pages\Register.vue` is the Vue component which handles the login functinality. You can easily extend it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

#### Register card

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

### Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\components\Dashboard\Views\Examples\UserProfile` is the folder with Vue components that handle the update of the user information and password.

#### Edit profile component

```
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
         try {
          await this.$store.dispatch("profile/update", this.user)
          this.resetApiValidation();
          this.$notify({
            type: 'success',
            message: 'Profile updated successfully.',
            icon: 'nc-icon nc-bell-55',
          })
          await this.$store.getters["profile/me"]
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
            icon: 'nc-icon nc-bell-55',
          })
          this.setApiValidation(e.response.data.errors)
        }
      }
    }
  }
</script>
```

#### Edit password component

```
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
            icon: 'nc-icon nc-bell-55',
          })
        } catch (e) {
          this.$notify({
            type: 'danger',
            message: 'Oops, something went wrong!',
            icon: 'nc-icon nc-bell-55',
          })
          this.setApiValidation(e.response.data.errors)
        }
      }
    }
  }
</script>
```

## Table of Contents

* [Versions](#versions)
* [Demo](#demo)
* [Documentation](#documentation)
* [File Structure](#file-structure)
* [Browser Support](#browser-support)
* [Resources](#resources)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/laravel_logo.png" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/json-api.png" height="75" />](#)

| HTML | Laravel | Vue & Laravel |
| -- | -- | -- |
| [![Paper Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/86/original/opt_pd2_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-2?ref=vpdpl-readme) | [![Paper Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/209/original/opt_pd_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-laravel?ref=vpdpl-readme) |  [![Vue Paper Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/404/original/opt_pd_vuelaravel_thumbnail.jpg)](https://www.creative-tim.com/product/vue-paper-dashboard-laravel?ref=vpdpl-readme) |

## Demo

| Register | Login | Dashboard |
| --- | --- | ---  |
| [![Register](https://github.com/creativetimofficial/public-assets/raw/master/vue-paper-dashboard-laravel/Register.png)](https://vue-paper-dashboard-laravel.creative-tim.com/register?ref=vpdl-readme)  | [![Login](https://github.com/creativetimofficial/public-assets/raw/master/vue-paper-dashboard-laravel/Login.png)](https://vue-paper-dashboard-laravel.creative-tim.com/login?ref=vpdl-readme)  | [![Dashboard](https://github.com/creativetimofficial/public-assets/raw/master/vue-paper-dashboard-laravel/Dashboard.png)](https://vue-paper-dashboard-laravel.creative-tim.com/?ref=vpdl-readme) |

| Profile Page | Users Page | Tables Page  |
| --- | --- | ---  |
| [![Profile Page](https://github.com/creativetimofficial/public-assets/raw/master/vue-paper-dashboard-laravel/Profile.png)](https://vue-paper-dashboard-laravel.creative-tim.com/examples/user-profile?ref=vpdl-readme)  | [![Users Page](https://github.com/creativetimofficial/public-assets/raw/master/vue-paper-dashboard-laravel/Users.png)](https://vue-paper-dashboard-laravel.creative-tim.com/examples/user-management/list-users?ref=vpdl-readme) | [![Tables Page](https://github.com/creativetimofficial/public-assets/raw/master/vue-paper-dashboard-laravel/Tables.png)](https://vue-paper-dashboard-laravel.creative-tim.com/table-list?ref=vpdl-readme)
[View More](https://vue-paper-dashboard-laravel.creative-tim.com/?ref=vpdl-readme)

## Documentation
The documentation for the Vue Paper Dashboard Laravel is hosted at our [website](https://vue-paper-dashboard-laravel.creative-tim.com/documentation?ref=vpdl-readme).

## File Structure
```
├───vue-paper-dashboard
│   App.vue
│   main.js
│   polyfills.js
│
├───assets
│   ├───css
│   │   │   style.css
│   │   │
│   │   └───nucleo
│   └───sass
│       │   argon.scss
│       │
│       ├───core
│       └───custom
├───axios
│       index.js
│
├───components
|    ├── Dashboard
|    │   ├── Layout
|    │   │   ├── ContentFooter.vue
|    │   │   ├── Content.vue
|    │   │   ├── DashboardLayout.vue
|    │   │   ├── LoadingMainPanel.vue
|    │   │   └── TopNavbar.vue
|    │   └── Views
|    │       ├── Components
|    │       │   ├── Buttons.vue
|    │       │   ├── GridSystem.vue
|    │       │   ├── Icons.vue
|    │       │   ├── Notifications.vue
|    │       │   ├── NotificationTemplate.vue
|    │       │   ├── Panels.vue
|    │       │   ├── SweetAlert.vue
|    │       │   └── Typography.vue
|    │       ├── Dashboard
|    │       │   ├── Overview.vue
|    │       │   ├── Widgets
|    │       │   │   ├── TaskList.vue
|    │       │   │   └── Task.vue
|    │       │   └── Widgets.vue
|    │       ├── Examples
|    │       │   ├── UserManagement
|    │       │   │   └── ListUserPage.vue
|    │       │   ├── UserProfile
|    │       │   │   ├── EditPasswordCard.vue
|    │       │   │   └── EditProfileCard.vue
|    │       │   └── UserProfile.vue
|    │       ├── Maps
|    │       │   ├── API_KEY.js
|    │       │   ├── GoogleMaps.vue
|    │       ├── Pages
|    │       │   ├── Layout
|    │       │   │   ├── AppFooter.vue
|    │       │   │   └── AppNavbar.vue
|    │       │   ├── Lock.vue
|    │       │   ├── Login.vue
|    │       │   ├── Register.vue
|    │       │   ├── TimeLinePage.vue
|    │       │   ├── UserProfile
|    │       │   │   ├── EditProfileForm.vue
|    │       │   │   ├── MembersCard.vue
|    │       │   │   └── UserCard.vue
|    │       │   └── UserProfile.vue
|    │       ├── Password
|    │       │   ├── Reset.vue
|    │       │   └── Email.vue
|    │       └── Tables
|    │           ├── RegularTables.vue
|    ├── GeneralViews
|    │   └── NotFoundPage.vue
|    └── UIComponents
|        ├── Cards
|        │   ├── Card.vue
|        │   ├── ChartCard.vue
|        │   ├── CircleChartCard.vue
|        │   └── StatsCard.vue
|        ├── Charts
|        │   ├── BarChart.js
|        │   ├── DoughnutChart.js
|        │   ├── LineChart.js
|        │   ├── mixins
|        │   │   └── reactiveChart.js
|        │   ├── PieChart.js
|        │   ├── plugins
|        │   │   └── plugin-chart-text.js
|        │   └── utils.js
|        ├── Collapse
|        │   ├── CollapseItem.vue
|        │   └── Collapse.vue
|        ├── Dropdown.vue
|        ├── index.js
|        ├── InfoSection.vue
|        ├── Inputs
|        │   ├── Checkbox.vue
|        │   ├── formGroupInput.vue
|        │   ├── IconCheckbox.vue
|        │   └── Radio.vue
|        ├── Modal.vue
|        ├── Navbar
|        │   ├── NavbarToggleButton.vue
|        │   └── Navbar.vue
|        ├── Pagination.vue
|        ├── Progress.vue
|        ├── SidebarPlugin
|        │   ├── index.js
|        │   ├── SidebarItem.vue
|        │   ├── SideBar.vue
|        │   └── UserMenu.vue
|        ├── Switch.vue
|        ├── Tabs
|        │   ├── PillsLayout.vue
|        │   ├── TabsLayout.vue
|        │   ├── Tabs.vue
|        │   └── Tab.vue
|        ├── TimeLine
|        │   ├── TimeLineItem.vue
|        │   └── TimeLine.vue
|        ├── ValidationError.vue
|        └── Wizard
|            ├── WizardTab.vue
|            └── Wizard.vue
│
├───middleware
│       auth.js
│       guest.js
│
├───mixins
│       form-mixin.js
│
├───plugins
│       dashboard-plugin.js
│       globalComponents.js
│       globalDirectives.js
│
├───router
│       index.js
│       routes.js
│       starterRouter.js
│
├───store
│   │   index.js
│   │
│   ├───modules
│   │       auth.js
│   │       profile-module.js
│   │       reset.js
│   │       users-module.js
│   │
│   └───services
│           profile-service.js
│           users-service.js
│
├───util
│       throttle.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">


## Resources
- Demo: <https://vue-paper-dashboard-laravel.creative-tim.com/?ref=vpdpl-readme>
- Download Page: <https://www.creative-tim.com/product/vue-paper-dashboard-laravel?ref=vpdpl-readme>
- Documentation: <https://vue-paper-dashboard-laravel.creative-tim.com/documentation?ref=vpdpl-readme>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/vue-paper-dashboard-laravel/issues)
- **Dashboards:**

| HTML | Laravel | Vue & Laravel |
| -- | -- | -- |
| [![Paper Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/86/original/opt_pd2_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-2?ref=vpdpl-readme) | [![Paper Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/209/original/opt_pd_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-laravel?ref=vpdpl-readme) |  [![Vue Paper Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/404/original/opt_pd_vuelaravel_thumbnail.jpg)](https://www.creative-tim.com/product/vue-paper-dashboard-laravel?ref=vpdpl-readme) |

## Change log

Please see the [changelog](CHANGELOG.md) for more information on what has changed recently.

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Black Dashboard Laravel. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Black Dashboard Laravel. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=vpdl-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright Creative Tim (https://www.creative-tim.com/?ref=vpdl-readme)
- Licensed under MIT (https://github.com/creativetimofficial/vue-paper-dashboard-laravel/blob/master/LICENSE.md)

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=vpdl-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=vpdl-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=vpdl-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=vpdl-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=vpdl-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles??ref=vpdl-readme)

## Social Media

### Creative Tim:

Twitter: <https://twitter.com/CreativeTim?ref=vpdl-readme>

Facebook: <https://www.facebook.com/CreativeTim?ref=vpdl-readme>

Dribbble: <https://dribbble.com/creativetim?ref=vpdl-readme>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=vpdl-readme>


### Updivision:

Twitter: <https://twitter.com/updivision?ref=vpdl-readme>

Facebook: <https://www.facebook.com/updivision?ref=vpdl-readme>

Linkedin: <https://www.linkedin.com/company/updivision?ref=vpdl-readme>

Updivision Blog: <https://updivision.com/blog/?ref=vpdl-readme>

## Credits

- [Creative Tim](https://creative-tim.com/?ref=mdpl-readme)
- [UPDIVISION](https://updivision.com)

