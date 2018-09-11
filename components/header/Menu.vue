<template>
  <div class="ui inverted menu">
    <!--<div class="ui simple dropdown item">-->
      <!--My account-->
      <!--<i class="dropdown icon"></i>-->
      <!--<div class="ui inverted menu">-->
        <!--<a class="header item" href="/login"  v-if="disconnected">Login</a>-->
        <!--<a class="header item" href="/logout" v-if="!disconnected">Logout</a>-->
      <!--</div>-->
    <!--</div>-->

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
  import NuxtLink from "../../.nuxt/components/nuxt-link";

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
