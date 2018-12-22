<template>
  <div id="myProjectExperience" class="swiper-slide">
    我的项目经历
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
  background: gray;
  width: 100%;
  height: 100%;
  .title {
    text-align: center;
  }
}
</style>
