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
              <label>Stay log in</label>
            </div>
          </div>

          <div class="eight wide right aligned column">
            <nuxt-link to="/recoverPassword" class="ui link">Forgotten Passwork?</nuxt-link>
          </div>
        </div>

        <button class="ui gray button margin-top" @click="goToHome()">Log in</button>
        <p>You don't have an account? <nuxt-link to="/signUp" class="ui link">Sign up</nuxt-link></p>
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

  a{
    color: #333230 !important;
  }

  div {
    text-align: center;
  }

  form {
    margin: 0 1rem 0 1rem;
  }
</style>
