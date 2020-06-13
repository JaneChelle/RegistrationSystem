<template>
  <div class="home">
    <div class="bg_img">
      <img src="../assets/bg.jpg" alt="">
      <h2>等级考试报名系统</h2>
      <div class="time"> {{ date | dateFormat }} 
        <el-link v-show="isLogin" @click="exit" :underline="false" class="font">退出登录</el-link>
        </div>
    </div>
    <div class="nav">
      <div class="imgm">
        <img src="../assets/process.png" alt="">
      </div>
    </div>
    <div class="main">
        <div class="left">
          <ul>
            <li>
              <i class="iconfont iconzhuce"></i>
              <router-link to="/sign-up"> 注册新用户</router-link></li> 
            <li>
              <i class="iconfont iconbaoming1"></i>
              <router-link to="/enroll"> 进入报名</router-link></li>
            <li>
              <i class="iconfont iconchakan-copy-copy"></i>
              <span @click="this.fetchData"> 查看报名信息</span>
              </li>  
            <li>
              <i class="iconfont icongenshuixueicon_huabanfuben"></i>
              <span @click="this.download">下载准考证</span>
              <a href="" class="target" ref="target"></a>
            </li>
            <li>
              <i class="iconfont iconchaxun2"></i>
              <span @click="this.score">查看成绩</span>
            </li>
          </ul>
        </div>
        <div class="right">
          <div class="title"><i class="iconfont icongonggao"></i>等级考试最新动态</div>
          <div class="iframe">
              <div class="content" v-for="(value, key,index) in notice" :key="index" >
                 <div v-html="value.content"></div>
                <hr class="hr_line">
              </div>
          </div>
        </div>
    </div>
    <div class="footer">
        <p>
          <span class="footer_title">COPYRIGHT 中华人民共和国教育部考试中心 All RIGHTS RESERVED</span>
                    京ICP备05031027号 (Powered by :72100729)
          <br>
          <font color="red">建议浏览器：火狐浏览器、谷歌浏览器、IE9+、360浏览器（选择极速模式）</font>
        </p>
    </div>
  </div>
</template>

<script>
import BaseUrl from '../api/index';
export default {
  name: 'Home',
  data(){
    return {
      date: new Date(),
      isLogin: localStorage.getItem('isLogin'),
      notice: null,
      post: '',
    }
  },
  created(){
    this.findNotice()
  },
  filters: {
    dateFormat: function(){
      var weekdays = new Array(7);
      weekdays[0] = "星期日"
      weekdays[1] = "星期一"
      weekdays[2] = "星期二"
      weekdays[3] = "星期三"
      weekdays[4] = "星期四"
      weekdays[5] = "星期五"
      weekdays[6] = "星期六"
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1 < 10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1);
      var day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
      var weekday = weekdays[date.getDay()];
      var hours = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
      var minutes = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds();
      return year+"年"+month+"月"+day+"日"+" "+hours+":"+minutes+":"+seconds+" "+weekday+" ";
    }
  },
  components: {
    // EnrollmentStatus
  },
  mounted:function() {
     var _this=this; //声明一个变量指向Vue实例this，保证作用域一致
     this.timer=setInterval(function() {
         _this.date=new Date(); //修改数据date
     } , 1000)
 },
  methods: {
    //退出登录
    exit(){
      localStorage.clear(); 
      this.$message({
            message: '退出成功',
            type: 'success',
            showClose: true
          })
          location.reload(true);
    },
    //获取公告
    findNotice(){
      this.$axios({
        method:'get',
        url: BaseUrl + '/notice/findAll',
        headers: {
          token: window.localStorage['Authorization']
        }
      }).then((res) => {
        if(res.data.code == 1){
          this.notice = res.data.data;
        } else{
          console.log(res.data.msg); 
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    //获取报名信息
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
            _this.post = res.data.data;
            localStorage.setItem('post',JSON.stringify(_this.post));
              _this.$router.push({
                path:'/enrollment-status',
                query: { name: _this.post}
              });
          } else  if(res.data.code == 401){
            _this.$router.push("/sign-in");
          } else {
            _this.$message({
            message: res.data.msg,
            showClose: true
          })
          }
        }).catch(function(err){
          _this.$message({
            message: err,
            showClose: true
          })
          console.log("错误")
        })
    },
    //下载准考证
    download(){
      this.$axios({
        method: 'post',
        url: BaseUrl + '/student/downloadTicket',
        headers: {
          token: window.localStorage["Authorization"]
        }
      }).then((res) => {
          if(res.data.code == 1){
            let link = res.data.data;
            let target = this.$refs.target;   
             target.setAttribute('href',link);
             target.click();
          }else if(res.data.code == 401){
            this.$router.push("/sign-in");      
          } else {
            this.$message({
            message: res.data.msg,
            showClose: true
          })
          }
      }).catch(err => {
          this.$message({
            message: err,
            showClose: true
          })   
      })
    },
    score(){
      this.$axios({
        method: 'get',
        url: BaseUrl + '/student/selectGrade', 
        headers:{
          token: window.localStorage['Authorization']
        }
      }).then(res => {
        if(res.data.code === 1){
          this.$alert(res.data.data.name+":"+res.data.data.score,"成绩",{
            confirmButtonText: '确定'
          })
        } else if(res.data.code == 401){
            this.$router.push("/sign-in");      
        } else {
            this.$message({
            message: res.data.msg,
            showClose: true
          })
        }
      }).catch(err => {
         this.$message({
            message: err,
            showClose: true
          })
      })
    }
  },
  beforeDestroy:function(){
    if(this.timer){
      clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
    }
  }
}
</script>

