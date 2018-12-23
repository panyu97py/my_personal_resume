<template>
  <div class="swiper-container">
    <suspendedFrame/>
    <div class="swiper-wrapper">
      <helloPage/>
      <selfIntroduction/>
      <myTechnologyStack/>
      <myWorkExperience/>
      <myProjectExperience/>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import suspendedFrame from './components/suspendedFrame'
import helloPage from './components/helloPage'
import selfIntroduction from './components/selfIntroduction'
import myTechnologyStack from './components/myTechnologyStack'
import myWorkExperience from './components/myWorkExperience'
import myProjectExperience from './components/myProjectExperience'
export default {
  components: {
    helloPage,
    selfIntroduction,
    myTechnologyStack,
    myWorkExperience,
    myProjectExperience,
    suspendedFrame
  },
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
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
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100%;
  height: 100%;
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
