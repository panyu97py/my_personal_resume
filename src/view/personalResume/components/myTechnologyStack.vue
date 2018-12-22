<template>
  <div id="myTechnologyStack" class="swiper-slide">
    <div class="content">
      <Echart class="echart" :option="EchartOption"/>
    </div>
  </div>
</template>
<script>
import Echart from '@/components/Echarts'
import EchartOption from './chartOption'
export default {
  name: 'technologyStack',
  components: {
    Echart
  },
  data () {
    return {
      EchartOption
    }
  }
}
</script>

<style lang="scss">
#myTechnologyStack {
  position: relative;
  background: gray;
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 60%;
    text-align: center;
    .echart{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
