<template>
  <div class="ui negative message">
    <i class="close icon cross"></i>
    <p class="margin text-centred">{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Notification',
    props: ['message']
  }
</script>

<style scoped>
  .margin{
    margin-bottom: 0.75em !important;
  }

  .message{
    padding-top: 0.5rem !important;
    padding-bottom: 0.5rem !important;
  }

  .cross {
    top: 0 !important;
  }
</style>
