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
          <a :href="getGoodsHref()" class="down"></a>
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
  data() {
    return {
        link: this.$route.query.link
    }
},
mounted(){
  this.getGoodsHref()
},
methods: {
    getGoodsHref: function() {
        return this.link;
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
      .down
        color #000
        text-decoration underline
  .footer
    width 60%
    color #000
    margin 30px auto
    font-size 12px
    text-align center
    line-height 20px              

</style>