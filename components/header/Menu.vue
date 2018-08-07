<template>
  <div class="ui inverted menu">
    <div class="right menu">
      <nuxt-link class="header item" to="/">Home</nuxt-link>
      <nuxt-link class="header item" to="/cv">Resume</nuxt-link>
      <nuxt-link class="header item" to="/blog">Blog</nuxt-link>
      <nuxt-link class="header item" to="/about">About</nuxt-link>

      <nuxt-link class="header item" to="/" v-if="disconnected">Login</nuxt-link>
      <nuxt-link class="header item" to="/" v-if="!disconnected">Logout</nuxt-link>
  </div>
  </div>
</template>

<script>
  export default {
    props: {
      disconnected: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style>
  .inverted {
    border-radius: 0 !important;
    background-color: #424856 !important;
    margin: 0 !important;
  }

</style>
