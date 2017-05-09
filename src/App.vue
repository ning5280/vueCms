<template>
   
  <div id="app">
    <router-view  v-loading.fullscreen.lock="fullscreenLoading"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      fullscreenLoading: false
    }
  },
  created: function () {
    // this.fullscreenLoading = true
  }
}
</script>
<style>

</style>
