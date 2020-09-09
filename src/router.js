import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Index from "./pages/index";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: Home,
            redirect: "/index",
            children: [{
                    path: "/index", //加/以根路径访问
                    name: "index",
                    component: Index
                },
                {
                    path: "/product/:id",
                    name: "product",
                    component: () =>
                        import ("./pages/product.vue")
                },
                {
                    path: "/detail/:id",
                    name: "detail",
                    component: () =>
                        import ("./pages/detail.vue")
                }
            ]
        },
        {
            path: "/order",
            name: "order",
            component: () =>
                import ("./pages/order.vue"),
            children: [{
                    path: "list", //不加/以普通字符串拼在后面  /order/list
                    name: "order-list",
                    component: () =>
                        import ("./pages/orderList.vue")
                },
                {
                    path: "confirm",
                    name: "order-confirm",
                    component: () =>
                        import ("./pages/orderConfirm.vue")
                },
                {
                    path: "pay",
                    name: "order-pay",
                    component: () =>
                        import ("./pages/orderPay.vue")
                },
                {
                    path: "alipay",
                    name: "alipay",
                    component: () =>
                        import ("./pages/alipay.vue")
                }
            ]
        },
        {
            path: "/cart",
            name: "cart",
            component: () =>
                import ("./pages/cart.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import ("./pages/login.vue")
        }
    ]
});