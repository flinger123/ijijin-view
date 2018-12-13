<!-- 
 全局组件
 -->

<template>
    <section class="m-ctn m-global_ctn">
        <h1>全局组件</h1>
        <ul>
            <li>
                <v-button className="u-item_btn" link="#/alert">弹窗</v-button>
            </li>
            <li>
                <v-button className="u-item_btn" link="#/toast">通知</v-button>
            </li>
            <li>
                <v-button className="u-item_btn" link="#/button">按钮</v-button>
            </li>
            <li>
                <v-button className="u-item_btn" link="#/icon">图标</v-button>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Global',
        data () {
            return {}
        }
    }
</script>

