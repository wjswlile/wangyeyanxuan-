<template>
  <!--轮播图-->
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="./images/1.jpg"/></div>
        <div class="swiper-slide"><img src="./images/2.png"/></div>
        <div class="swiper-slide"><img src="./images/3.jpg"/></div>
        <div class="swiper-slide"><img src="./images/4.jpg"/></div>
        <div class="swiper-slide"><img src="./images/5.jpg"/></div>
        <!--<div class="swiper-slide"><img src="./images/5.jpg"/></div>-->
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  export default {
    mounted(){
        var swiper = new Swiper('.swiper-container', {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

  .banner
    width 100%
    .swiper-slide
      height 200px
      img
        width 100%
        height 100%

</style>
