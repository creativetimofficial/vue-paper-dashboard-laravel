<template>
  <div v-if="user" class="row">
      <div class="col-lg-8 col-md-7">
      <edit-profile-card :user="user"/>
      <edit-password-card :user="user"/>
    </div>
    <div class="col-lg-4 col-md-5">
      <user-card/>
    </div>
  </div>
</template>
<script>
import EditProfileCard from './UserProfile/EditProfileCard.vue'
import UserCard from '../Pages/UserProfile/UserCard.vue'
import EditPasswordCard from './UserProfile/EditPasswordCard.vue'

export default {
  components: {
    EditProfileCard,
    UserCard,
    EditPasswordCard
  },

  data: () => ({
      user: null
    }),

    created() {
      this.getProfile();
    },

    methods: {
      async getProfile() {
        await this.$store.dispatch("profile/me")
        this.user = await this.$store.getters["profile/me"]
      }
    }
}
</script>
<style>

</style>
