<template>
  <div class="sign-in">
    <div class="content">
      <div class="left"></div>
      <div class="font">登录</div>
      <h2 class="h2">等级考试报名 <br>
<span class="tips">Grade examination registration</span>
</h2>
      <div class="right">
          <h2>欢迎!<br>
            <span class="rignt_tips">在下面输入您的详细信息登录</span>
          </h2>
          <form 
           class="form">
            <div class="ipt">手机号：<input type="text" id="phone" name="phone" v-model="loginForm.phone" autocomplete="off"></div>
            <div class="ipt">密码：<input type="password" id="password" name="password" v-model="loginForm.password" autocomplete="off" required></div>
            <router-link to="/sign-up" class="forget">没有账号？去注册</router-link>
            <el-button type="button" value="登录" class="submit" @click="submitForm">登录</el-button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import BaseUrl from '../api/index';
import {mapMutations} from 'vuex';
export default {
  name: 'sign-in',
  data(){
    return{
       loginForm:{
          phone: '',
          password: '',
      },
      errors: [],
      userToken: ''
    } 
  },
  methods: {
    ...mapMutations(['changeLogin']),
    submitForm(){
      let v = this;
      this.$axios({
        method: 'POST',
        url: BaseUrl + '/student/login',
        data:{
          'phone': v.loginForm.phone,
          'password': v.loginForm.password
        }
      }).then(function(res){
        // console.log(res.data);
        if(res.data.code == 1){
          v.userToken = res.data.data;
          v.changeLogin({Authorization: v.userToken});
          v.$router.push('/');
          v.$store.commit('LoginStatus', true);
          v.$message({
            message: '登录成功',
            type: 'success',
            showClose: true
          })
        } else {
          v.$message({
            message: res.data.msg,
            showClose: true
          })
        }
      }).catch(function(err){
         v.$message({
            message:err,
            showClose: true
          })
      })
    }
  }
}
</script>

<style lang="stylus">
.sign-in
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
      height 500px
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
        .forget
          color #000
          text-decoration none
          font-size 12px  
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
          margin-top 30px
          color #fff
          font-size 18px
          letter-spacing 10px    
</style>