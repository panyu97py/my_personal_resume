<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <firstPage/>
      <!-- <div class="swiper-slide" style="background:blue">2</div>
      <div class="swiper-slide" style="background:green">3</div>
      <div class="swiper-slide" style="background:white">4</div>
      <div class="swiper-slide" style="background:gray">5</div>
      <div class="swiper-slide">6</div> -->
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import firstPage from './components/firstPage'
export default {
  components: {
    firstPage
  },
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
    console.log(swiper)
  }
}
</script>
<style lang="scss">
.swiper-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
