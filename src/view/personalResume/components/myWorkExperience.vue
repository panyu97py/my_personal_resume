<template>
  <div id="myWorkExperience" class="swiper-slide">
    <div class="layerMask">
      <div class="content">
        <TimeAxis>
          <TimeAxisItem
            date="18年1月"
            title="杭叉集团股份有限公司"
            content="从事系统管理员一职主要以操作公司软件为主与前端工作并无太大关系就不做详细介绍了。<br>于2017年7月从该公司离职"
          />
          <TimeAxisItem
            date="18年6月"
            title="毕业于浙江机电职业技术学院"
            content="在校期间学习物联网应用软件开发，学习了Java，安卓软件开发、web前端、linux、Arduino单片机、mySQl数据库等专业技能。并荣获2017年单项奖学金"
          />
          <TimeAxisItem
            date="18年8月"
            title="杭州以琳物联"
            content="负责公司后台管理软件的前端开发，主要对于git操作、Element UI框架、vue框架较为熟系。期间对于react框架也有所接触"
          />
        </TimeAxis>
      </div>
    </div>
  </div>
</template>
<script>
import TimeAxis from '@/components/TimeAxisTransverse'
import TimeAxisItem from '@/components/TimeAxisTransverse/item'
export default {
  name: 'myWorkExperience',
  components: {
    TimeAxis,
    TimeAxisItem
  }
}
</script>

<style lang="scss">
#myWorkExperience {
  // position: relative;
  background: url("/static/images/personalResume/background (6).jpeg") no-repeat;

  // background: gray;
  background-size: cover;
  width: 100%;
  height: 100%;
  .layerMask {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(86, 83, 100, 0.7);
    .content {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 80%;
      height: 80%;
      text-align: center;
      .title {
        text-align: center;
      }
    }
  }
}
</style>
