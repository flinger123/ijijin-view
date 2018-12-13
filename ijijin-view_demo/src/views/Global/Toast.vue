<!-- 
 弹窗
 -->

<template>
    <section class="m-ctn m-alert_ctn">
        <h1>通知</h1>
        <p class="f-ft_sub_ g-fs24 g-mb20">*点击下列按钮体验效果</p>
        <div>
            <h4>1.简易方式</h4>
            <v-button className="u-item_btn" @click="easyTest">体验</v-button>
        </div>

        <div>
            <h4>2.其他位置</h4>
            <v-button className="u-item_btn" @click="simpleTest1">体验top</v-button>
            <v-button className="u-item_btn" @click="simpleTest2">体验middle</v-button>
        </div>

        <div>
            <h4>3.颜色修改</h4>
            <v-button className="u-item_btn" @click="styleTest">体验</v-button>
        </div>

        <div>
            <h4>4.展示时间修改</h4>
            <v-button className="u-item_btn" @click="durationTest">体验</v-button>
        </div>

        <div>
            <h4>4.带icon的通知</h4>
            <v-button className="u-item_btn" @click="iconTest">体验</v-button>
        </div>

        <div>
            <h4>5.特殊弹窗样式</h4>
            <v-button className="u-item_btn" @click="classNameTest">体验</v-button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Alert',
        data () {
            return {}
        },

        methods: {
            /* 1.简易方式 */
            easyTest () {
                this.$toast.show('这是一个通知');
            },

            /* 2.普通方式 */
            simpleTest1 () {
                this.$toast.show({
                    type: 'top',
                    message: '这是一个普通的通知（top）'
                });
            },

            simpleTest2 () {
                this.$toast.show({
                    type: 'middle',
                    message: '这是一个普通的通知（middle）'
                });
            },

            /* 3.无按钮 */
            styleTest () {
                this.$toast.show({
                    message: '这是一个改了样式的通知',
                    color: 'yellow',
                    backgroundColor: '#aaa'
                });
            },

            /* 展示时间修改 */
            durationTest () {
                this.$toast.show({
                    message: '这是一个改了展示时间的通知',
                    duration: 6000
                });
            },

            /* 4.带icon的通知 */
            iconTest () {
                this.$toast.show({
                    message: '这是一个带icon的通知',
                    icon: 'check-circle'
                })
            },

            /* 5.特殊通知样式 */
            classNameTest () {
                this.$toast.show({
                    className: 'z-success',
                    type: 'middle',
                    icon: 'check-circle-fill',
                    message: '这是一个特殊的通知'
                });
            }
        }
    }
</script>

<style lang="less">
    .vu-toast.z-success {
        padding-top: .5rem;
        padding-bottom: .5rem;
        line-height: 1.3rem;
        .icon-check-circle-fill{
            display: block;
            font-size: 1rem;
            height: 1.3rem;
            line-height: 1.3rem;
        }
    }
</style>