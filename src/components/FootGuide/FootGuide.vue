<template>
  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on: $route.path==='/homepage'}" @click="goto('/homepage')">
      <span class="item_icon">
        <i class="iconfont icon-icon"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/classify'}" @click="goto('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei1"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/picture'}" @click="goto('/picture')">
      <span class="item_icon">
        <i class="iconfont icon-tupian"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/shop'}" @click="goto('/shop')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche-01"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/profile'}" @click="goto('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto (path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #ff0000
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
