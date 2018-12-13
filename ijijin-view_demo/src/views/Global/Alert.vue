<!-- 
 弹窗
 -->

<template>
    <section class="m-ctn m-alert_ctn">
        <h1>弹窗</h1>
        <p class="f-ft_sub_ g-fs24 g-mb20">*点击下列按钮体验效果</p>
        <div>
            <h4>1.简易方式</h4>
            <v-button className="u-item_btn" @click="easyTest">体验</v-button>
        </div>

        <div>
            <h4>2.普通方式</h4>
            <v-button className="u-item_btn" @click="simpleTest1">体验1</v-button>
            <v-button className="u-item_btn" @click="simpleTest2">体验2</v-button>
        </div>

        <div>
            <h4>3.无按钮</h4>
            <v-button className="u-item_btn" @click="noBtnTest">体验</v-button>
        </div>

        <div>
            <h4>4.特殊弹窗样式</h4>
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
                this.$alert.show('这是一个弹窗');
            },

            /* 2.普通方式 */
            simpleTest1 () {
                this.$alert.show({
                    title: '温馨提示',
                    content: '<p class="f-tl">这是一个弹窗</p><p class="f-tc"><img src="//s.thsi.cn/ijijin/image/i-logo.png"><br><strong class="f-cr_red">普通的弹窗</strong></p>'
                });
            },

            simpleTest2 () {
                this.$alert.show({
                    title: '温馨提示',
                    content: '这是一个普通的弹窗（2）',
                    btns: [
                        { text: '不好' },
                        { text: '好', className: 'f-cr_red', callback: () => {
                            this.$alert.hide();
                            this.$toast.show('你点了好');   // 通知
                        } }
                    ]
                });
            },

            /* 3.无按钮 */
            noBtnTest () {
                this.$alert.show({
                    title: '提示',
                    content: '这是一个没有按钮的弹窗',
                    noBtn: true,
                    maskClick: () => {  // 点击蒙板隐藏弹窗
                        this.$alert.hide();
                    }
                })
            },

            /* 4.特殊弹窗样式 */
            classNameTest () {
                this.$alert.show({
                    className: 'f-bg',
                    title: '哦提示',
                    content: '这是一个特殊的弹窗',
                    maskStyle: {
                        backgroundColor: 'rgba(0, 120, 120, .6)'
                    }
                });
            }
        }
    }
</script>

<style lang="less">
    .vu-alert {
        .m-win.f-bg{
            width: 80%;
            background-image: url(./bg_win.jpg);
            background-repeat: no-repeat;
            background-size: 100% auto;

            .m-tit{
                padding-top: 0.4rem;
                padding-bottom: 0.4rem;
                font-size: 0.453rem;
            }
            .m-ctn{
                text-align: left;
                font-size: 0.347rem;
                line-height: 0.587rem;
            }
        }
    }
</style>