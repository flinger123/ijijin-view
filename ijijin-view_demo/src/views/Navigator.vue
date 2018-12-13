<!--
    导航组件
-->
<template>
    <section class="m-ctn m-navigation_ctn">
        <h1>导航组件</h1>
        <ul>
            <li>
                <v-button className="u-item_btn" link="#/tab">Tab栏</v-button>
            </li>
            <li>
                <v-button className="u-item_btn" link="#/sliders">轮播图</v-button>
            </li>
            <li>
                <v-button className="u-item_btn" link="#/horseracelamp">滚动通知</v-button>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {}
        }
    }
</script>

<style>

</style>