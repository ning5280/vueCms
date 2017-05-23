<template>
  <section class="Hui-article-box">
     <nav class="breadcrumb"><i class="Hui-iconfont"></i> <a href="/" class="maincolor">首页</a> 
      <span class="c-999 en">&gt;</span>
      <span class="c-666">添加角色</span> 
      <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="Hui-article">
    <br>

    <el-form ref="form" :model="form" label-width="150px" label-position="right">
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="备注">
    <el-input v-model="form.remark"></el-input>
  </el-form-item>
  <el-form-item label="规则">
    <el-tree
      :data="ruleTree"
      show-checkbox
      node-key="id"
 
      :default-expand-all="true"
      empty-text="无节点"
      ref="tree"
      :props="defaultProps">
    </el-tree>  
  </el-form-item>
    <el-form-item label="排序">
    <el-input v-model="form.sort"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="add">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
    <foot></foot>
  </div>
  </section>

</template>

<script>
import publicFunc from '@/common/publicFunc'
import foot from '@/components/foot'
export default {
  name: 'AddRole',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        name: '',
        rules: '',
        sort: '1',
        remrak: ''
      },
      ruleTree: [],
        defaultProps: {
          children: 'child',
          label: 'title'
        }
    }
  },
  components: {
    foot
  },
  methods: {
    add () {
      let treeData = this.$refs.tree.getCheckedNodes()
      let treeList = treeData.map(function (item) {
        return item.id
      })
      let treeStr = treeList.join(',')
      this.form.rules = treeStr
      publicFunc.ajaxPost({
        url: process.env.API_ROOT + 'admin/role/add',
        data: this.form,
        success: res => {
          console.log(res)
          if (res.body.code === 1) {
            this.$router.push({ name: 'rolelist' })
          }
        }
      })
    }
  },
  created: function () {
   publicFunc.ajaxPost({
      url: process.env.API_ROOT + 'admin/rule/leveltree',
      data: {},
      success: res => {
        console.log(res)
        if (res.body.code === 1) {
          this.ruleTree = res.body.data
        }
      }
    })
  },
  computed: {
    ruleList () {
      return this.$store.getters.ruleList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
