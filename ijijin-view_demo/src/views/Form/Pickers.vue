<template>
    <section>
        <h1 class="g-mb20">选择器</h1>
        <div class="g-mb30">
            <h4 class="g-mb30">1、单个选择器</h4>
            <div>
                value:{{pickerResult.value}}，index:{{pickerResult.index}}
            </div>
            <picker v-model="pickerValue" @change="changePicker" :data="pickerData">

            </picker>
        </div>
        <div class="g-mb30">
            <h4 class="g-mb30">2、选择器组</h4>
            <div>
                <p v-for="(item,index) in pickerGroupResult.data" :key="index ">
                    line{{index}}：value:{{item.value}} , index:{{item.index}}
                </p>
            </div>
            <picker-group v-model="pickerGroupValue" :data="pickerGroupData" @change='changePickerGroup'>

            </picker-group>
        </div>

    </section>
</template>

<script>
    import Picker from '@/components/Picker'
    import PickerGroup from '@/components/PickerGroup'

    let provincesData = [
        {provinces: '浙江', city: ['杭州', '温州', '嘉兴', '海宁', '绍兴']},
        {provinces: '江苏', city: ['南京', '苏州', '常州']},
        {provinces: '广州', city: ['广东', '深圳', '东莞']},
        {provinces: '青海', city: ['西宁', '格尔木', '海东', '玉树']},
        {provinces: '西藏', city: ['拉萨', '林芝', '山南']},
    ];
    export default {
        name: "Pickers",
        data() {
            return {
                // 单个选择器
                pickerValue: 0,
                pickerResult: {},
                pickerData: ['西瓜', '苹果', '猕猴桃', '梨', '桂圆'],

                // 选择器组
                pickerGroupValue: [0, 1],
                pickerGroupResult: {},
                pickerGroupData: [['浙江', '江苏', '广州', '青海', '西藏'], ['杭州', '温州', '嘉兴', '海宁', '绍兴']],
            }
        },
        methods: {
            changePicker(data) {
                this.pickerResult = data;
            },
            changePickerGroup(data) {
                data.$picker.setColumnData(provincesData[data.index].city, data.column + 1, true);
                this.pickerGroupResult = data;
            }
        },
        components: {
            Picker,
            PickerGroup
        }
    }
</script>

<style>

</style>