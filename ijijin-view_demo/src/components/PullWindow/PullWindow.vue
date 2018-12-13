<!-- 
 上拉弹窗
 -->

<template>
    <div class="vu-pull-window">
        <transition name="vu-trans-win">
            <div class="vu-select" v-show="show">
                <header class="g-pr f-b_1px bb_1px">
                    <em class="u-icon icon-close g-pa f-bg_cover j-close" @click="_close"></em>
                    <h4>{{title}}<a v-if="titleRight" @click="_handleTitleRight" class="f-fr g-pa">{{titleRight}}</a></h4>
                </header>
                <section class="m-v_ctn u-scrollItem">
                    <slot></slot>
                </section>
            </div>
        </transition>

        <v-mask :show="show" @click="_close"></v-mask>
    </div>
</template>

<script>
    import Mask from '../Mask/mask.vue'
    import '../less/PullWindow.less'

    export default {
        name: 'pull-window',

        components: {
            'v-mask': Mask
        },

        props: {
            title: {
                type: String,
                default: ''
            },
            close: {
                default () {}
            },
            clickRight: {
                default () {}
            },
            titleRight: {
                type: String,
                default: ''
            },
            
            value: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            show () {
                return this.value
            }
        },

        methods: {
            _close() {
                if (this.close) this.close();
                this.$emit('input', false);
            },

            _handleTitleRight() {
                if (this.clickRight) this.clickRight();
                else this._close();
            }
        }
    }
</script>
