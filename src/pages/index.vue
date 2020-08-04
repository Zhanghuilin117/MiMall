<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index1) in menuList" :key="index1">
                  <li v-for="(sub, index2) in item" :key="index2">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img v-lazy="sub ? sub.img : '/imgs/item-box-1.png'" />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id"><img :src="item.img"/></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          v-for="(item, index) in adsList"
          :key="index"
          :href="'/#/product/' + item.id"
        >
          <img v-lazy="item.img" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="" />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35"
              ><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""
            /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, index1) in phoneList" :key="index1">
              <div class="item" v-for="(sub, index2) in item" :key="index2">
                <span :class="index2 % 2 == 0 ? 'new-pro' : 'kill-pro'"
                  >新品</span
                >
                <div>
                  <img v-lazy="sub.mainImage" />
                </div>
                <div class="item-info">
                  <h3>{{ sub.name }}</h3>
                  <p>{{ sub.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ sub.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      :showModal="showModal"
      @submit="goToCart"
      @cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>
<script>
import serviceBar from "../../src/components/ServiceBar";
import Modal from "./../components/Modal";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide,
    serviceBar,
    Modal,
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9",
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版",
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro",
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区",
          },
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg",
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg",
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg",
        },
        {
          id: "",
          img: "/imgs/slider/slide-1.jpg",
        },
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png",
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg",
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png",
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg",
        },
      ],
      phoneList: [],
      showModal: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14,
          },
        })
        .then((res) => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart() {
      this.showModal = true;
      // this.axios
      //   .post("/carts", {
      //     productId: id,
      //     selected: true,
      //   })
      //   .then((res) => {
      //     this.showModal = true;
      //     this.$store.dispatch("saveCartCount", res.cartTotalQuantity);
      //   });
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
};
</script>
<style lang="scss">
@import "../../src/assets/scss/mixin.scss";
@import "../../src/assets/scss/config.scss";
.index {
  .swiper-box {
    .nav-menu {
      width: 264px;
      height: 451px;
      position: absolute;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a7a;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 18px;
            color: $colorG;
            padding-left: 30px;
            &::after {
              content: "";
              position: absolute;
              right: 30px;
              top: 50%;
              transform: translateY(-50%);
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            left: 264px;
            top: 0;
            border: 1px solid $colorH;
            box-sizing: border-box;
            display: none;
            ul {
              display: flex;
              justify-content: space-between;
              li {
                flex: 1;
                padding-left: 23px;
                height: 75px;
                line-height: 75px;
                a {
                  color: $colorB;
                  font-size: 14px;
                  img {
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      img {
        width: 100%;
        height: 100%;
      }
      .swiper-button-prev {
        left: 274px;
      }
    }
  }
  .ads-box {
    @include flex();
    margin: 14px auto 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: #333333;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        a {
          img {
            width: 224px;
            height: 619px;
          }
        }
      }
      .list-box {
        .list {
          @include flex();
          margin-bottom: 14px;
          width: 986px;
          .item {
            width: 236px;
            height: 302px;
            background-color: $colorG;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: $colorG;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            img {
              width: 100%;
              height: 195px;
            }
          }
          .item-info {
            h3 {
              font-size: 14px;
              color: $colorB;
              line-height: 14px;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: #f20a0a;
              font-size: 14px;
              font-weight: bold;
              cursor: pointer;
              &::after {
                content: "";
                @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>
