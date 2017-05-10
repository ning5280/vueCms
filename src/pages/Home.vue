<template>
    <div>
        <admin-head></admin-head>
        <admin-menu></admin-menu>
        <div class="dislpayArrow hidden-xs"><a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a></div>
        <router-view></router-view>
    </div>
</template>

<script>
import adminHead from '@/components/Head.vue'
import adminMenu from '@/components/Menu.vue'
import adminWelcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    adminHead,
    adminMenu,
    adminWelcome
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
