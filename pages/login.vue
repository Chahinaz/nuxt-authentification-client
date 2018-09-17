<template>
  <div class="ui container">
    <div class="ui center aligned grid">
      <form class="ui form margin-top" method="post" @submit.prevent="login">

        <Notification :message="error" v-if="error"></Notification>
        <h2>Log in to chat, share and comment.</h2>
        <div class="margin-top">
          <input v-model="email" type="email" name="email" placeholder="Email">
        </div>

        <div class="margin-top">
          <input v-model="password" type="password" name="password" placeholder="Password">
        </div>

        <div class=" ui grid margin-top">
          <div class="eight wide left aligned column">
            <div class="ui checked checkbox">
              <input id="rememberMe" type="checkbox" name="rememberMe">
              <label>Remember me</label>
            </div>
          </div>
          <div class="eight wide right aligned column">Forgotten
            <!--<nuxt-link class="ui link" style="color: #3c9dd3 !important;" to="/recoverPassword"> Password?</nuxt-link>-->

          </div>
        </div>

        <button class="ui gray button margin-top" type="submit">Log in</button>
        <p>You don't have an account?
          <nuxt-link style="color: #3c9dd3 !important;" to="/register" class="ui link">Sign up</nuxt-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Notification from "../components/Notification.vue"
import {mapMutations, mapGetters} from "vuex"
import Cookie from "js-cookie"

export default {
  middleware: 'guest',
  components: {
    Notification
  },
  computed: {
    ...mapMutations(['updateAuth']),
    ...mapGetters(['isAuthenticated'])
  },
  data() {
    return {
      email: '',
      password: '',
      rememberMe: false,
      error: null
    }
  },
  methods: {
    async login() {
      await this.$axios.post('login', {
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
  *::selection, a {
    color: #333230 !important;
  }

  label {
    padding-left: 1.6rem !important;
  }

  div {
    text-align: center;
  }

  form {
    margin: 0 1rem 0 1rem;
  }

  .container {
    margin-top: 2rem !important;
  }
</style>
