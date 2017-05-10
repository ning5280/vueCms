<template>
      <section class="Hui-article-box">
     <nav class="breadcrumb"><i class="Hui-iconfont"></i> <a href="/" class="maincolor">首页</a> 
      <span class="c-999 en">&gt;</span>
      <span class="c-666">{{title}}</span> 
      <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="Hui-article">
   
    <foot></foot>
  </div>
  </section>
</template>

<script>
import foot from '@/components/foot'

export default {
  name: 'CategoryList',
  data () {
    return {
      title: '栏目列表',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
