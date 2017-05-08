<template>

  <div id="app">
    <admin-head></admin-head>
    <admin-menu></admin-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import adminHead from '@/components/Head.vue'
import adminMenu from '@/components/Menu.vue'
export default {
  name: 'app',
  components: {
    adminHead,
    adminMenu
  }
}
</script>

<style>

</style>
