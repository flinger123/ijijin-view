<!-- 
 图标
 - 精简版
 -->

<template>
    <em class="vu-iconfont" :class="['icon-' + type, className]" v-on="$listeners"></em>
</template>

<script>
    export default {
        name: 'icon',
        props: {
            type: {
                type: String,
                default: ''
            },
            className: String
        }
    }
</script>

<style lang="less">
    @import url('./index.less');
</style>