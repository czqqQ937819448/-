<template>
    <div>
        <span :class='["tag","tag--"+tagType, "tagzt--"+effect]'>
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "tag",
    props: {
        tagType: {
            type: String,
            default: "default"
        },
        effect: {
            type: String,
            default: "default"
        },
        
    }
}
</script>

<style scoped>
.tag{
    background-color: #ecf5ff;
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    line-height: 30px;
    font-size: 12px;
    color: #409eff;
    border: 1px solid #d9ecff;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
}
.tag--success{
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
}
.tag--info{
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
}
.tag--warning{
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
}
.tag--danger{
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: #f56c6c;
}
</style>