<template>
  <div class="swiper-slide" id="firstPage">
    <div class="introduce" @mousemove="mousemove">
      <!-- <p class="hello">test</p> -->
      <!-- <p></p>
    <p>我叫潘宇</p>
      <p>一名前端开发工程师</p>-->
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    mousemove ({ clientX, clientY }) {
      // console.log('mousemove', clientX, clientY)
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/index.scss";
#firstPage {
  position: relative;
  width: 100%;
  height: 100%;
  // background: url("/static/images/personalResume/background.jpg") no-repeat;
  // background-size: cover;
  background: gray;
  .introduce {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 40%;
    border-radius: 20px;
    background:none;
   box-shadow: 0 0 60px 20px yellow;

    // .hello {
    //   font-family: SketchRockwell-Bold;
    //   font-size: 100px;
    //   margin: 0;
    // }
  }
}
</style>
