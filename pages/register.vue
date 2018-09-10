<template>
  <div class="ui container margin">
    <div class="ui center aligned grid">
      <form class="ui form" @submit.prevent="handleSubmit">

        <Notification :message="error" v-if="error"></Notification>

        <div class="text-centred">
          <h2 class="ui header margin-bot">Register and join the community ~</h2>
        </div>
        <div class="field margin-top">
          <div class="two fields">
            <div class="field">
              <input type="text" v-model="firstName" name="first-name" placeholder="First Name">
            </div>
            <div class="field">
              <input type="text" v-model="lastName" name="last-name" placeholder="Last Name">
            </div>
          </div>
        </div>

        <div class="field">
          <input type="email" v-model="email" name="email" placeholder="Email">
        </div>

        <!--<div class="field">-->
          <!--<div class="two fields">-->
            <div class="field">
              <input type="password" v-model="password" name="password" placeholder="Password">
            </div>
            <!--<div class="field">-->
              <!--<input type="password" name="confirmed-password" placeholder="Confirm Password">-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->

        <div class="field">
          <div class="ui grid margin-top">
            <div class="eight wide left aligned column">
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0">
                <label>I agree to the
                  <a href="/terms" style="color: #3c9dd3 !important;">Terms</a>
                  and
                  <a href="/conditions" style="color: #3c9dd3 !important;">Conditions</a>
                </label>
              </div>
            </div>
            <div class="eight wide right aligned column">
              <p class="ui link">You already have an <a href="/login" style="color: #3c9dd3 !important;">account?</a></p>
            </div>
          </div>
        </div>

        <div class="text-centred">
          <button class="ui button" type="submit">Sign in</button>
        </div>
        <p class="text-centred">

        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Notification from '../components/Notification.vue'

export default {
  components: {
    Notification
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    handleSubmit() {
      this.$axios.post('register', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      })
        .then(res => console.log(res))
        .catch(e => {
          console.log(e);
          this.error = e.message
        });
    }
  }
}
</script>

<style scoped>
  a{
    color: #333230 !important;
  }

  .margin {
    margin-top: 3rem !important;
  }
</style>
