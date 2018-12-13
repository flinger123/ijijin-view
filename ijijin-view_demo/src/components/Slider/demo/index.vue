<template>
    <div>
        <slider orientation="X">
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
    </div>
</template>

<script>
    import Slider from '../Slider'
    import SliderItem from '../../SliderItem'
    export default {
        name: "SliderDemo",
        components:{
            'slider': Slider,
            'slider-item': SliderItem
        }
    }
</script>

<style scoped lang="less">
    .test-item{
        height: 120px;
        width: 100%;
        &.blue{
            background-color: #01a2fc;
        }
        &.red{
            background-color: #fe5d4e;
        }
        &.green{
            background-color: #009801;
        }
    }
</style>