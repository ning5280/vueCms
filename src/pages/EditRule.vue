<template>
   <el-form   label-width="150px">
    <el-form-item label="规则名称">
      <el-input v-model="form.title" placeholder="规则名称"></el-input>
    </el-form-item>
       <el-form-item label="规则定义">
      <el-input v-model="form.name" placeholder="规则定义"></el-input>
    </el-form-item>
    <el-form-item label="所属规则">
      <el-select v-model="form.pid" placeholder="所属规则" no-data-text="请选择">
        <el-option value="0" label="顶级模块">顶级模块</el-option>

        <el-option v-for="data in ruleList" :key="data.id" :value="data.id" :label="data.title_show" v-html="data.title_show"></el-option>
      </el-select>
    </el-form-item>
     <el-form-item label="类别">
       <el-radio-group v-model="form.type">
        <el-radio :label="1">模块</el-radio>
        <el-radio :label="2">控制器</el-radio>
        <el-radio :label="3">方法</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="排序">
      <el-input v-model="form.sort" placeholder="排序"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="add">提交</el-button>

    </el-form-item>
  </el-form>
</template>

<script>
import publicFunc from '@/common/publicFunc'
export default {
  name: 'EditMenu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  },
  methods: {
    add () {
      publicFunc.ajaxPost({
        url: '/api/admin/rule/edit',
        data: this.form,
        success: res => {
           this.$store.dispatch('changeRuleList')
           this.$emit('close')
        }
      })
    }
  },
  created: function () {
    // this.$http.post('/api/admin/menu/tree').then(res => {
    //   if (res.data.code === 1) {
    //     this.menuList = res.data.data
    //   } else {
    //     this.$message({
    //       showClose: true,
    //       message: '获取菜单列表失败',
    //       type: 'error'
    //     })
    //   }
    // })
  },
  computed: {
    ruleList () {
      return this.$store.getters.ruleList
    }
  },
  props: {
     form: {
      type: Object,
      required: true,
      default: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
