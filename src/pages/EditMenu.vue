<template>
   <el-form   label-width="150px">
    <el-form-item label="菜单名称">
      <el-input v-model="form.title" placeholder="菜单名称"></el-input>
    </el-form-item>
    <el-form-item label="所属菜单">
      <el-select v-model="form.pid" placeholder="所属菜单" no-data-text="请选择">
        <el-option value="0" label="顶级菜单">顶级菜单</el-option>

        <el-option v-for="data in menuList" :key="data.id" :value="data.id" :label="data.title_show" v-html="data.title_show"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="排序">
      <el-input v-model="form.sort" placeholder="排序"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="edit">提交</el-button>

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
    edit () {
      publicFunc.ajaxPost({
        url: process.env.API_ROOT + 'admin/menu/edit',
        data: this.form,
        success: res => {
           this.$store.dispatch('changeMenuList')
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
    menuList () {
      return this.$store.getters.menuList
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
