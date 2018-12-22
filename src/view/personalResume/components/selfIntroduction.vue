<template>
  <div id="selfIntroduction" class="swiper-slide">
    <div class="content">
      <img src="/static/images/personalResume/User head.JPG" alt class="userHead">
      <p
        class="text"
      >您好，我叫潘宇，坐标杭州。计算机专业毕业的我，选择了前端开发的岗位。本人在公司主要负责实现UI设计的界面风格，配合后端工程师实现前端界面的数据交互。写过官网、投资平台、后台管理系统。对于微信小程序也有所了解。</p>
    <p  class="text">目前开发主要以vue框架为主，由于公司有基于react开发的老项目，所以对于react也有一定的了解。</p>
    </div>
  </div>
</template>
<style lang="scss">
#selfIntroduction {
  position: relative;
  background: gray;
  width: 100%;
  height: 100%;
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
    .userHead {
      width: 20%;
      border-radius: 50%;
    }
    .text {
      text-align: left;
      padding: 0 10%;
      line-height: 30px;
      text-indent: 2em;
      color: white;
    }
  }
}
</style>
