<template>
   
  <div id="app">
    <router-view  v-loading.fullscreen.lock="loadingStatus"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters([
       'loadingStatus'
    ])
  },
  data () {
    return {
    }
  },
  created: function () {
    console.log(this.$store)
    // this.fullscreenLoading = true
  }
}
</script>
<style>

</style>
