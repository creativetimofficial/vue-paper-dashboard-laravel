<template>
  <navbar v-model="showNavbar">
    <div class="navbar-wrapper">
      <div class="navbar-minimize">
        <button
          id="minimizeSidebar"
          class="btn btn-icon btn-round"
          @click="minimizeSidebar"
        >
          <i
            class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"
          ></i>
          <i
            class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"
          ></i>
        </button>
      </div>
      <div class="navbar-toggle">
        <navbar-toggle-button @click.native="toggleSidebar">
        </navbar-toggle-button>
      </div>
      <a class="navbar-brand" href="#pablo">Vue Paper Dashboard </a>
    </div>

    <template slot="navbar-menu">
      <a
        href="https://vue-paper-dashboard-laravel.creative-tim.com/documentation"
        target="_blank"
        class="btn btn-danger mt-0 mr-2"
        style="background-color: #6bd098"
        id="docs"
      >
        <i class="fas fa-file-alt mr-2"></i>Documentation</a
      >

      <a
        href="https://www.creative-tim.com/product/vue-paper-dashboard-laravel"
        target="_blank"
        class="btn btn-danger mt-0 mr-2"
        style="background-color: #ef8157"
        id="downb"
      >
        <i class="fas fa-download mr-2"></i>Download now</a
      >

      <form>
        <div class="input-group no-border">
          <input
            type="text"
            value=""
            class="form-control"
            placeholder="Search..."
          />
          <div class="input-group-append">
            <div class="input-group-text">
              <i class="nc-icon nc-zoom-split"></i>
            </div>
          </div>
        </div>
      </form>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link btn-magnify" href="#pablo">
            <i class="nc-icon nc-layout-11"></i>
            <p>
              <span class="d-lg-none d-md-block">Stats</span>
            </p>
          </a>
        </li>
        <drop-down
          icon="nc-icon nc-bell-55"
          tag="li"
          position="right"
          direction="none"
          class="nav-item btn-rotate dropdown"
        >
          <a
            slot="title"
            slot-scope="{ isOpen }"
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="isOpen"
          >
            <i class="nc-icon nc-bell-55"></i>
            <p>
              <span class="d-lg-none d-md-block">Some Actions</span>
            </p>
          </a>
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </drop-down>
        <drop-down
          icon="nc-icon nc-settings-gear-65"
          tag="li"
          position="right"
          direction="none"
          class="nav-item btn-rotate dropdown"
        >
          <a
            slot="title"
            slot-scope="{ isOpen }"
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="isOpen"
          >
            <i class="nc-icon nc-settings-gear-65"></i>
            <p>
              <span class="d-lg-none d-md-block">Profile</span>
            </p>
          </a>
          <a class="dropdown-item" href="#" @click="goToProfile">Profile</a>
          <a class="dropdown-item" @click="logout" href="#">Log out</a>
        </drop-down>
      </ul>
    </template>
  </navbar>
</template>
<script>
import { Navbar, NavbarToggleButton } from "src/components/UIComponents";

export default {
  components: {
    Navbar,
    NavbarToggleButton,
  },
  data() {
    return {
      activeNotifications: false,
      showNavbar: false,
    };
  },
  methods: {
    goToProfile() {
      this.$router.push({ name: "User Profile" });
    },
    logout() {
      this.$store.dispatch("logout");
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    minimizeSidebar() {
      this.$sidebar.toggleMinimize();
    },
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>
<style>
#docs:hover,
#docs:active,
#docs:focus {
  background-color: #6bd098 !important;
}
#downb:hover,
#downb:active,
#downb:focus {
  background-color: #ef8157 !important;
}
</style>
