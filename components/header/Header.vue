<template>
  <div class="container demo">
    <div class="content">
      <div id="large-header" class="large-header">
        <canvas id="demo-canvas" style="width: 100%"></canvas>
        <h1 class="main-title"><span class="thin">Apprentice</span> Web developper</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    if (process.browser) {
      require('gsap/TweenLite')
      require('gsap/EasePack')
      require('static/external/demo.js')
    }
  }
}
</script>

<style>
  .large-header {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background: #111 no-repeat center center;
    z-index: 1;
  }

  .demo .large-header {
    width: 100%;
    height: 20rem !important;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg");
  }

  .main-title {
    position: absolute;
    padding: 0;
    margin: 0;
    color: #FFFFFF;
    text-align: center;
    top: 50%;
    left: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
  }

  .demo .main-title {
    text-transform: uppercase;
    font-size: 3.2rem;
    letter-spacing: 0.1em;
  }

  .main-title .thin {
    font-weight: 200;
  }

  @media only screen and (max-width: 768px) {
    .demo .main-title {
      font-size: 3em;
    }
  }
</style>
