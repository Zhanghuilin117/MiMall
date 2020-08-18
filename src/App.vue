<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import storage from "./storage/index";
import { mapMutations } from "vuex";
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    getUser() {
      this.axios.get("/user").then((res = {}) => {
        this.$store.dispatch("saveUserName", res.username);
        // this.saveUserName(res.name);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
        // this.saveCartCount(res);
      });
    },
    ...mapMutations(["saveUserName", "saveCartCount"]),
  },
};
</script>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
