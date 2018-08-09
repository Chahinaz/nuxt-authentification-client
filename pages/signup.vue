<template>
  <div class="ui container margin">
    <div class="ui center aligned grid">
      <form class="ui form" method="post" @submit.prevent="register">
        <div class="text-centred">
          <h2 class="ui header margin-bot">Register and join the community ~</h2>
        </div>
        <div class="field margin-top">
          <div class="two fields">
            <div class="field">
              <input type="text" name="first-name" placeholder="First Name">
            </div>
            <div class="field">
              <input type="text" name="last-name" placeholder="Last Name">
            </div>
          </div>
        </div>

        <div class="field">
          <input type="text" name="username" placeholder="Username">
        </div>

        <div class="field">
          <input type="email" name="email" placeholder="Email">
        </div>

        <!--<div class="field">-->
          <!--<div class="two fields">-->
            <div class="field">
              <input type="password" name="password" placeholder="Password">
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

<style scoped>
  a{
    color: #333230 !important;
  }

  .margin {
    margin-top: 3rem !important;
  }
</style>
