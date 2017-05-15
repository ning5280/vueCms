<template>
  <section class="Hui-article-box">
     <nav class="breadcrumb"><i class="Hui-iconfont"></i> <a href="/" class="maincolor">首页</a> 
      <span class="c-999 en">&gt;</span>
      <span class="c-666">{{title}}</span> 
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
      label="标题"
      width="320">
      <template scope="scope">{{ scope.row.title }}</template>
    </el-table-column>
        <el-table-column
      label="作者"
      width="120">
      <template scope="scope">{{ scope.row.author }}</template>
      
    </el-table-column>
      <el-table-column
      prop="mtitle"
      label="所属菜单"
      width="120">
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
    <el-table-column
 
      label="状态"
      show-overflow-tooltip>
       <template scope="scope">
         <el-button v-if="scope.row.status==1" @click="articleStatus(scope.row,0)" type="success" size="small">已显示</el-button>
         <el-button v-if="scope.row.status==0" @click="articleStatus(scope.row,1)" type="danger" size="small">已隐藏</el-button>
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
  <div class="block">
 
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNo"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="count">
    </el-pagination>
  </div>
  <br/>
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
  name: 'ArticleList',
  data () {
    return {
      title: '文章列表',
      msg: 'Welcome to Your Vue.js App',
      total: 0,
      multipleSelection: [],
      menuInfo: {},
      pageNo: 1,
      pageSize: 10
    }
  },
  components: {
    foot,
    addMenu,
    editMenu
  },
  computed: {
    tableData3 () {
      return this.$store.getters.articleList
    },
    count () {
      return this.$store.getters.articleListCount
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
              url: '/api/admin/article/del',
              data: {id: row.id},
              success: () => {
                this.$store.dispatch('changeArticleList', {
                    where: {},
                    pageNo: this.pageNo,
                    pageSize: this.pageSize
                })
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
      articleStatus (row, status) {
        let id = row.id
        publicFunc.ajaxPost({
          url: '/api/admin/article/changestatus',
          data: {id: id, status: status},
          success: res => {
             this.$store.dispatch('changeArticleList', {
                where: {},
                pageNo: this.pageNo,
                pageSize: this.pageSize
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
              url: '/api/admin/article/del',
              data: {id: idList},
              success: () => {
                this.$store.dispatch('changeArticleList', {
                    where: {},
                    pageNo: this.pageNo,
                    pageSize: this.pageSize
                })
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                })
              }
            })
          }
        })
      },
      handleSizeChange (val) {
        this.pageSize = val
        this.$store.dispatch('changeArticleList', {
          where: {},
          pageNo: 1,
          pageSize: this.pageSize
        })
      },
      handleCurrentChange (val) {
        this.pageNo = val
        this.$store.dispatch('changeArticleList', {
            where: {},
            pageNo: this.pageNo,
            pageSize: this.pageSize
          })
        }
    },
  created: function () {
    this.$store.dispatch('changeArticleList', {
      where: {},
      pageNo: 1,
      pageSize: 10
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
