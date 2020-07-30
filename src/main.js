import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import store from "./store";
import router from "./router";
// import env from "./env";

const mock = true;
if (mock) {
  require("./mock/api");
}
// 根据前端的跨域方式做调整 /a/b : /api/a/b => /a/b
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5dc7afee2b69d9223b633cbb/mimall';
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
// axios.interceptors.request.use(function(responce) {
//   let res = responce.data;
//   console.log(res);
//   if (res.status == 0) {
//     return res.data;
//   } else if (res.data == 10) {
//     window.location.href = "/#/login";
//   } else {
//     alert(res.msg);
//   }
// });

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
