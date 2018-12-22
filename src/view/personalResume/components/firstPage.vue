<template>
  <div class="swiper-slide" id="firstPage">
    <div class="introduce" @mousemove="mousemove" style="textAlign:center">
      <p class="hello">Hello，I'm a web developer</p>
      <p class="text">我叫潘宇</p>
      <p class="text">一名前端开发工程师</p>
      <p class="text">panyupy@vip.qq.com</p>
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
  background: url("/static/images/personalResume/background (2).jpg") no-repeat;
  background-size: cover;
  // background: gray;
  .introduce {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 30%;
    border-radius: 20px;
    // background: rgba($color: white, $alpha: 0.5);
    // box-shadow: 0 0 60px 20px yellow;

    .hello {
      font-family: SkyFallDone;
      font-size: 45px;
      text-align: center;
      margin: 0;
      color: black;
      font-weight: bolder;
    }
    .text {
      font-weight: bold;
      font-size: 20px;
    }
  }
}
</style>
