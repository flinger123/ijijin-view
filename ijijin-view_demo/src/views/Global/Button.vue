<!-- 
 按钮
 -->

<template>
    <section class="m-ctn m-button_ctn">
        <h1>按钮</h1>

        <div>
            <h4>1.默认</h4>
            <v-button>默认按钮</v-button>
        </div>

        <div>
            <h4>2.颜色按钮</h4>
            <v-button type="red">红色按钮</v-button>
            <v-button type="red_bd">红色边框按钮</v-button>

            <v-button type="blue">蓝色按钮</v-button>
            <v-button type="blue_bd">蓝色边框按钮</v-button>

            <v-button type="gray_bd">灰色边框按钮</v-button>
            <p style="background: #000;"><v-button type="white">白色按钮</v-button></p>
        </div>

        <div>
            <h4>3.disabled按钮</h4>
            <v-button disabled="true">disabled</v-button>
        </div>

        <div>
            <h4>4.带链接跳转</h4>
            <v-button link="http://fund.10jqka.com.cn">跳转</v-button>
        </div>

        <div>
            <h4>5.自定义按钮</h4>
            <v-button className="btn-test z-noradius">btn1</v-button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Button',
        data () {
            return {}
        },

        methods: {

        }
    }
</script>

<style lang="less">
    .m-button_ctn {
        & > div {
            margin-bottom: 20px;
        }

        .vu-btn {
            margin: 0.2rem;
            padding: 0.133rem;

            &.btn-test{
                background-color: green;
                color: red;
                width: 80%;
                height: 1rem;
                line-height: 1rem;
                font-size: 0.8rem;   
            }
        }
    }
</style>