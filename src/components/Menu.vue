<template>
  <aside class="Hui-aside">
    
    <div class="menu_dropdown bk_2">

      <dl id="menu-picture">
        <dt><i class="Hui-iconfont">&#xe613;</i> 菜单管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li>
                <router-link :to="{name: 'menulist'}">菜单列表</router-link>
            </li>
      </ul>
    </dd>
  </dl>
    <dl id="menu-picture">
        <dt><i class="Hui-iconfont">&#xe613;</i> 文章管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li>
                <router-link :to="{name: 'articlelist'}">文章列表</router-link>
                <router-link :to="{name: 'addarticle'}">添加文章</router-link>
                
            </li>
      </ul>
    </dd>
  </dl>
      <dl id="menu-product">
        <dt><i class="Hui-iconfont">&#xe620;</i> 模块管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li>
               <router-link :to="{name: 'rulelist'}">规则列表</router-link>
            </li>
      
      </ul>
    </dd>
  </dl>
      <dl id="menu-comments">
        <dt><i class="Hui-iconfont">&#xe622;</i> 评论管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li><a href="http://h-ui.duoshuo.com/admin/" title="评论列表">评论列表</a></li>
            <li><a href="feedback-list.html" title="意见反馈">意见反馈</a></li>
      </ul>
    </dd>
  </dl>

      <dl id="menu-admin">
        <dt><i class="Hui-iconfont">&#xe62d;</i> 管理员管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li>
               <router-link :to="{name: 'rolelist'}">角色列表</router-link>
            </li>
            <li>
               <router-link :to="{name: 'addrole'}">添加角色</router-link>
            </li>
            <li><a href="admin-permission.html" title="权限管理">权限管理</a></li>
            <li>
                <router-link :to="{name: 'adminlist'}">管理员列表</router-link>
            </li>
      </ul>
    </dd>
  </dl>

      <dl id="menu-system">
        <dt><i class="Hui-iconfont">&#xe62e;</i> 系统管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
        <dd>
          <ul>
            <li><a href="system-base.html" title="系统设置">系统设置</a></li>
      </ul>
    </dd>
  </dl>
  </div>
  </aside>
</template>

<script>
export default {
  name: 'menu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
