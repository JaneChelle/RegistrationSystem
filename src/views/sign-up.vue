<template>
  <div class="sign-up">
    <div class="content">
      <div class="left"></div>
      <div class="font">注册</div>
      <h2 class="h2">等级考试报名 <br>
<span class="tips">Grade examination registration</span>
</h2>
      <div class="right">
          <h2>欢迎!<br>
            <span class="rignt_tips">在下面输入您的详细信息注册</span>
          </h2>
          <form 
            id="app"
            @submit="checkFrom"
            action="https://vuejs.org/"
            method="post"
            novalidate="true"
            class="form">
            <p v-if="errors.length">
              <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li> 
              </ul>
            </p>
            <div class="ipt">电子邮件：<input id="email" name="email" type="email" v-model="email"></div>
            <div class="ipt">手机号：<input id="phone" name="phone" type="text" v-model="phone"></div>
            <div class="ipt">密码：<input id="password" name="password" type="password" v-model="password"></div>
            <div class="ipt">密码确认：<input id="r_password" name="r_password" type="password" v-model="r_password"></div>
            <input type="submit" value="提交" class="submit">
          </form>
      </div>
    </div>
  </div>
</template>

<script>
// import aesjs from 'aes-js';
export default {
  data(){
    return {
      errors:[],
      email: '',
      phone: '',
      password: '',
      r_password: ''
    }
  },
  methods: {
    checkForm: function(){
      this.errors = [];
      if(!this.email){
        this.errors.push('邮件不能为空')
      } else if(!this.validEmail(this.email)){
         this.errors.push('请输入有效的电子邮件')
      }
      if(!this.phone){
        this.errors.push("手机号不能为空")
      } else if(!this.vaildPhone(this.phone)){
         this.errors.push("请输入有效手机号")
      }
      if(!this.password){
        this.errors.push('密码不能为空');
      }
      if(!this.r_password){
        this.errors.push("请再次输入密码")
      }
      if(this.password != this.r_password){
        this.errors.push("两次密码不一致")
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    vaildPhone: function(phone){
      var ph = /^1[3456789]\d{9}$/
      return ph.test(phone);
    }
  }
}
</script>

<style lang="stylus">
.sign-up
  width 100%
  background-image linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)
  height 100vh
  display flex
  justify-content center
  align-items center
  .content
    position relative
    width 60%
    height 500px
    display flex
    justify-content space-between
    align-items center
    background-color #000
    box-shadow 4px 2px 2px #514848
    overflow hidden
    .left
      height 100%
      width 60%
      background-image url('../assets/sign-up1.jpg')
      background-size cover
      background-position center
      opacity 0.7
    .font
      position absolute
      top 10px
      left 10px
      font-size 14px
      font-weight 600 
      color #fff
    .h2
      position absolute
      width 35%
      color #ffffff
      padding 10px
      font-weight 400
      .tips
        font-size 14px
        display inline-block
        margin-top 20px
    .right
      height 100%
      width 40%
      background-color #fff
      display flex
      justify-content center
      align-items center
      flex-direction column
      h2
       color #000
       font-weight 400
       margin-bottom 20px
       width 70%
       .rignt_tips
         font-size 14px
      .form
        width 70%
        .ipt
          border-bottom 1px solid #000
          height 50px
          line-height 50px
          input 
            border none 
            outline none 
            line-height 30px
            background-color rgba(255,255,255,0)
            &:-webkit-autofill 
              transition:background-color 5000s ease-in-out 0s
        .submit
          width 100%
          background-color #A74C8F
          border none
          height 50px
          line-height 50px
          margin-top 30px
          color #fff
          font-size 18px
          letter-spacing 10px    
</style>