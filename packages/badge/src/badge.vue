<template>
  <div class="el-badge">
    <button class="el-button--small el-button">
      <slot></slot>
    </button>
    <sup :class="['el-badge__content', 'is-fixed', 'el-badge__content--'+badgeType,{'is-dot':isDot}]">
      <template v-if="count">
        {{count}}
      </template>
      <template v-else>
        {{text}}
      </template>
    </sup>
  </div>
</template>

<script>
export default {
    name:"badge",
    props:{
        badgeType:{
            type : String,
            default:"undefined"
        },
        count :{
            type : Number,
            default : null,
        },
        isDot :{
          isDot : Boolean,
          default : false
        },
        text :{
          type : String,
          default : "",
        }
    }
}
</script>

<style scoped>
.el-badge__content {
    background-color: #f56c6c;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
}

.el-badge {
  position: relative;
  vertical-align: middle;
  display: inline-block;
}

.el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}

.el-badge__content.is-fixed {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translateY(-50%) translateX(100%);
}

.el-badge__content.is-dot {
    height: 8px;
    width: 8px;
    padding: 0;
    right: 5px;
    border-radius: 50%;
}

.el-badge__content--warning {
  background-color: #e6a23c;
}

.el-badge__content--primary {
  background-color: #409eff;
}
</style>