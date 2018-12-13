<!-- 
 轮播图每项
 -->
<template>
    <div class="vu-slider-item" :style="style">
        <slot/>
    </div>
</template>

<script>
    import '../less/SliderItem.less'
    export default {
        name: "SliderItem",
        data() {
            return {
                index: '', // 当前项在父元素的索引
                translate: 0 // 移动距离
            }
        },
        computed: {
            style() {
                return {
                    webkitTransform: `translate${this.$parent.orientation}(${this.translate}px)`,
                    transform: `translate${this.$parent.orientation}(${this.translate}px)`
                }
            }
        },
        beforeCreate() {
            this.$parent.items.push(this);
        },
        created() {
            this.index = this.$parent.items.indexOf(this);
        },
        destroyed() {
            this.index = this.$parent.items.indexOf(this);
            this.$parent.items.splice(this.index, 0)
        }
    }
</script>
