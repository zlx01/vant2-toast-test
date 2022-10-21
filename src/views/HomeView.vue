<template>
  <div class="home">
    <h2>type success</h2>
    <van-button type="primary" @click="test1">toast and go</van-button>
    <van-button type="info" @click="test2">toast and delay</van-button>
    <h2>自定义icon</h2>
    <van-button type="primary" @click="test3">toast and go</van-button>
    <van-button type="info" @click="test4">toast and delay</van-button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    // 先清缓存（杀掉微信后台）
    test1() {
      this.$toast({
        type: "success",
        message: "icon消失",
        // duration: 0,
      });
      window.location.replace("https://www.baidu.com");
      // 这里也一样有问题
      // window.location.href = "https://www.baidu.com";
    },
    test2() {
      this.$toast({
        type: "success",
        message: "看得见icon",
      });
      setTimeout(() => {
        window.location.replace("https://www.baidu.com");
      }, 500);
    },
    test3() {
      this.$toast({
        message: "icon消失",
        icon: require("@/assets/toast-success-icon.png"),
        // duration: 0,
      });
      window.location.replace("https://www.baidu.com");
    },
    test4() {
      this.$toast({
        message: "看得见icon",
        icon: require("@/assets/toast-success-icon.png"),
      });
      setTimeout(() => {
        window.location.replace("https://www.baidu.com");
      }, 500);
    },
  },
};
</script>
