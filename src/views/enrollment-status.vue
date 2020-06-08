<template>
  <div class="enroll">
      <div class="head">
        <div class="title">
          <div class="logo">
            <img src="../assets/logo2.png" alt="">
          </div>
          <div class="name">
            <router-link  to="/">
            <h2>等级考试报名系统</h2>
            <span>Grade examination registration</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="main">
          <h2>欢迎登录CET考试报名系统</h2>
          <div class="write">
           <el-form  :model="ruleForm.post" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" v-if="ruleForm.post">
            <el-form-item label="" prop="name">
                <el-input  v-model="ruleForm.post.name"  autocomplete="off" placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label=""  prop="school">
                <el-input v-model="ruleForm.post.school" autocomplete="off" placeholder="请输入学校"></el-input>
            </el-form-item>
            <el-form-item label="" prop="className">
                <el-input type="text" v-model="ruleForm.post.className" autocomplete="off" placeholder="请输入班级"></el-input>
            </el-form-item>
            <el-form-item label="" prop="idCard">
                <el-input type="text" v-model="ruleForm.post.idCard" autocomplete="off" placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="modifyData('ruleForm')">提交</el-button>
                <el-button type="primary"> <router-link to="/" class="fontLK">返回首页</router-link></el-button>
            </el-form-item>
          </el-form>
          <div v-if="ruleForm.error">
            {{error}}
          </div>
            <!-- <div class="btn"><router-link class="aa" to="/enroll">开始报名</router-link></div> -->
          </div>
        </div>
      </div>
      <div class="footer">
          <p>COPYRIGHT：中华人民共和国教育部考试中心 / All RIGHTS RESERVED
<br>京ICP备05031027</p>
      </div>
  </div>
</template>

<script>
 import BaseUrl from '../api/index';
export default {
    data() {
      var checkName = (rule, value, callback) => {
       const nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
      if (!value) {
        return callback(new Error('姓名不能为空'))
      }
      setTimeout(() => {
          if (nameReg.test(value)) {
            callback()
          } else {
            callback(new Error('格式不正确'))
          }
      }, 100)
    }
    var checkIdCard = (rule, value, callback) => {
      const idCardReg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
    if (!value) {
      return callback(new Error('身份证号不能为空'))
    }
    setTimeout(() => {
      if (idCardReg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入正确的身份证格式'))
      }
    }, 100)
  }
  var checkSchool = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('学校不能为空'))
    }else{
      callback()
    }
  }
  var checkClassName = (rule, value, callback) => {
    if (!value) {
      return callback(new Error('班级不能为空'))
    }else{
      callback()
    }
  }
  return {
      ruleForm: {
      name: '',
      school: '',
      className: '',
      idCard: '',
      post: null,
    error: null
    },
    rules: {
      name: [
        { validator: checkName, trigger: 'blur' }
      ],
      idCard: [
        { validator: checkIdCard, trigger: 'blur' }
      ],
      school: [
        { validator: checkSchool, trigger: 'blur' }
      ],
      className: [
        { validator: checkClassName, trigger: 'blur' }
      ]
    }
  }
},
created(){
  //组件创建完之后获取数据，此时data已经被observed 了
  this.fetchData()
},
watch: {
// 如果路由有变化，会再次执行该方法
'$route': 'fetchData'
},
methods: {
  fetchData() {
        var _this = this;
        this.$axios({
          method: 'get',
          url: BaseUrl + '/student/selectSignUp',
          headers: {
            token: window.localStorage["Authorization"]
          }
        }).then(function(res){
          if(res.data.code == 1){
              _this.ruleForm.post = JSON.parse(JSON.stringify(res.data.data))

          } else {
            _this.ruleForm.error = res.data.data.msg
            console.log(_this.error)
          }
        }).catch(function(){
          console.log("错误")
        })
      },
      modifyData(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
          var _this = this;
          this.$axios({
            method: 'post',
            url: BaseUrl + '/student/updateSignUp',
            headers: {
              token: window.localStorage["Authorization"]
            },
            data: {
              'name': this.ruleForm.post.name,
              'school': this.ruleForm.post.school,
              'className': this.ruleForm.post.className,
              'idCard': this.ruleForm.post.idCard
            }
          }).then(function(res){
            if(res.data.code == 1){
              _this.$message({
                message: '修改成功',  
                type: 'success',
                showClose: true
              });
            } else{
            _this.$message({
                message: res.data.msg,
                showClose: true
              })
            }
          }).catch(function(){
            console.log("错误");
          })
          } else {
            console.log('提交失败');
            return false;
          }
        })
}
}
}
</script>

<style lang="stylus">
.enroll
  width 100%
  height 100vh
  background-color #EBEFF2
  .head
    width 100%
    height 150px
    background-image linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)
    .title
      width 60%
      margin 0 auto
      display flex
      justify-content start
      align-items center
      height 150px
      .logo
        width 50px
        img
         width 50px
         height 50px
      .name
        margin-left 10px
        h2
         color #ffffff
         font-weight 400
         font-size 20px
         letter-spacing 2px
         margin 0
        span 
         color #ffffff 
  .content
    width 100%
    margin-top -40px
    display flex
    justify-content center
    align-items center
    .main
      width 60%
      background-color #ffffff 
      border-top 6px solid
      padding 30px
      box-sizing border-box
      box-shadow: 2px 2px 5px #ccc; 
      h2
       color #a74c8f
       border-bottom 1px solid #000
       font-weight 400
       padding 10px
      .write
        width 90%
        box-shadow 2px 2px 5px #736d6d
        padding 5%
        box-sizing border-box
        margin 20px auto
        .fontLK
          color #ffffff
          text-decoration none
  .footer
    width 60%
    color #000
    margin 30px auto
    font-size 12px
    text-align center
    line-height 20px              

</style>