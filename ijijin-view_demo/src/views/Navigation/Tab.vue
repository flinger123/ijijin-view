<template>
    <section>
        <h1>Tab栏组件</h1>
        <tab-head v-model="index" :tabs="tabs"></tab-head>
        <tab-body v-model="index">
            <tab-body-item v-for="(item, index) in tabs" :key="index">
                <div class="tab-test-item u-pt40">
                    {{item}}
                </div>
            </tab-body-item>
        </tab-body>
    </section>
</template>

<script>
    import TabHead from '@/components/TabHead'
    import TabBody from '@/components/TabBody'
    import TabBodyItem from '@/components/TabBodyItem'
    export default {
        name: "Tab",
        data(){
          return{
              tabs:['tab1','tab2','tab3'],
              index:0
          }
        },
        components:{
            TabHead,
            TabBody,
            TabBodyItem
        }
    }
</script>

<style>
    .tab-test-item{
        height: 80vh;
    }
</style>