<style lang="stylus"> 
.home
  width 100%
  .bg_img
     position relative
     width 100%
     height 100px
     background #000
     img
      width 100%
      height 100%
      background-position center
      background-repeat no-repeat
      background-size cover
      object-fit:cover
      opacity 0.7
     h2
      position absolute
      top 30%
      left 10%
      color #ffffff
      font-weight 400
      letter-spacing 5px
     .time 
       position absolute
       top 60%
       right 10%
       color #ffffff
       letter-spacing 2px
       .font
         color #ffffff
  .nav
    width 100%
    height 100px
    line-height 100px
    background-color #A74C8F 
    box-shadow 1px 1px 3px #0000004a
    .imgm 
      height 80px
      line-height 80px
      padding 10px 0
      text-align center
      vertical-align middle
      img 
        width auto
        height 100%        
  .main
    width 80%
    margin 20px auto 10px
    display flex
    justify-content center
    box-sizing border-box
    .left,.right
      width 25%
      margin 1%
      height 400px
      overflow hidden
    .left>ul>li
      list-style-type none
      height 50px
      line-height 50px 
      padding 0 2%
      background-color #e9e9e9
      border-radius 5px
      margin 2% 0
      font-size: 18px
      transition ease-in-out .2s
      &:hover
        background-color #A74C8F
        i 
         color #ffffff
        a
         color #ffffff
        span
         color #ffffff 
      i 
       font-size 30px
       vertical-align bottom
       margin-right 2%
       color #A74C8F
      span 
       cursor pointer
      .target
        display none  
      a
       color #2C3E50
       text-decoration none
    .right
      width 50%      
      position relative
      .title
        position absolute
        width 100%
        height 50px
        line-height 50px 
        background-color #A74C8F
        color #ffffff
        padding 0 2%
        box-sizing border-box
        i 
         font-size 20px
         vertical-align bottom
         margin-right 2% 
      .iframe
        width 100%
        overflow-y scroll 
        position absolute
        max-height 350px
        top 50px
        &::-webkit-scrollbar
          width 8px
          background-color #f5f5f5
        &::-webkit-scrollbar-thumb
          background-color #AAA
          border-radius 10px
          background-image -webkit-linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)
        &::-webkit-scrollbar-track
          -webkit-box-shadow inset 0 0 6px rgba(0,0,0,0.3)
          background-color #F5F5F5
          border-radius 10px   
        .content
          padding 2%
          ul
           list-style none 
          li
           font-size 12px
           padding 2px 0
        .hr_line
          background #dadada
          height 1px
          border 0px
          margin-top 5px
  .footer
    width 70%
    margin 10px auto 
    text-align center 
    border-top 1px solid #000
    p
     margin-top 5px
     font-size 12px
     color #666
     .footer_title
       font-weight bold
       display block
       padding 2px 0
       font-size 14px
     .red
       color red  
</style>
