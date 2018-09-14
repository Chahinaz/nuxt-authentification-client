<template>
  <div class="ui inverted menu">

    <div class="ui simple dropdown item" v-if="isAuthenticated">
      <a class="header item"> {{ loggedUser.firstName }} </a>
      <div class="menu">
        <nuxt-link class="item" to="/profile">Profile</nuxt-link>
        <a class="item" @click="logout">Log Out</a>
      </div>
    </div>

    <div class="header item" v-else>
      <nuxt-link to="/login"  v-if="disconnected">Login</nuxt-link>
    </div>

    <div class="right menu">
      <nuxt-link class="header item" to="/">Home</nuxt-link>
      <nuxt-link class="header item" to="/blog">Blog</nuxt-link>
      <nuxt-link class="header item" to="/cv">Resume</nuxt-link>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters(['isAuthenticated', 'loggedUser'])
    },
    props: {
      disconnected: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      async logout(){
        await this.$auth.logout();
      }
    }
  }
</script>

<style scoped>
  a, .item {
    color: #FFFFFF !important;
  }
</style>
