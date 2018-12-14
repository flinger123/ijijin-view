<template>
    <section>
        <h1 class="g-mb60">上拉弹窗</h1>
        <h4>1.默认</h4>
        <v-button className="u-item_btn" @click="pullwindowshow = true">点击显示弹窗1</v-button>
        <pull-window v-model="pullwindowshow" title="默认弹窗" :close="winClose" titleRight="遇到问题?" :clickRight="win1click">
            <div style="min-height: 4rem;">弹窗内容1</div>
        </pull-window>

        <h4>1.无标题、无右侧点击</h4>
        <v-button className="u-item_btn" @click="pullwindowshow2 = true">点击显示弹窗2</v-button>
        <pull-window v-model="pullwindowshow2" :close="winClose2">
            <div style="min-height: 4rem;">弹窗内容2</div>
        </pull-window>
    </section>
</template>

<script>
    import PullWindow from 'ijijin-view/vue/PullWindow'

    export default {
        name: "PullWindow",
        data () {
            return {
                pullwindowshow: false,
                pullwindowshow2: false,
            }
        },
        components: {
            'pull-window': PullWindow
        },

        methods: {
            winClose () {
                this.pullwindowshow = false;
            },
            win1click () {
                this.$toast.show('PullWindow right clicked.');
            },

            winClose2 () {
                this.pullwindowshow2 = false;
            },
        },

        created () {

        }
    }
</script>
