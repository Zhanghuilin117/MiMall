<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.barbili.com" target="_blank">博客主页</a
      ><span>|</span>
      <a href="#" target="_blank"
        >智能小派家居控制终端（微信搜索）</a
      ><span>|</span>
      <a href="#" target="_blank">懂你找图吧小程序（微信搜索）</a
      >
    </div>
    <div class="copyright">
      Copyright ©2020
      <a class="domain" href="http://mi.barbili.com/">mi.barbili.com</a> All
      Rights Reserved.
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
@import "../assets/scss/config.scss";
.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin: 46px auto 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      color: $colorD;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>
