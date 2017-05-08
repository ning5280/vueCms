<template>

  <div id="app">
    <admin-head></admin-head>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import adminHead from '@/components/Head.vue'
export default {
  name: 'app',
  components: {
    adminHead
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
