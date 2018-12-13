<!-- 
 tab body item
 -->

<template>
    <div class="vu-tab-body-item g-box_b">
        <slot v-if="load"/>
    </div>
</template>

<script>
    import '../less/TabBodyItem.less'
    export default {
        name: "TabBodyItem",
        props: {
            canMove: { // 该项时候可以滑动切换
                type: Boolean,
                default: true,
            }
        },
        data() {
            return {
               load:false
            }
        },
        
        watch:{
            '$parent.ownIndex' () {
                if (this.load) return;
                if (!this.$parent.lazy) { // 如果不是分页面加载（入口统一加载）
                    this.load = true;
                }
                if (this.$parent.ownIndex === this.index) { // 当前子项显示
                    this.load = true;
                }
            }
        },

        beforeCreate() {
            this.$parent.items.push(this); // 进入页面载入父元素列表项
        },

        created() {
            this.index = this.$parent.items.indexOf(this); // 当前项在父元素的索引
        },

        destroyed() {
            this.index = this.$parent.items.indexOf(this);
            this.$parent.items.splice(this.index, 1); // 销毁从父元素列表项中删除
        }
    }
</script>
