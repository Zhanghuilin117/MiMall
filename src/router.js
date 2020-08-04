import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Index from "./pages/index";
import Product from "./pages/product";
import Detail from "./pages/detail";
import Order from "./pages/order";
import OrderList from "./pages/orderList";
import OrderConfirm from "./pages/orderConfirm";
import OrderPay from "./pages/orderPay";
import alipay from "./pages/alipay";
import Cart from "./pages/cart";
import Login from "./pages/login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index",
      children: [
        {
          path: "/index", //加/以根路径访问
          name: "index",
          component: Index,
        },
        {
          path: "/product/:id",
          name: "product",
          component: Product,
        },
        {
          path: "/detail/:id",
          name: "detail",
          component: Detail,
        },
      ],
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {
          path: "list", //不加/以普通字符串拼在后面  /order/list
          name: "order-list",
          component: OrderList,
        },
        {
          path: "confirm",
          name: "order-confirm",
          component: OrderConfirm,
        },
        {
          path: "pay",
          name: "order-pay",
          component: OrderPay,
        },
        {
          path: "alipay",
          name: "alipay",
          component: alipay,
        },
      ],
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
