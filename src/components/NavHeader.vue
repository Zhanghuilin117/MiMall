<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascriptMUI:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascriptMUI:;">登录</a>
          <a href="javascript:;" class="my-cart"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"> </a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../assets/scss/base.scss";
@import "../assets/scss/mixin.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #f60;
        text-align: center;
        color: #fff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      .header-logo {
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &::before,
          &::after {
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            content: "";
            transition: margin 0.3s;
          }
          &::after {
            background: url("/imgs/mi-home.png") no-repeat center;
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.3s;
          }
        }
      }
      .header-menu {
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          font-size: 16px;
          color: #333;
          font-weight: bold;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
        }
      }
      .header-search {
        width: 319px;
        border: 1px solid #e0e0e0;
        .wrapper {
          height: 50px;
          display: flex;
          align-items: center;
          input {
            width: 264px;
            height: 50px;
            border: none;
            border-right: 1px solid #e0e0e0;
            box-sizing: border-box;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
