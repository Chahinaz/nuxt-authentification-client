<template>
  <div class="ui container margin-top">
      <a>{{loggedUser.image}}</a>
      <strong>{{ loggedUser.firstName }} {{ loggedUser.lastName }}</strong>
      <p> {{ loggedUser.bio }} </p>
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
