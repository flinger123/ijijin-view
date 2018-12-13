<template>
    <transition name="vu-trans-win">
        <section class="vu-bottom-picker" v-if="show">
            <div class="vu-bottom-picker-content">
                <div class="vu-bottom-picker-content-operate u-p10">
                    <v-button className="g-fs30" type="white" @click="close">取消</v-button>
                    <v-button className="g-fs30" type="white" class="f-cr_blue" @click="ensure">确认</v-button>
                </div>
                <picker :data="data" v-model="value"></picker>
            </div>
        </section>
    </transition>
</template>

<script>
    import Mask from '../Mask'
    import Picker from '../Picker'

    export default {
        name: "BottomPicker",
        mixins: [Mask],
        props: {
            data: {
                type: Array,
                required: true
            },
            show: Boolean,
            index: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                value: this.index
            }
        },
        components: {
            Picker
        },
        methods: {
            close() {
                this.$emit('close')
            },
            ensure() {
                this.$emit('ensure', this.value)
            }
        }
    }
</script>

<style lang="less">
    .vu-bottom-picker {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 19;
        -webkit-transition: 0.5s;
        transition: 0.5s;
    }
    .vu-bottom-picker-content {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding-bottom: 20px;
        background-color: #fff;
        .vu-bottom-picker-content-operate {
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
        }
    }

    .vu-trans-win-enter, .vu-trans-win-leave-active {
        -webkit-transform: translate3d(0, 12rem, 0) !important;
                transform: translate3d(0, 12rem, 0) !important;
    }
</style>