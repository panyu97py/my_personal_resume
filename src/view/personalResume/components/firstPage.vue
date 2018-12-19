<template>
<div class="swiper-slide" id="firstPage">
  <div class="introduce" @mousemove="mousemove"></div>
</div>
</template>
<script>
export default {
  methods: {
    mousemove ({clientX, clientY}) {
      console.log('mousemove', clientX, clientY)
    }
  }
}
</script>

<style lang="scss">
#firstPage{
  position: relative;
  background: yellow;
  .introduce{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 80%;
    height: 50%;
    background: blue;
  }
  // width: 100%;
  // height: 100%;
}
</style>
