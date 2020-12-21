<template>
  <div class="wrapper">

    <side-bar type="sidebar">
      <user-menu></user-menu>
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'nc-icon nc-bank',
            path: '/admin/overview'
          }"
        >
        </sidebar-item>
        <sidebar-item opened class="example" :link="{ name: 'Examples (API)', icon: 'fab fa-vuejs fa-2x' }">
          <sidebar-item
            :link="{
              name: 'User Profile',
              path: '/examples/user-profile'
            }"
          />
          <sidebar-item
            :link="{
              name: 'User Management',
              path: '/examples/user-management/list-users'
            }"
          />
        </sidebar-item>
          <sidebar-item :link="{
          name: 'Typography',
          path: '/components/typography',
          icon: 'nc-icon nc-caps-small'
          }">
          </sidebar-item>
         <sidebar-item :link="{
           name: 'Table List',
           icon: 'nc-icon nc-single-copy-04',
            path: '/table-list/regular'
           }">
         </sidebar-item>
          <sidebar-item :link="{
            name: 'Notifications',
            path: '/components/notifications',
            icon: 'nc-icon nc-bell-55'
           }">
           </sidebar-item>
           <sidebar-item :link="{
            name: 'Icons',
            icon: 'nc-icon nc-planet',
            path: '/components/icons'
           }">
           </sidebar-item>
         <sidebar-item :link="{
           name: 'Maps',
           icon: 'nc-icon nc-pin-3',
           path: '/maps/google'}">
         </sidebar-item>
         <sidebar-item
            :link="{ name: 'Upgrade to PRO',
             icon: 'fa fa-download',
             target: '_blank',
             isRoute: true,
             path: 'https://www.creative-tim.com/product/vue-paper-dashboard-pro-laravel' }"
            class="btn-sm btn-danger"
          ></sidebar-item>
          <sidebar-item
            :link="{ name: 'Download now',
             icon: 'fa fa-gift',
             target: '_blank',
             isRoute: true,
             path: 'https://www.creative-tim.com/product/vue-paper-dashboard-laravel' }"
            class="btn-sm btn-info"
          ></sidebar-item>
          <sidebar-item
            :link="{ name: 'Star us on Github',
             icon: 'fa fa-github',
             target: '_blank',
             isRoute: true,
             path: 'https://github.com/creativetimofficial/vue-paper-dashboard-laravel' }"
            class="btn-sm btn-dark"
          ></sidebar-item>
           <sidebar-item
            :link="{ name: 'Documentation',
             icon: 'nc-icon nc-single-copy-04',
             target: '_blank',
             isRoute: true,
             path: 'https://vue-paper-dashboard-laravel.creative-tim.com/documentation/' }"
            class="btn-sm btn-neutral"
          ></sidebar-item>
      </template>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import UserMenu from 'src/components/UIComponents/SidebarPlugin/UserMenu.vue'
import SidebarItem from '../../UIComponents/SidebarPlugin/SidebarItem.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      UserMenu,
      SidebarItem,
    },
    data() {
      return {}
    },

    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
