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
          <h2>资格信息查询</h2>
          <div class="write">
            <form action="">
              <div class="boxInp"><input type="text" placeholder="请输入姓名"></div>
              <div class="boxInp"><input type="text" placeholder="请输入学校"></div>
              <div class="boxInp"><input type="text" placeholder="请输入身份证号"></div>
              <input type="submit" value="提交" class="submit">
            </form>
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
        form
          .boxInp
            width 100%
            height 40px
            margin 15px 0
            &:first-child
              margin-top 0
            input 
              height 40px
              width 100%
              line-height 40px
              border none 
              outline none
              font-size 16px
              border-bottom 1px solid
              transition left 0.2s linear, top 0.2s cubic-bezier(.48,0,.94,.28);
              &:focus
                border-bottom 2px solid #a74c8f
          .submit
              height 50px
              width 100%
              line-height 50px
              margin-top 10px
              border none 
              outline none
              font-size 16px
              background-color #a74c8f
              color #ffffff
              border-radius 5px 
  .footer
    width 60%
    color #000
    margin 30px auto
    font-size 12px
    text-align center
    line-height 20px              

</style>