<template>

  <el-form ref="form" :model="form" label-width="150px" label-position="right">
  <el-form-item label="用户名">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
 <el-form-item label="密码">
    <el-input v-model="form.password"></el-input>
  </el-form-item>

  <el-form-item label="备注">
    <el-input v-model="form.remark"></el-input>
  </el-form-item>
  <el-form-item label="角色">
    <el-select v-model="form.rid" placeholder="请选择">
      <el-option
        v-for="item in roleList"
        :key="item.id"
        :label="item.name"
        :value="item.id">
      </el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="真实姓名">
    <el-input v-model="form.realname"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="add">立即创建</el-button>
  </el-form-item>
</el-form>
  
</template>

<script>
import publicFunc from '@/common/publicFunc'
import foot from '@/components/foot'
export default {
  name: 'AddAdmin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        username: '',
        password: '',
        realname: '',
        remrak: '',
        rid: ''
      }
    }
  },
  components: {
    foot
  },
  methods: {
    add () {
      publicFunc.ajaxPost({
        url: '/api/admin/admin/add',
        data: this.form,
        success: res => {
          console.log(res)
          if (res.body.code === 1) {
            this.$store.dispatch('changeAdminList')
             this.$emit('close')
          }
        }
      })
    }
  },
  created: function () {
    this.$store.dispatch('changeRoleList')
  },
  computed: {
    roleList () {
      return this.$store.getters.roleList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
