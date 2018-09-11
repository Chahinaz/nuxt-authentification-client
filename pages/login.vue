<template>
  <div class="ui container">
    <div class="ui center aligned grid">
      <Notification :message="error" v-if="error"></Notification>
      <form class="ui form margin-top" method="post" @submit="logIn">
        <h2>Log in to chat, share and comment.</h2>
        <div class="margin-top">
          <input id="mail" type="email" name="mail" placeholder="Email">
        </div>

        <div class="margin-top">
          <input id="password" type="password" name="password" placeholder="Password">
        </div>

        <div class=" ui grid margin-top">
          <div class="eight wide left aligned column">
            <div class="ui checked checkbox">
              <input type="checkbox" name="example">
              <label>Remember me</label>
            </div>
          </div>
          <div class="eight wide right aligned column">Forgotten
            <nuxt-link style="color: #3c9dd3 !important;" to="/recoverPassword" class="ui link"> Password?</nuxt-link>
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

  export default {
    middleware: ['guest'],
    components: {
      Notification
    },
    data() {
      return {
        email: ' ',
        password: ' ',
        error: null
      }
    },
    methods: {
      async logIn() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          });
          this.$router.push('/')
        } catch (e) {
          this.error = e.response.data.message
        }
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
