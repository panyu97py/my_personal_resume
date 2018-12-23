<template>
  <div id="timeAxisItem">
    <div class="timeAxisItem_date">
      <p>{{date}}</p>
    </div>
    <div class="timeAxisItem_content">
      <div class="timeAxisItem_content_title">
        <p>{{title}}</p>
      </div>
      <p v-html="content" style="text-indent:2em"/>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
#timeAxisItem {
  position: relative;
  width: 25%;
  height: 100%;
  margin: {
    left: 50px;
  }
  float: left;
  .timeAxisItem_date {
    position: absolute;
    left: 50%;
    top: calc(50% - 160px);
    // top: calc(50% - 45px);
    z-index: 2;
    margin-left: -45px;
    width: 74px;
    height: 74px;
    border: 8px solid white;
    background: white;
    border-radius: 50%;
    p {
      margin: 0;
      line-height: 74px;
    }
  }
  .timeAxisItem_date::after {
    content: "";
    width: 10px;
    height: 80px;
    position: absolute;
    background: white;
    margin-left: -5px;
  }
  .timeAxisItem_content {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    border-radius: 10px;
    background: white;
      font-size: 1vw;
    .timeAxisItem_content_title {
      width: 100%;
      background: red;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      height: 20%;
      p {
        margin: 0;
        line-height: 6vh;
        height: 100%;
        font-size: 1vw;
        font-weight: bold;
      }
    }
  }
  .timeAxisItem_content:before {
    content: "";
    width: 10px;
    height: 25%;
    position: absolute;
    background: white;
    margin-left: -5px;
    left: 50%;
    top: -25%;
  }
}
#timeAxisItem:nth-child(even) {
  .timeAxisItem_date {
    top: calc(50% + 80px);
  }
  .timeAxisItem_content {
    top: 0;
  }
  .timeAxisItem_date::after {
    top: -88px;
  }
  .timeAxisItem_content:before {
    top: 100%;
  }
}
</style>
