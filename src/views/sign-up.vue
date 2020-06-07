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
          <!-- <form 
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
          </form> -->
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="电子邮件" prop="email">
                <el-input  v-model="ruleForm.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
// import aesjs from 'aes-js';
 import BaseUrl from '../api/index';
 export default {
    data() {
     var checkPhone = (rule, value, callback) => {
    const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/
    if (!value) {
      return callback(new Error('电话号码不能为空'))
    }
    setTimeout(() => {
      // Number.isInteger是es6验证数字是否为整数的方法,实际输入的数字总是识别成字符串
      // 所以在前面加了一个+实现隐式转换
 
      if (!Number.isInteger(+value)) {
        callback(new Error('请输入数字值'))
      } else {
        if (phoneReg.test(value)) {
          callback()
        } else {
          callback(new Error('电话号码格式不正确'))
        }
      }
    }, 100)
  }
  var checkEmail = (rule, value, callback) => {
    const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    if (!value) {
      return callback(new Error('邮箱不能为空'))
    }
    setTimeout(() => {
      if (mailReg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的邮箱格式'))
      }
    }, 100)
  }

      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          email: '',
          phone: '',
          pass: '',
          checkPass: ''
        },
        rules: {
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          email: [
            { validator: checkEmail, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           alert('submit!');
            let v = this;
            this.$axios({
              method: 'post',
              url: BaseUrl + '/student/register',
              data: {
                'email': v.ruleForm.email,
                'phone': v.ruleForm.phone,
                'password': v.ruleForm.pass
              }
            }).then(function(res){
              if(res.data.code == 1){
                v.$message({
                  message: '注册成功',
                  type: 'success',
                  showClose: true
                })
              } else{
                v.$message({
                  message: res.data.msg,
                  showClose: true
                })
              }
            })
          } else {
            console.log('提交失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
     },
    vaildPhone(phone){
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