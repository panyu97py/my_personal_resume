<template>
  <div id="myTechnologyStack" class="swiper-slide">
    <div class="layerMask">
      <div class="content">
        <Echart class="echart" :option="EchartOption"/>
      </div>
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
  background: url("/static/images/personalResume/background (5).jpg") no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  .layerMask {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(86, 83, 100, 0.7);
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 60%;
    height: 60%;
    text-align: center;
    .echart {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
