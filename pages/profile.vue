<template>
  <div class="ui container margin-top">
      <!--<p>{{user.image}}</p>-->
      <label class="ui blue label">{{user.email}}</label>
      <strong>{{ user.firstName }} {{ user.lastName }}</strong>
      <!--<p> {{ loggedUser.bio }} </p>-->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    middleware: 'auth',
    computed : {
      user() {
        console.log(this.$store);
        return this.$store.getters.getLoggedUser
      }
    }
  }
</script>
