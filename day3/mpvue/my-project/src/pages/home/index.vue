<template>
  <div>
    <view>你好</view>
    <text>你好</text>
    <map
      id="map"
      longitude="113.324520"
      latitude="23.099994"
      scale="14"
      :controls="controls"
      bindcontroltap="controltap"
      bindmarkertap="markertap"
      bindregionchange="regionchange"
      show-location
      style="width: 100%; height: 300px;"
    ></map>
    <p v-text="text"></p>
    <input v-model="text" />
    <child />
    <button @click="getLocation">获取定位</button>
  </div>
</template>

<script>
import child from "../../components/child";
export default {
  data() {
    return {
      text: "home页面",
      controls: [
        {
          id: 1,
          iconPath:
            "https://avatars1.githubusercontent.com/u/52345807?s=460&v=4",
          position: {
            left: 0,
            top: 300 - 50,
            width: 50,
            height: 50
          },
          clickable: true
        }
      ]
    };
  },
  components: {
    child
  },
  methods: {
    // 获取定位
    getLocation() {
      wx.getLocation({
        type: "wgs84",
        success(res) {
          console.log(res)
        }
      });
    }
  }
};
</script>

<style scoped>
p {
  background-color: red;
}
</style>
