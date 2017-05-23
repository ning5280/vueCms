<template>
  <section class="Hui-article-box">
     <nav class="breadcrumb"><i class="Hui-iconfont"></i> <a href="/" class="maincolor">首页</a> 
      <span class="c-999 en">&gt;</span>
      <span class="c-666">规则列表</span> 
      <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="Hui-article">
    <br>
    <el-button @click="dialogFormVisible = true">添加规则</el-button>

    <el-dialog title="添加菜单"  :visible.sync="dialogFormVisible" :modal="false" >
     <add-rule @close = 'closeDialog("dialogFormVisible")'></add-rule>
    </el-dialog>
    <el-dialog title="编辑菜单" :visible.sync="dialogFormVisible1" :modal="false" >
     <edit-rule  :form = 'ruleInfo' @close = 'closeDialog("dialogFormVisible1")'></edit-rule>
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
      width="420">
      <template scope="scope">{{ scope.row.title_show }}</template>
    </el-table-column>
     <el-table-column
      prop="name"
      label="定义"
      width="120">
    </el-table-column>

        <el-table-column
      label="菜单等级"
      width="120">
      <template scope="scope">{{ scope.row.type==1?"模块":scope.row.type==2?"控制器":"方法" }}</template>
      
    </el-table-column>
      <el-table-column
      label="排序"
      width="100">
      <template scope="scope">{{ scope.row.sort }}</template>
    </el-table-column>
    <el-table-column
 
      label="状态"
      show-overflow-tooltip>
       <template scope="scope">
         <el-button v-if="scope.row.status==1" @click="menuStatus(scope.row,0)" type="success" size="small">已显示</el-button>
         <el-button v-if="scope.row.status==0" @click="menuStatus(scope.row,1)" type="danger" size="small">已隐藏</el-button>
       </template>
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
import addRule from '@/pages/AddRule'
import editRule from '@/pages/editRule'
import publicFunc from '@/common/publicFunc'
export default {
  name: 'RuleList',
  data () {
    return {
      title: '规则列表',
      msg: 'Welcome to Your Vue.js App',
      dialogFormVisible: false,
      dialogFormVisible1: false,
      total: 0,
      multipleSelection: [],
      ruleInfo: {}
    }
  },
  components: {
    foot,
    addRule,
    editRule
  },
  computed: {
    tableData3 () {
      return this.$store.getters.ruleList
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
        this.ruleInfo = this.tableData3[index]
        this.dialogFormVisible1 = true
      },
      handleDelete (index, row) {
        publicFunc.confirm({
          success: () => {
            publicFunc.ajaxPost({
              url: process.env.API_ROOT + 'admin/rule/del',
              data: {id: row.id},
              success: () => {
                this.$store.dispatch('changeRuleList')
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
      },
      menuStatus (row, status) {
        let id = row.id
        publicFunc.ajaxPost({
          url: process.env.API_ROOT + 'admin/rule/changestatus',
          data: {id: id, status: status},
          success: res => {
             this.$store.dispatch('changeRuleList')
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
              url: process.env.API_ROOT + 'admin/rule/del',
              data: {id: idList},
              success: () => {
                this.$store.dispatch('changeRuleList')
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
    this.$store.dispatch('changeRuleList')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
