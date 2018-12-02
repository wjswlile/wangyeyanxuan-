<template>
  <div class="homeShop">
    <div class="shop">
      <span>购物车</span>
      </div>
    <div class="lists">
      <ul>
        <li>30天天忧退货</li>
        <li>48小时快速退款</li>
        <li class="xiao">满88元免邮费</li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeShop
    width 100%
    height 100%
    background #eee
    .shop
      width 100%
      height 40px
      background #fff
      position relative
      span
        position absolute
        left 42%
        top 20%
        font-size 20px
    .lists
      width 100%
      height 58px
      ul
        display flex
        width 100%
        li
          flex 1
          line-height 58px
          font-size 14px
          margin-left 10px
        .xiao
          margin-left 23px


</style>
