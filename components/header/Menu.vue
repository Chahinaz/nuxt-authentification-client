<template>
  <div class="ui inverted menu">
    <div class="ui simple dropdown item" v-if="isAuthenticated">
      <header class="tiny header item">Navigate</header>
      <div class="menu">
        <nuxt-link class="item" to="/profile">Profile</nuxt-link>
        <a class="item" @click="logout">Log Out</a>
      </div>
    </div>

    <template v-else>
      <nuxt-link class="header item" to="/login"  v-if="disconnected">Login</nuxt-link>
      <nuxt-link class="header item" to="/register"  v-if="disconnected">Sign Up</nuxt-link>
    </template>


    <div class="right menu">
      <nuxt-link class="header item" to="/">Home</nuxt-link>
      <nuxt-link class="header item" to="/blog">Blog</nuxt-link>
      <nuxt-link class="header item" to="/cv">Resume</nuxt-link>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import NuxtLink from "../../.nuxt/components/nuxt-link";
  import Cookie from "js-cookie";

  export default {
    components: {NuxtLink},
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
        Cookie.remove('token');
        await this.$auth.logout();
        this.$axios.setHeader('Authorization', null)
      }
    }
  }
</script>

<style scoped>
  a, .item {
    color: #FFFFFF !important;
  }
</style>
