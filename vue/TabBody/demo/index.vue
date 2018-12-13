<template>
    <tab-head :click="clickTab" :tabs="tabs" :index="tabIndex"></tab-head>
    <tab-body @change="changeTab" :index="tabIndex">
        <tab-body-item>
            <red-packet-list></red-packet-list>
        </tab-body-item>
        <tab-body-item>
            <award></award>
        </tab-body-item>
    </tab-body>
</template>

<script>
    export default {
        name: "example",
        data(){
            return{
                tabIndex: 0,// 设置默认的tab值
                tabs:['tab1','tab2','tab3']
            }
        },
        methods:{
            clickTab(index){}, // tab-head点击后执行 参数是点击项的索引
            changeTab(index){} //tab-body缓动切换后触发，参数是滑动项的索引
        }
    }
</script>