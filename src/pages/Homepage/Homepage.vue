<template>
  <div class="Homepage">
    <div class="header">
     <div class="header_top">
       <h1><img src="./images/logo.png"/></h1>
       <input type="text" outline="none" value="搜索"/>
       <span>登陆</span>
     </div>
      <div class="header_down">
        <ul>
          <li>推荐</li>
          <li>居家</li>
          <li>配件</li>
          <li>服装</li>
          <li>电器</li>
          <li>洗护</li>
        </ul>
      </div>
    </div>
    <div class="content">
      <HomeBanner/>
      <div class="explain">
        <div>
          <i></i>网易自营品牌
        </div>
        <div>
          <i></i>30天无忧退货
        </div>
        <div>
          <i></i>60天快速退款
        </div>
      </div>
      <div class="eee"></div>
      <div class="manufacturer">
        <span>品牌制造商直供</span>
        <i></i>
      </div>
      <div class="goods">
        <div>
          <span>制造商</span>
          <span>199元</span>
          <img src="//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png"/>
        </div>
        <div>
          <span>制造商</span>
          <span>156元</span>
          <img src="//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png"/>
        </div>
        <div>
          <span>制造商</span>
          <span>188元</span>
          <img src="//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png"/>
        </div>
        <div>
          <span>制造商</span>
          <span>139元</span>
          <img src="//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import HomeBanner from '../../components/HomeBanner/HomeBanner.vue'
  export default {
    components:{
      HomeBanner
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .Homepage
    width 100%
    height 100%
    position relative
    overflow hidden
    .header
      width 100%
      height 73px
      .header_top
        padding 10px 10px
        h1
          float left
          width 80px
          height 25px
          margin-right 8px
          img
            width 100%
            height 100%
        input
          width 180px
          height 26px
          border-radius 6px
          background #eee
        span
          display inline-block
          font-size 18px
          margin-left 10px
          border 1px solid #ff0000
          border-radius 4px


      .header_down
        width 100%
        height 27px
        ul
          display flex
          li
            flex 1
            margin-left 16px

    .content
      width 100%
      height 100%
      .explain
        width 100%
        height 40px
        display flex
        line-height 40px
        div
          height 30px
          flex 1
        margin-top 6px
        margin-left 6px

      .eee
        width 100%
        height 8px
        background #eee
      .manufacturer
        width 100%
        height 70px
        text-align center
        line-height 70px
        font-size 18px
      .goods
        width 100%
        div
          width 46%
          height 175px
          background #eee
          float left
          margin 2%
          span
            display block
            margin 8px 0 0 8px
          img
            width 100%



</style>
