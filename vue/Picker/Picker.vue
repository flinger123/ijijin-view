<!-- 
 选择器
 -->

<template>
    <section>
        <div class="vu-picker"
             @touchstart.stop="_onTouchStart"
             @touchmove.prevent="_onTouchMove"
             @touchend.stop="_onTouchEnd"
             @touchcancel.stop="_onTouchEnd"
             :style="wrapStyle"
        >
            <ul class="vu-wrap_trace" :style="traceStyle">
                <li :key="index"
                    v-for="(item,index) in data"
                    :style="itemStyle" :class="{'active':value === index}">{{item}}
                </li>
            </ul>
            <div class="vu-pick g-box_b" :style="pickStyle"></div>
        </div>
    </section>
</template>

<script>
    import '../less/Picker.less'
    import Touch from '../utils/touch'

    export default {
        name: "Picker",
        mixins: [Touch],
        props: {
            data: { // 数据
                type: Array,
                required: true
            },
            showNum: { // 显示选择项的个数
                type: Number,
                default: 5
            },
            height: { //  每一个选项的高度
                type: Number,
                default: 40
            },
            columnIndex: Number, // 当前选择器索引 联动选择器时使用
            value: { // 当前选择项的索引
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                move: 0, // 移动的距离
                cacheMove: 0, // 缓存距离
            }
        },
        computed: {
            // 路径样式
            traceStyle() {
                return {
                    webkitTransitionDuration: `${this.duration}ms`,
                    transitionDuration: `${this.duration}ms`,
                    webkitTransform: `translate3d(0, ${this.move}px, 0)`,
                    transform: `translate3d(0, ${this.move}px, 0)`
                }
            },
            // 容器样式
            wrapStyle() {
                return {
                    height: `${this.height * this.showNum}px`
                }
            },
            // 项样式
            itemStyle() {
                return {
                    height: `${this.height}px`,
                    lineHeight: `${this.height}px`
                }
            },
            // 选择轴样式
            pickStyle() {
                return {
                    height: `${this.height}px`,
                    top: `${this.height * Math.floor(this.showNum / 2)}px`
                }
            }
        },
        methods: {
            /**
             * 初始化数据
             * @private
             * @param init 是否是第一次初始化
             */
            _init(init) {
                this.move = 0;
                this.initIndex = Math.floor(this.showNum / 2);
                this._moveForIndex();
                this.length = this.data.length;
                this.min = this.height * this.initIndex + this.height; // 移动的最小值
                this.max = this.height * (this.length - Math.ceil(this.showNum / 2)) + this.height; // 最大值
                this._output(init); // 初始化对外输出一次
            },
            /**
             * 根据index改变移动距离
             * @private
             */
            _moveForIndex() {
                this.move = -((this.value - this.initIndex) * this.height);
                this.cacheMove = this.move;
            },
            _onTouchStart(e) {
                this.touchStart(e)
            },
            _onTouchMove(e) {
                this.touchMove(e);
                let move = this.cacheMove + this.deltaY;
                if (move > this.min || move < -this.max) return;
                this.move = move;
            },
            _onTouchEnd() {
                let moveIndex = this.move / this.height - this.initIndex;
                moveIndex > 0 && (moveIndex = 0);// 小于最小值
                moveIndex < -(this.length - 1) && (moveIndex = -(this.length - 1)); // 大于最大值
                this.move = (Math.round(moveIndex) + this.initIndex) * this.height;
                this.cacheMove = this.move; // 缓存本次移动距离
                this._output();
            },
            /**
             * 对外输出值
             * @private
             */
            _output(init) {
                let value = Math.abs((this.move / this.height) - this.initIndex);// 移动到的位置
                if (value === this.value && !init) return; // 如果没有变化不对外输出
                this.$emit('input', value);
                let changeData = {value: this.data[value], index: value}; // 封装数据向外抛出
                this.columnIndex !== undefined ? changeData.columnIndex = this.columnIndex : '';
                this.$emit('change', changeData);
            }
        },
        watch: {
            // 父元素改变value的情况
            value() {
                this._moveForIndex()
            },
            // 监听当数据变化时，重新初始化数据
            data() {
                this._init();
            }
        },
        created() {
            if (this.$parent.items) {
                this.$parent.items.push(this)
            }
            this._init(true)
        }
    }
</script>
