<template>
  <div id="TimeAxisTransverse">
    <div class="content">
      <slot/>
    </div>
  </div>
</template>
<style lang="scss">
#TimeAxisTransverse {
  position: relative;
  width: 100%;
  height: 100%;
  .content {
    margin-left: 10%;
    width: calc(100% - 100px);
    height: 100%;
  }
}
#TimeAxisTransverse::before {
  top: 50%;
  left: 0;
  content: "工作经历";
  line-height: 74px;
  z-index: 10;
  position: absolute;
  height: 74px;
  width: 74px;
  background: none;
  margin-top: -45px;
  border-radius: 50%;
  color: #ffd200;
  border: 8px solid white;
  font: {
    size: 17px;
    weight: 900;
  }
}
#TimeAxisTransverse::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 85px;
  height: 10px;
  margin-top: -5px;
  border-radius: 5px;
  width: calc(100% - 90px);
  background: white;
}
</style>
