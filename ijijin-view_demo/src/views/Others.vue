<!-- 
 全局组件
 -->

<template>
    <section class="m-ctn m-global_ctn">
        <h1>其他</h1>
        <ul>
            <li>
                <v-button className="u-item_btn" link="#/pullrefresh">下拉刷新</v-button>
            </li>
	    <li>
                <v-button className="u-item_btn" link="#/pullwindow">上拉弹窗</v-button>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Others',
        data () {
            return {}
        }
    }
</script>

