<template>
  <div class="ui container margin-top">
    <div class="ui items"> <div class="ui item">

      <div class="ui medium image margin-bot" v-if="user.profile.image === ''">
        <img src="../utility/image/defaultProfilePicture.png">
      </div>
      <div class="ui medium image margin-bot" v-else> {{user.profile.image}} </div>

      <div class="content text-left margin-top">
        <h2 class="ui blue header margin-top">
          {{ user.profile.firstName }} {{ user.profile.lastName }}
        </h2>
        <div class="meta">
          <h5 class="ui header">Description:</h5>
        </div>
        <div class="description margin-top">
          <p>{{ user.profile.bio }}</p>
        </div>

        <div class="jump text-right">
          <a class="ui blue floated button" > Edit Profile </a>
          <a class="ui red basic floated button"> Delete </a>
        </div>
      </div>

    </div> </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    middleware: 'auth',
    computed : {
      user() {
        return this.$store.getters.getLoggedUser
      }
    },
    methods: {
      async save() {
        await this.$axios.post('update', {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe
      })
        .then(res => {
          Cookie.set('token', res.data.token, { expires: this.rememberMe ? 365 : null });
          this.$store.commit('updateAuth', !(this.isAuthenticated));
          this.$store.commit('updateUser', res.data.user);
          this.$router.push('/');
        })
        .catch(e => {
          this.error = e.response.data.message
        })
      }
    }
  }
</script>

<style scoped>
</style>
