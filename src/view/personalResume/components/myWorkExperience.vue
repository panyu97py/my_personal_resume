<template>
  <div id="myWorkExperience" class="swiper-slide">
    <p class="title">我的工作经历</p>
    <TimeAxis>
      <TimeAxisItem
        date="2018年1月"
        title="在杭叉集团股份有限公司做毕业实习"
        content="主要从事系统管理员操作公司软件。。。与前端工作并无太大关系就不做详细介绍了。于2017年7月从该公司离职"
      />
      <TimeAxisItem
        date="2018年6月"
        title="毕业于浙江机电职业技术学院"
        content="在校期间学习物联网应用软件开发，学习了Java，安卓软件开发、web前端、linux、Arduino单片机、mySQl数据库等专业技能。并荣获2017年单项奖学金"
      />
      <TimeAxisItem
        date="2018年8月"
        title="作为应届生加入以琳物联从事前端开发工作"
        content="负责公司后台管理软件的前端开发，主要对于git操作、Element UI框架、vue框架较为熟系。期间对于react框架也有所接触"
      />
    </TimeAxis>
  </div>
</template>
<script>
import TimeAxis from '@/components/TimeAxis'
import TimeAxisItem from '@/components/TimeAxis/timeAxisItem'
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
  position: relative;
  background: gray;
  width: 100%;
  height: 100%;
  .title {
    text-align: center;
  }
}
</style>
