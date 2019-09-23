<template>
    <div>
        <span :class='["tag","tag--"+tagType, "size--"+sizeType,{"no-border": noBorder}]'>
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
        sizeType: {
            type: String,
            default: "default"
        },
        noBorder: {
            type: Boolean,
            default: false
        }
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
.size--medium{
    height: 28px;
    line-height: 26px;
}
.size--small{
    height: 24px;
    padding: 0 8px;
    line-height: 22px;
}
.size--mini{
    height: 20px;
    padding: 0 5px;
    line-height: 19px;
}
.tag.no-border{
    border: none;
}
.tag--success.no-border{
     border: none;
}
.tag--info.no-border{
    border: none;
}
.tag--warning.no-border{
   border: none;
}
.tag--danger.no-border{
   border: none;
}
</style>