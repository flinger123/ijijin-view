<template>
    <section>
        <h1 class="g-mb60">滚动通知</h1>
        <h4>1.默认</h4>
        <horse-race-lamp :list="list"></horse-race-lamp>

        <h4>2.带跳转，调整变化时间</h4>
        <horse-race-lamp :list="list2" :time="1500"></horse-race-lamp>

        <h4>3.修改样式</h4>
        <horse-race-lamp :list="list3" height="2" backgroundColor="#f00" :styles="{color: 'yellow', 'fontSize': '16px', 'fontStyle': 'italic'}"></horse-race-lamp>
    </section>
</template>

<script>
    import HorseRaceLamp from '@/components/HorseRaceLamp'

    export default {
        name: "HorseRaceLamp",
        data(){
          return {
              list: ['notice 1', 'notice 2', 'notice 3', 'notice 4', 'notice 5'],
              list2: [
                { text: 'notice 1', url: 'https://testfund.10jqka.com.cn/public/whw/ijijin-ui/dist/' },
                { text: 'notice 2', url: 'https://testfund.10jqka.com.cn/public/whw/ijijin-ui/dist/' }
              ],
              list3: ['notice 1', 'notice 2', 'notice 3', 'notice 4', 'notice 5']
          }
        },
        components:{
            'horse-race-lamp': HorseRaceLamp
        }
    }
</script>

<style>
    .tab-test-item{
        height: 80vh;
    }
</style>