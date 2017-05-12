<template>
  <section class="Hui-article-box">
     <nav class="breadcrumb"><i class="Hui-iconfont"></i> <a href="/" class="maincolor">首页</a> 
      <span class="c-999 en">&gt;</span>
      <span class="c-666">{{title}}</span> 
      <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="Hui-article">
    <br>
    <el-button @click="dialogFormVisible = true">添加菜单</el-button>

    <el-dialog title="添加菜单"  :visible.sync="dialogFormVisible" :modal="false" >
     <add-menu @close = 'closeDialog("dialogFormVisible")'></add-menu>
    </el-dialog>
    <el-dialog title="编辑菜单" :visible.sync="dialogFormVisible1" :modal="false" >
     <edit-menu  :form = 'menuInfo' @close = 'closeDialog("dialogFormVisible1")'></edit-menu>
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
      width="220">
      <template scope="scope">{{ scope.row.title_show }}</template>
    </el-table-column>
        <el-table-column
      label="菜单等级"
      width="120">
      <template scope="scope">{{ scope.row.level+1 }}</template>
      
    </el-table-column>
    <el-table-column
      prop="sort"
      label="序号"
      width="120">
    </el-table-column>
    <el-table-column
 
      label="状态"
      show-overflow-tooltip>
       <template scope="scope">{{ scope.row.status==1?'显示':'隐藏' }}</template>
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

    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
<br>
    <foot></foot>
  </div>
  </section>
</template>

<script>
import foot from '@/components/foot'
import addMenu from '@/pages/AddMenu'
import editMenu from '@/pages/editMenu'
import publicFunc from '@/common/publicFunc'
export default {
  name: 'MenuList',
  data () {
    return {
      title: '栏目列表',
      msg: 'Welcome to Your Vue.js App',
      dialogFormVisible: false,
      dialogFormVisible1: false,
      total: 0,
      multipleSelection: [],
      menuInfo: {}
    }
  },
  components: {
    foot,
    addMenu,
    editMenu
  },
  computed: {
    tableData3 () {
      return this.$store.getters.menuList
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
      handleEdit (index, row) {
        console.log(index, row)
        this.menuInfo = this.tableData3[index]
        this.dialogFormVisible1 = true
      },
      handleDelete (index, row) {
        publicFunc.confirm({
          success: () => {
            publicFunc.ajaxPost({
              url: '/api/admin/menu/del',
              data: {id: row.id},
              success: () => {
                this.$store.dispatch('changeMenuList')
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
              }
            })
          }
        })
      },
      closeDialog (dialogName) {
        this[[dialogName]] = false
      }
    },
  created: function () {
    this.$store.dispatch('changeMenuList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
