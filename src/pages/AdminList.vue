<template>
  <section class="Hui-article-box">
     <nav class="breadcrumb"><i class="Hui-iconfont"></i> <a href="/" class="maincolor">首页</a> 
      <span class="c-999 en">&gt;</span>
      <span class="c-666">管理员列表</span> 
      <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="Hui-article">
    <br>
    <el-table
    ref="multipleTable"
    :data="tableData3"
    border
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="名称"
      width="150">
      <template scope="scope">{{ scope.row.username }}</template>
    </el-table-column>
        <el-table-column
      label="备注"
      width="300">
      <template scope="scope">{{ scope.row.remark }}</template>
    </el-table-column>
     <el-table-column
      label="角色"
      width="150">
      <template scope="scope">{{ scope.row.id == 1?"超级管理员":scope.row.rname }}</template>
    </el-table-column>

    <el-table-column
 
      label="状态"
      show-overflow-tooltip>
       <template scope="scope" v-if="scope.row.id!==1">
         <el-button v-if="scope.row.status==1" @click="menuStatus(scope.row,0)" type="success" size="small">已显示</el-button>
         <el-button v-if="scope.row.status==0" @click="menuStatus(scope.row,1)" type="danger" size="small">已隐藏</el-button>
       </template>
    </el-table-column>
    <el-table-column
      prop="create_time"
      label="创建时间"
      width="180">
    </el-table-column>
       <el-table-column
      prop="update_time"
      label="更新时间"
      width="180">
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection('all')">全选</el-button>
    <el-button @click="delAll(multipleSelection)">批量删除</el-button>
  </div>
<br>
    <foot></foot>
  </div>
  </section>
</template>

<script>
import foot from '@/components/foot'
import publicFunc from '@/common/publicFunc'
export default {
  name: 'AdminList',
  data () {
    return {
      title: '管理员列表',
      msg: 'Welcome to Your Vue.js App',
      total: 0,
      multipleSelection: []
    }
  },
  components: {
    foot
  },
  computed: {
    tableData3 () {
      return this.$store.getters.adminList
    }
  },
   methods: {
      toggleSelection (rows) {
        if (rows === 'all') {
          this.tableData3.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleEdit (index, row) {
        let id = row.id
        this.$router.push({name: 'editrole', params: {id: id}})
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleDelete (index, row) {
        publicFunc.confirm({
          success: () => {
            publicFunc.ajaxPost({
              url: '/api/admin/role/del',
              data: {id: row.id},
              success: () => {
                this.$store.dispatch('changeRoleList')
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
              }
            })
          }
        })
      },
      delAll (list) {
        var idList = []
       idList = list.map(function (item) {
          return item.id
        })
         publicFunc.confirm({
          success: () => {
            publicFunc.ajaxPost({
              url: '/api/admin/role/del',
              data: {id: idList},
              success: () => {
                this.$store.dispatch('changeRoleList')
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
              }
            })
          }
        })
      }
    },
  created: function () {
    this.$store.dispatch('changeAdminList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
