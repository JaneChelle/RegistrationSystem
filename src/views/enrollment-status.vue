<template>
  <div class="enroll">
      <div class="head">
        <div class="title">
          <div class="logo">
            <img src="../assets/logo2.png" alt="">
          </div>
          <div class="name">
            <h2>等级考试报名系统</h2>
            <span>Grade examination registration</span>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="main">
          <h2>欢迎登录CET考试报名系统</h2>
          <div class="write">
            <table>
                <thead>
                    <tr><td colspan="2" class="tdh">基本信息</td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>考次名称：</td>
                        <td>2020年上半年CET考试</td>
                    </tr>
                    <tr>
                        <td>报名状态：</td>
                        <td class="info">未报名（或当前通行证账号非报名时账号）</td>
                    </tr>
                    <tr>
                        <td>残疾考生合理便利线下申请截止时间：</td>
                        <td>2019-11-14 09:00</td>
                    </tr>
                </tbody>
            </table>
            <div class="btn"><router-link class="aa" to="/enroll">开始报名</router-link></div>
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
export default {

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
        table
          width 100%
          padding 10px
          border 1px solid #dddddd
          box-shadow 2px 2px 5px #cccccc 
          text-align center
          margin-bottom 20px
          border-collapse: collapse;
          thead
            background-color #a74c8f
            width 100%
            .tdh
              color #ffffff
              height 40px
              border 1px solid #a74c8f
              letter-spacing 2px     
          tbody
            td 
             height 40px
             border 1px solid #000
            .info
              color red
              font-weight 600  
        .btn
          width 20%
          margin 0 auto
          height 40px
          line-height 40px
          border-radius 5px     
          background-color #a74c8f
          text-align center
          letter-spacing 2px
          .aa
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