<template>
  <div class="ui inverted menu">
    <div class="ui simple dropdown item">
      My account
      <i class="dropdown icon"></i>
      <div class="menu">
        <nuxt-link class="header item" to="/login" v-if="disconnected">Login</nuxt-link>
        <nuxt-link class="header item" to="/logout" v-if="!disconnected">Logout</nuxt-link>
      </div>
    </div>
    <div class="right menu">
      <nuxt-link class="header item" to="/">Home</nuxt-link>
      <nuxt-link class="header item" to="/cv">Resume</nuxt-link>
      <nuxt-link class="header item" to="/blog">Blog</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      disconnected: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style>
  a {
    color: #FFFFFF !important;
  }

  .inverted {
    border-radius: 0 !important;
    background-color: #333230 !important;
    margin: 0 !important;
  }
</style>
