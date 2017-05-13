<template>
  <section class="Hui-article-box">
     <nav class="breadcrumb"><i class="Hui-iconfont"></i> <a href="/" class="maincolor">首页</a> 
      <span class="c-999 en">&gt;</span>
      <span class="c-666">{{title}}</span> 
      <a class="btn btn-success radius r" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>
    <div class="Hui-article">
    <br>

    <el-form ref="form" :model="form" label-width="80px" :label-position="top">
  <el-form-item label="标题">
    <el-input v-model="form.title"></el-input>
  </el-form-item>
  <el-form-item label="活动区域">
      <el-select v-model="form.mid" placeholder="所属菜单" no-data-text="请选择">
        <el-option value="0" label="顶级菜单">顶级菜单</el-option>

        <el-option v-for="data in menuList" :key="data.id" :value="data.id" :label="data.title_show" v-html="data.title_show"></el-option>
      </el-select>
  </el-form-item>
  <el-form-item label="关键字">
    <el-input v-model="form.keyword"></el-input>
  </el-form-item>
    <el-form-item label="作者">
    <el-input v-model="form.author"></el-input>
  </el-form-item>
  <el-form-item label="缩略图">
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="form.img" :src="form.img" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
  <el-form-item label="是否显示">
    <el-switch on-text="" off-text="" v-model="form.status"></el-switch>
  </el-form-item>
  <el-form-item label="是否置顶">
    <el-switch on-text="" off-text="" ></el-switch>
  </el-form-item>
  <el-form-item label="活动形式">
    <quill-editor ref="myTextEditor"
                v-model="form.content"
                :config="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
  </quill-editor>
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
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'AddArticle',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        title: '',
        author: '',
        content: '',
        keyword: '',
        mid: '',
        status: '1'
      },
      editorOption: {
      }
    }
  },
  components: {
    foot,
    quillEditor
  },
  methods: {
    add () {
      publicFunc.ajaxPost({
        url: '/api/admin/menu/add',
        data: this.form,
        success: res => {
           this.$store.dispatch('changeMenuList')
           this.$emit('close')
        }
      })
    },
    handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg'
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M
    },
    onEditorBlur (editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus (editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady (editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange ({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html
    }
  },
  created: function () {
   this.$store.dispatch('changeMenuList')
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    },
    editor () {
      return this.$refs.myTextEditor.quillEditor
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  form{
    width:800px;
  }
    .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px!important;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
