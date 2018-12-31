<template>
  <div id="myProjectExperience" class="swiper-slide">
    <div class="layerMask">
      <div>

      </div>
    </div>
  </div>
</template>
<script>
import TimeAxis from '@/components/TimeAxis'
import TimeAxisItem from '@/components/TimeAxis/timeAxisItem'
export default {
  name: 'myProjectExperience',
  components: {
    TimeAxis,
    TimeAxisItem
  }
}
</script>

<style lang="scss">
#myProjectExperience {
  position: relative;
  background: url("/static/images/personalResume/background (7).jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  .layerMask {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(86, 83, 100, 0.7);
    .title {
      text-align: center;
    }
  }
}
</style>
