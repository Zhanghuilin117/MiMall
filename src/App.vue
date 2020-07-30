<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import storage from "./storage/index";
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // this.axios.get("/user/login").then((res) => {
    //   this.res = res;
    //   console.log(this.res);
    // });
    // storage.getItem("user");
    // storage.setItem("user", { a: 1 });
    // storage.setItem("abc", { a: 1 }, "user");
    // storage.clear("abc", "user");
  },
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
</style>
