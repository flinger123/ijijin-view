<!-- 
 tab head
 -->

<template>
    <div class="vu-tab-head">
        <ul class="vu-tab-head-list">
            <li class="vu-tab-head-item" v-for="(item, index) in tabs" :key="index">
                <button :class="{'z-active':value === index, 'btnInitStyle': true}"
                        class="vu-tab-head-item-btn g-box_b" @click="_clickTab(index)">
                    {{item}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    import '../less/TabHead.less'
    export default {
        name: "TabHead",
        props: {
            tabs: { // 数组 ['tab1','tab2','tab3']
                type: Array,
                required: true
            },
            value: Number
        },
        data() {
            return {}
        },
        methods: {
            /**
             * 点击一项
             * @private
             * @param index
             */
            _clickTab(index) {
                this.$emit('input', index);
            }
        }
    }
</script>
