<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import storage from "./storage/index";
export default {
  name: "app",
  components: {},
  mounted() {
    // storage.getItem("user");
    // storage.setItem("user", { a: 1 });
    storage.setItem("abc", { a: 1 }, "user");
    // storage.clear("abc", "user");
  },
};
</script>
