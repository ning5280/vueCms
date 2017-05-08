<template>
    <div>
      <input type="hidden" id="TenantId" name="TenantId" value="" />
      <div class="header"></div>
      <div class="loginWraper">
        <div id="loginform" class="loginBox">
          <form class="form form-horizontal" action="index.html" method="post">
            <div class="row cl">
              <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60d;</i></label>
              <div class="formControls col-xs-8">
                <input id="" name="" type="text" placeholder="账户" class="input-text size-L">
              </div>
            </div>
            <div class="row cl">
              <label class="form-label col-xs-3"><i class="Hui-iconfont">&#xe60e;</i></label>
              <div class="formControls col-xs-8">
                <input id="" name="" type="password" placeholder="密码" class="input-text size-L">
              </div>
            </div>
            <div class="row cl">
              <div class="formControls col-xs-8 col-xs-offset-3">
                <input class="input-text size-L" type="text" placeholder="验证码" onblur="if(this.value==''){this.value='验证码:'}" onclick="if(this.value=='验证码:'){this.value='';}" value="验证码:" style="width:150px;">
                <img src="images/VerifyCode.aspx.png">
                <a id="kanbuq" href="javascript:;">看不清，换一张</a>
              </div>
            </div>
            <div class="row cl">
              <div class="formControls col-xs-8 col-xs-offset-3">
                <label for="online">
                  <input type="checkbox" name="online" id="online" value="">
                  使我保持登录状态</label>
              </div>
            </div>
            <div class="row cl">
              <div class="formControls col-xs-8 col-xs-offset-3">
                <input name="" type="submit" class="btn btn-success radius size-L" value='登录'>
                <input name="" type="reset" class="btn btn-default radius size-L" value="取消">
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="footer">Copyright 你的公司名称 by H-ui.admin.page.v3.0</div>
    </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body{ height:100%}
body{font-size:14px}
.header,.footer{ position:absolute; left:0; right:0; width:100%; z-index:99}
.header{top:0; height:60px; background:#426374 url(require('../images/logo.png')) no-repeat 0 center}
.loginWraper{ position:absolute;width:100%; left:0; top:0; bottom:0; right:0; z-index:1; background:#3283AC url(require('../images/admin-login-bg.jpg')) no-repeat center}
.loginBox{ position:absolute; width:617px; height:330px; background:url(require('../images/admin-loginform-bg.png')) no-repeat; left:50%; top:50%; margin-left:-309px; margin-top:-184px; padding-top:38px}
@media (max-width:617px) {
	.loginbox{ width:100%; position:static; margin-top:0; margin-left:0;}
}
.loginBox .row{margin-top:20px;}
.loginBox .row .form-label .Hui-iconfont{ font-size:24px}
.loginBox .input-text{ width:360px}
@media (max-width:617px) {
	.loginBox .input-text{ width:80%}
}
.yzm a{ color:#426374; font-size:12px}
#span_msg{ font-size:14px; color:Red; line-height:40px; height:40px; margin-left:10px; width:160px;; float:left}
.hd_msg{font-size:12px; color:#fff; height:30px; z-index:100;position: absolute; padding-left:50px; padding-top:5px}
.hd_msg a{ color:#fff}
.hd_msg a:hover{ color:#fff; text-decoration:underline}
.footer{ height:46px; line-height:46px; bottom:0; text-align:center; color:#fff; font-size:12px; background-color:#426374}
#ie6-warning{background:#fff url(require('/jscss/demoimg/201006/warning.gif')) no-repeat 3px center;position:absolute;top:0;left:0;font-size:12px;color:#333;width:97%;padding: 2px 15px 2px 23px;text-align:left}
#ie6-warning a {text-decoration:none}
</style>
