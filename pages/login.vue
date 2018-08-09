<template>
  <div class="ui container">
    <div class="ui center aligned grid">
      <form class="ui form margin-top" method="post" @submit="">
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

        <button class="ui gray button margin-top" @click="goToHome()">Log in</button>
        <p>You don't have an account? <nuxt-link style="color: #3c9dd3 !important;" to="/signUp" class="ui link">Sign up</nuxt-link></p>
      </form>
    </div>
  </div>
</template>



<script>
  export default {
    methods: {
      goToHome() {
        this.$router.push("/")
      }
    }
  }
</script>


<style scoped>
  *::selection {
    color: #333230 !important;
  }

  label {
    padding-left: 1.6rem !important;
  }

  a{
    color: #333230 !important;
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
