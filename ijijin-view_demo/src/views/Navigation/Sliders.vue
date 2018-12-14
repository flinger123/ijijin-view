<template>
    <section>
        <h1 class="g-mb60">轮播组件</h1>
        <h4>1.横向</h4>
        <slider orientation="X" class="g-mb50">
            <slider-item>
                <div class="test-item blue"></div>
            </slider-item>
            <slider-item>
                <div class="test-item red"></div>
            </slider-item>
            <slider-item>
                <div class="test-item green"></div>
            </slider-item>
        </slider>

        <h4>2.改变控制器列表方向</h4>
        <slider orientation="X" controlPosition="left" class="g-mb50">
            <slider-item>
                <div class="test-item blue"></div>
            </slider-item>
            <slider-item>
                <div class="test-item red"></div>
            </slider-item>
            <slider-item>
                <div class="test-item green"></div>
            </slider-item>
        </slider>

        <h4>3.纵向</h4>
        <slider orientation="Y" controlPosition="left">
            <slider-item>
                <div class="test-item blue"></div>
            </slider-item>
            <slider-item>
                <div class="test-item red"></div>
            </slider-item>
            <slider-item>
                <div class="test-item green"></div>
            </slider-item>
        </slider>
    </section>
</template>

<script>
    import Slider from 'ijijin-view/vue/Slider'
    import SliderItem from 'ijijin-view/vue/SliderItem'

    export default {
        name: "Sliders",
        components: {
            'slider': (resolve) => {
                setTimeout(()=>{
                    resolve(Slider)
                },0)
            },
            'slider-item': (resolve) => {
                setTimeout(()=>{
                    resolve(SliderItem)
                },0)
            }
        },
    }
</script>

<style lang="less">
    .test-item {
        height: 120px;
        width: 100%;
        &.blue {
            background-color: #01a2fc;
        }
        &.red {
            background-color: #fe5d4e;
        }
        &.green {
            background-color: #009801;
        }
    }
</style>