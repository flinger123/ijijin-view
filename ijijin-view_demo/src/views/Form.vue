<!-- 
 表单组件
 -->

<template>
    <section class="m-ctn m-global_ctn">
        <h1>表单组件</h1>
        <ul>
            <li>
                <v-button className="u-item_btn" link="#/input">输入框</v-button>
            </li>
            <li>
                <v-button className="u-item_btn" link="#/pickers">选择器</v-button>
            </li>
            <li>
                <v-button className="u-item_btn" link="#/bottompicker">底部选择器</v-button>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'Form',
        data () {
            return {}
        }
    }
</script>

