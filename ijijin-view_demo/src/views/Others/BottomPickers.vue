<template>
    <section>
        <v-button class="u-item_btn g-mb20" @click="showPicker">
            显示底部选择器
        </v-button>
        <p v-show="pickerData[value]">index:{{value}},value:{{pickerData[value]}}</p>
        <bottom-picker :show="show" :data="pickerData" :index="value" @close="close" @ensure="ensure"></bottom-picker>
    </section>
</template>

<script>
    import BottomPicker from '@/components/BottomPicker'

    export default {
        name: "BottomPickers",
        data() {
            return {
                pickerData: ['A', 'B', 'C', 'D', 'E', 'F'],
                show: false,
                value: -1
            }
        },
        components: {
            BottomPicker
        },
        methods: {
            close() {
                this.show = false
            },
            ensure(data) {
                this.value = data;
                this.$toast.show(`选择索引为${data},值为${this.pickerData[data]}`);
                this.show = false;
            },
            showPicker(){
                this.show = true;
            }
        }
    }
</script>
