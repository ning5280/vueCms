<template>
  <section class="Hui-article-box">
     <nav class="breadcrumb"><i class="Hui-iconfont"></i> <a href="/" class="maincolor">首页</a> 
      <span class="c-999 en">&gt;</span>
      <span class="c-666">管理员列表</span> 
      <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="Hui-article">
    <br>
        <el-button @click="dialogFormVisible = true">添加管理员</el-button>

    <el-dialog title="添加管理员"  :visible.sync="dialogFormVisible" :modal="false" >
     <add-admin @close = 'closeDialog("dialogFormVisible")'></add-admin>
    </el-dialog>

   <el-dialog title="编辑管理员" :visible.sync="dialogFormVisible1" :modal="false" >
     <edit-admin  :form = 'adminInfo' @close = 'closeDialog("dialogFormVisible1")'></edit-admin>
    </el-dialog>

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
      prop="realname"
      label="真实姓名"
      width="120">
    </el-table-column>
    <el-table-column
      width="100"
      label="状态"
      show-overflow-tooltip>
       <template scope="scope" >
         <el-button v-if="scope.row.status==1" @click="changeStatus(scope.row,0)" type="success" size="small">正常</el-button>
         <el-button v-if="scope.row.status==0" @click="changeStatus(scope.row,1)" type="danger" size="small">暂停使用</el-button>
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
import addAdmin from '@/pages/AddAdmin'
import editAdmin from '@/pages/EditAdmin'

export default {
  name: 'AdminList',
  data () {
    return {
      title: '管理员列表',
      msg: 'Welcome to Your Vue.js App',
      total: 0,
      multipleSelection: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      adminInfo: {}
    }
  },
  components: {
    foot,
    addAdmin,
    editAdmin
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
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      closeDialog (dialogName) {
        this[[dialogName]] = false
      },
      handleEdit (index, row) {
        this.adminInfo = this.tableData3[index]
        this.dialogFormVisible1 = true
      },
      changeStatus (row, status) {
        let id = row.id
        publicFunc.ajaxPost({
          url: '/api/admin/admin/changestatus',
          data: {id: id, status: status},
          success: res => {
             this.$store.dispatch('changeAdminList')
          }
        })
      },
      handleDelete (index, row) {
        publicFunc.confirm({
          success: () => {
            publicFunc.ajaxPost({
              url: '/api/admin/admin/del',
              data: {id: row.id},
              success: () => {
                this.$store.dispatch('changeAdminList')
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
              url: '/api/admin/admin/del',
              data: {id: idList},
              success: () => {
                this.$store.dispatch('changeAdminList')
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
