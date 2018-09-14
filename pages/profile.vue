<template>
  <div class="ui container margin-top">
      <h2>{{ loggedUser.firstName }} {{ loggedUser.lastName }}</h2>
      <p>{{ loggedUser.bio }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    middleware: 'auth',
    computed: {
      ...mapGetters(['loggedUser'])
    }
  }
</script>
