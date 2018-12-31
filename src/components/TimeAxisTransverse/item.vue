<template>
  <div id="timeAxisItem">
    <div class="timeAxisItem_date">
      <p>{{date}}</p>
    </div>
    <div class="timeAxisItem_content">
      <div class="timeAxisItem_content_title">
        <p>{{title}}</p>
      </div>
      <p v-html="content" style="text-indent:2em;padding:5px;"/>
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
@import "./variable.scss";
#timeAxisItem {
  position: relative;
  width: 25%;
  height: 100%;
  margin: {
    left: 8%;
  }
  float: left;
  .timeAxisItem_date {
    position: absolute;
    left: 50%;
    top: calc(50% - 160px);
    z-index: 2;
    margin-left: -45px;
    width: 74px;
    height: 74px;
    border: 8px solid $TimeAxisItemColor;
    // background: white;
    border-radius: 50%;
    p {
      margin: 0;
      line-height: 74px;
      color: $headAndDateColor;
      font: {
        size: 17px;
        weight: 900;
      }
    }
  }
  .timeAxisItem_date::after {
    content: "";
    width: 10px;
    height: 25vh;
    z-index: 1;
    position: absolute;
    background: $TimeAxisItemColor;
    margin-left: -5px;
  }
  .timeAxisItem_content {
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 40%;
    border-radius: 10px;
    background: $contentBackgroundColor;
    font-size: 1vw;
    text-align: left;

    .timeAxisItem_content_title {
      width: 100%;
      background: $titleBackgroundColor;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      height: 20%;
      p {
        text-align: center;
        margin: 0;
        line-height: 6vh;
        height: 100%;
        font-size: 1vw;
        font-weight: bold;
      }
    }
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
    top: -25vh;
  }
  .timeAxisItem_content:before {
    top: 100%;
  }
}
</style>
