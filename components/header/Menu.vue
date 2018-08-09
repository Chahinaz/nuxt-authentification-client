<template>
  <div class="ui inverted menu">
    <div class="ui simple dropdown item">
      My account
      <i class="dropdown icon"></i>
      <div class="ui inverted menu">
        <a class="header item" href="/login"  v-if="disconnected">Login</a>
        <a class="header item" href="/logout" v-if="!disconnected">Logout</a>
      </div>
    </div>
    <div class="right menu">
      <nuxt-link class="header item" to="/">Home</nuxt-link>
      <nuxt-link class="header item" to="/blog">Blog</nuxt-link>
      <nuxt-link class="header item" to="/cv">Resume</nuxt-link>
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

<style scoped>
  a, .item {
    color: #FFFFFF !important;
  }
</style>
