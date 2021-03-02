<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <a data-toggle="dropdown">
        <i
          style="cursor: pointer"
          class="fa fa-cog fa-2x"
          @click="toggleDropDown"
        >
        </i>
      </a>
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        <li class="header-title">Sidebar Background</li>
        <li class="adjustments-line text-center">
          <a class="switch-trigger background-color">
            <span
              v-for="item in sidebarColors"
              :key="item.color"
              class="badge filter"
              :class="[`badge-${item.color}`, { active: item.active }]"
              :data-color="item.color"
              @click="changeSidebarBackground(item)"
            ></span>
          </a>
        </li>

        <li class="header-title">Sidebar Active Color</li>
        <li class="adjustments-line text-center">
          <a class="switch-trigger active-color">
            <span
              v-for="item in sidebarTextColors"
              :key="item.color"
              class="badge filter"
              :class="[`badge-${item.color}`, { active: item.active }]"
              :data-color="item.color"
              @click="changeSidebarLinkColor(item)"
            ></span>
          </a>
        </li>

        <li class="button-container">
          <div class="">
            <a
              href="https://www.creative-tim.com/product/vue-paper-dashboard-pro-laravel"
              target="_blank"
              class="btn btn-danger btn-block btn-fill btn-round"
            >
              <i class="fas fa-download mr-2"></i>Upgrade to PRO</a
            >

            <a
              href="https://vue-paper-dashboard-laravel.creative-tim.com/documentation"
              target="_blank"
              class="btn btn-success btn-block btn-fill btn-round"
            >
              <i class="fas fa-file-alt mr-2"></i>Documentation</a
            >

            <a
              href="https://www.creative-tim.com/product/vue-paper-dashboard-laravel"
              target="_blank"
              class="btn btn-info btn-block btn-fill btn-round"
            >
              <i class="fas fa-gift mr-2"></i>
              Download now
            </a>

            <a
              href="https://github.com/creativetimofficial/vue-paper-dashboard-laravel"
              target="_blank"
              class="btn btn-github btn-block btn-fill btn-round"
            >
              <i class="fab fa-github mr-2"></i>
              Star us on Github
            </a>
          </div>
        </li>

        <li class="header-title">Thank you for sharing!</li>

        <li class="button-container">
          <social-sharing
            :url="shareUrl"
            inline-template
            title="Vue Paper Dashboard - Free Bootstrap Admin Template for Vue.js"
            hashtags="vuejs, dashboard, bootstrap"
            twitter-user="creativetim"
          >
            <div>
              <network
                network="facebook"
                class="btn btn-facebook btn-round btn-default btn-icon"
              >
                <i class="fa fa-fw fa-facebook"></i>
              </network>
              <network
                network="pinterest"
                class="btn btn-pinterest btn-icon btn-round"
              >
                <i class="fa fa-fw fa-pinterest"></i>
              </network>
              <network
                network="twitter"
                class="btn btn-twitter btn-icon btn-round"
              >
                <i class="fa fa-fw fa-twitter"></i>
              </network>
            </div>
          </social-sharing>
        </li>

        <li class="button-container">
          <gh-btns-star
            slug="creativetimofficial/vue-paper-dashboard-laravel"
            show-count
          ></gh-btns-star>
          <gh-btns-fork
            slug="creativetimofficial/vue-paper-dashboard-laravel"
            show-count
          ></gh-btns-fork>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";
import SocialSharing from "vue-social-sharing";

const VueSelect = {
  install(Vue, options) {
    Vue.component("SocialSharing", SocialSharing);
  },
};
Vue.use(VueSelect);
Vue.use(VueGitHubButtons, { useCache: true });

export default {
  props: {
    backgroundColor: String,
    activeColor: String,
  },
  data() {
    return {
      shareUrl:
        "https://www.creative-tim.com/product/vue-paper-dashboard-laravel",
      isOpen: false,
      sidebarColors: [
        { color: "white", active: false },
        { color: "black", active: true },
        { color: "darkblue", active: false },
      ],
      sidebarTextColors: [
        { color: "primary", active: false },
        { color: "info", active: false },
        { color: "success", active: true },
        { color: "warning", active: false },
        { color: "danger", active: false },
      ],
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown() {
      this.isOpen = false;
    },
    toggleList(list, itemToActivate) {
      list.forEach((listItem) => {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    changeSidebarBackground(item) {
      this.$emit("update:backgroundColor", item.color);
      this.toggleList(this.sidebarColors, item);
    },
    changeSidebarLinkColor(item) {
      this.$emit("update:activeColor", item.color);
      this.toggleList(this.sidebarTextColors, item);
    },
  },
};
</script>
