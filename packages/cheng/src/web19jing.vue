<template>
  <div>
    <div :class='["el-alert", "el-alert--"+buttonType, {"is-plain": isPlain}]'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "web-button",
  props: {
    buttonType: {
      type: String,
      default: "default"
    },
    isPlain: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.demo-box.demo-alert .el-alert:first-child {
  margin: 0;
}
.demo-box.demo-alert .el-alert {
  margin: 20px 0 0;
}

.el-alert {
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
}
.el-alert--success {
  background-color: #f0f9eb;
  color: #67c23a;
}

.el-alert--success:hover{background: lightcoral;color: red}
.el-alert--back{
  background-color: red;
}
.el-alert--back:hover{background: lightblue ;color: lightgreen}
.el-alert--none{
 display: none 
}
.demo-block .source {
  padding: 24px;
}
user agent stylesheet div {
  display: block;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue, Helvetica;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
element.style {
}
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
}

div {
  display: block;
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
}

html {
  display: block;
  color: -internal-root-color;
}
</style>