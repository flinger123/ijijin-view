<template>
    <section>
        <h1 class="g-mb60">下拉刷新</h1>
        <h4>1.默认</h4>
        <pull-refresh v-model="pullRefreshLoading" @refresh="onRefresh">
            <div class="f-bg_red" style="min-height: 4rem;">此块区域可下拉刷新</div>
        </pull-refresh>

        <h4>2.图、自定义文案</h4>
        <pull-refresh 
            v-model="pullRefreshLoading2" 
            @refresh="onRefresh2"
            pullingText="要不下拉试试？"
            loadingText="等我加载下"
            loosingText="够了，你该放手了"
            logoImg="//s.thsi.cn/ijijin/image/kyc/man_raising_hand.png"
        >
            <div class="f-bg_blue" style="min-height: 4rem;">此块区域可下拉刷新</div>
        </pull-refresh>

        <h4>3.无图</h4>
        <pull-refresh 
            v-model="pullRefreshLoading3" 
            @refresh="onRefresh3"
            :logoImg="false"
        >
            <div class="f-bg_yellow" style="min-height: 4rem;">此块区域可下拉刷新</div>
        </pull-refresh>
    </section>
</template>

<script>
    import PullRefresh from '@/components/PullRefresh'

    export default {
        name: "PullRefresh",
        data () {
            return {
                pullRefreshLoading: false,
                pullRefreshLoading2: false,
                pullRefreshLoading3: false,
            }
        },
        components: {
            'pull-refresh': PullRefresh
        },

        methods: {
            onRefresh () {
              setTimeout(() => {
                this.$toast.show('test success');
                this.pullRefreshLoading = false;
              }, 1000);
            },

            onRefresh2 () {
              setTimeout(() => {
                this.$toast.show('test 2 success');
                this.pullRefreshLoading2 = false;
              }, 1000);
            },

            onRefresh3 () {
              setTimeout(() => {
                this.$toast.show('test 3 success');
                this.pullRefreshLoading3 = false;
              }, 1000);
            }
        },

        created () {
            this.$toast.show({
                message: '该组件涉及到移动触控事件，请确认在移动端体验',
                duration: 4000
            });
        }
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

    .f-bg_red {
        background-color: #fe5d4e;
    }
    .f-bg_blue {
        background-color: #1B90ff;
    }
    .f-bg_yellow {
        background-color: #facc14;
    }
</style>