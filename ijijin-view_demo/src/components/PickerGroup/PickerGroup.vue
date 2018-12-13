<!-- 
 联动选择器
 -->

<template>
    <section class="vu-picker-group">
        <picker v-for="(item,index) in data"
                v-model="value[index]"
                :data="item"
                :key="index"
                :columnIndex="index"
                @change="_changePicker"
        >
        </picker>
    </section>
</template>

<script>
    import '../less/PickerGroup.less'
    import Picker from '../Picker'

    export default {
        name: "PickerGroup",
        data() {
            return {
                pickerCount: 0, // 列数,
                items: [] // 选择器列表数组
            }
        },

        props: {
            data: { // 初始数据
                type: Array,
                required: true
            },
            value: Array
        },

        components: {
            Picker
        },

        methods: {
            /**
             * 初始化
             * @private
             */
            _init() {
                this.pickerCount = this.data.length; // 列数
            },
            /**
             * 更改Picker
             * @private
             * @param data
             */
            _changePicker(data) {
                let value = this.value;
                let changeData = {
                    $picker: this,
                    column: data.columnIndex,
                    index: data.index,
                    value: data.value,
                    data: []
                }; // 填装当前变得选择器的值
                value[data.columnIndex] = data.index;
                for (let column = 0; column < this.pickerCount; column++) { // 遍历当前选择器值 填装
                    changeData.data.push({
                        value: this.data[column][value[column]],
                        index: value[column],
                    });
                }

                this.$emit('input', value);
                this.$emit('change', changeData)
            },
            /**
             * 更改列表数据
             * @param data 数据
             * @param column 要改变数据的列
             * @param init  是否重置后面的选择器
             */
            setColumnData(data, column, init) {
                if (column >= this.pickerCount) return;
                this.data[column] = data;
                // 如果init是数组则重置数组中指定项的选择器 如果不是则重置之后所有的
                if (init) {
                    let value = this.value;
                    if (init instanceof Array) { // 重置指定的的
                        for (let i = 0, len = init.length; i < len; i++) {
                            let index = init[i];
                            value[index] && (value[index] = 0)
                        }
                    } else { // 重置所有
                        for (let i = column; i < this.pickerCount; i++) {
                            value[i] && (value[i] = 0)
                        }
                    }
                    this.$emit('input', value);
                }
            }
        },

        created() {
            this._init()
        }
    }
</script>
