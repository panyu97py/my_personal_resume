<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <firstPage/>
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
import firstPage from './components/firstPage'
import selfIntroduction from './components/selfIntroduction'
import myTechnologyStack from './components/myTechnologyStack'
import myWorkExperience from './components/myWorkExperience'
import myProjectExperience from './components/myProjectExperience'
export default {
  components: {
    firstPage,
    selfIntroduction,
    myTechnologyStack,
    myWorkExperience,
    myProjectExperience
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
