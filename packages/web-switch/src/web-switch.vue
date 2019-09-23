<template>
    <div>
        <span
      @click="change()"
      class="el-switch__core"
      :style="['width: 40px',{'border-color':value?'#ff4949':'#13ce66'}, {'background-color': value?'#ff4949':'#13ce66'}]"
    ><span class="after" :style="{'margin-left':value?'0px':'20px'}"></span>
    </span>
    </div>
</template>

<script>
export default {
    name: "web-switch",
    data() {
    return {
      value: true
    };
  },
  methods: {
    change() {
      if (this.value) {
        this.value = false;
      } else {
        this.value = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
element.style {
  width: 40px;
  border-color: rgb(255, 73, 73);
  background-color: rgb(255, 73, 73);
}
.el-switch__core {
  margin: 0;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s;
  vertical-align: middle;
}
.el-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
.after {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  border-radius: 100%;
  transition: all 0.3s;
  width: 16px;
  height: 16px;
  background-color: #fff;
}
</style>
