<template>
  <div class="home">
    <div class="bg_img">
      <img src="../assets/bg.jpg" alt="">
      <h2>等级考试报名系统</h2>
      <div class="time"> {{ date | dateFormat }}</div>
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
              <router-link to="/enrollment-status"> 查看报名状态</router-link></li>  

            <li>
              <i class="iconfont icongenshuixueicon_huabanfuben"></i>
              <router-link to="{ name: 'home' }">下载准考证</router-link>
              </li>
            <li>
              <i class="iconfont iconchaxun2"></i>
              <router-link to="{ name: 'home' }">查看成绩</router-link>
              </li>
          </ul>
        </div>
        <div class="right">
          <div class="title"><i class="iconfont icongonggao"></i>等级考试最新动态</div>
          <div class="iframe">
              <div class="content">
                  <h5>2019年下半年考试时间：</h5>
                  <ul>
                      <li>笔试：2019-12-14</li>
                      <li>上午：英语四级 &nbsp; 下午：英语六级</li>
                      <li>口试：</li>
                      <li>2019-11-23：英语四级 &nbsp; 2019-11-24：英语六级</li>
                  </ul>
                  <hr class="hr_line">
              </div>

              <div class="content">
                  <h5>2019年下半年准考证打印提示：</h5>
                  <ul>
                      <li>1.2019年下半年准考证打印仅限<span style="color:red">北京、天津、河北、山西、内蒙
                          古吉林、黑龙江、上海、江苏、安徽、福建、江西、山东、河南、
                          湖北、湖南、广东、广西、海南、
                          庆、四小、贵州、云南、西藏、
                          甘肃、青海、宁夏、新疆、澳门(口语)。</span>
                      </li>
                      <li>2.口试准考证打印时间: 11月18日。</li>
                      <li>3.笔试准考证打印时间:请以考点通知时间为准，如考点采用集体打印方式, 请联系学校相关部门领取准考证。
                      </li>
                  </ul>
                  <hr class="hr_line">
              </div>

              <div class="content">
                  <h5>2019年下半年准考证打印提示：</h5>
                  <ul>
                      <li>1.2019年下半年准考证打印仅限<span style="color:red">北京、天津、河北、山西、内蒙
                          古吉林、黑龙江、上海、江苏、安徽、福建、江西、山东、河南、
                          湖北、湖南、广东、广西、海南、
                          庆、四小、贵州、云南、西藏、
                          甘肃、青海、宁夏、新疆、澳门(口语)。</span>
                      </li>
                      <li>2.口试准考证打印时间: 11月18日。</li>
                      <li>3.笔试准考证打印时间:请以考点通知时间为准，如考点采用集体打印方式, 请联系学校相关部门领取准考证。
                      </li>
                  </ul>
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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  data(){
    return {
      date: new Date()
    }
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
    // HelloWorld
  },
  mounted:function() {
     var _this=this; //声明一个变量指向Vue实例this，保证作用域一致
     this.timer=setInterval(function() {
         _this.date=new Date(); //修改数据date
     } , 1000)
 },
  methods: {},
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
    margin 20px auto 30px
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
      i 
       font-size 30px
       vertical-align bottom
       margin-right 2%
       color #A74C8F
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
        i 
         font-size 20px
         vertical-align bottom
         margin-right 2% 
      .iframe
        overflow-y scroll 
        position absolute
        height 350px
        top 50px
        &::-webkit-scrollbar
          width 10px
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
