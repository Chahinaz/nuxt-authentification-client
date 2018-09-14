<template>
  <div class="ui container margin-top">
<<<<<<< HEAD
      <h2>{{ loggedUser.firstName }} {{ loggedUser.lastName }}</h2>
      <p>{{ loggedUser.bio }}</p>
=======
      <a>{{loggedUser.image}}</a>
      <strong>{{ loggedUser.firstName }} {{ loggedUser.lastName }}</strong>
      <p> {{ loggedUser.bio }} </p>
>>>>>>> caf94e09b7afa25eb224df92f2447710b58bfb90
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
