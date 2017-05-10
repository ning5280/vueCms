<template>
   <el-form   >
    <el-form-item label="栏目名称">
      <el-input v-model="form.title" placeholder="栏目名称"></el-input>
    </el-form-item>
    <el-form-item label="所属栏目">
      <el-select v-model="form.pid" placeholder="所属栏目">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="排序">
      <el-input v-model="form.sort" placeholder="排序"></el-input>
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="test">立即创建</el-button>
    <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'AddCategory',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        title: '',
        pid: '',
        sort: 1
      }
    }
  },
  components: {
  },
  methods: {
    test () {
      console.log(11)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
