<template>
  <div id="suspendedFrame">
    <img src="/static/images/personalResume/User head.JPG" alt class="img">
    <p class="text">
      <span class="name">panyu</span>'s resume
    </p>
  </div>
</template>
<style lang="scss">
#suspendedFrame {
  position: fixed;
  top: 5%;
  left: 2%;
  z-index: 100;
  height: 60px;
  background: rgba($color: #fff, $alpha: 0.5);
  border-radius: 10px;
  border: #fff solid 1px;
  .img {
    float: left;
    margin: 5px;
    height: 50px;
    border-radius: 50%;
  }
  .text {
    // margin: le
    line-height: 60px;
    margin: 0;
    // margin-left: 10px;
    float: left;
    font-weight: bold;
    padding: 0 10px;
    .name {
      padding: 7px 10px;
      border-radius: 5px;
      background: #000000;
      color: white;
      margin-right: 10px;
    }
  }
}
</style>
