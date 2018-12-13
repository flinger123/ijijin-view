<!-- 
 轮播图
 -->
<template>
    <section class="vu-slider" :style="sliderStyle">
        <div ref="content" class="vu-content-list" :style="[contentInitStyle,contentStyle]" @touchstart="_onTouchStart"
             @touchmove="_onTouchMove" @touchend="_onTouchEnd">
            <slot/>
        </div>
        <div class="vu-control-list" :style="controlStyle" v-show="items.length > 1">
            <em class="u-icon_il" v-for="(item,index) in items" @click="_clickControl(index)" :key="index"
                :class="{'active': index === activeIndex}"></em>
        </div>
    </section>
</template>

<script>
    import '../less/Slider.less'
    import Touch from '../utils/touch'

    export default {
        name: "Slider",
        mixins: [Touch],
        props: {
            duration: { // 动画时间
                type: Number,
                default: 500
            },
            time: { // 切换间隔时间
                type: Number,
                default: 2000
            },
            auto: { // 自动播放
                type: Boolean,
                default: true
            },
            orientation: { // 轮播方向
                default: 'X',
                validator: function (value) {
                    return ['X', 'Y'].indexOf(value) !== -1
                }
            },
            controlPosition: { // 控制按钮位置
                default: 'bottom',
                validator: function (value) {
                    return ['left', 'bottom', 'outside', 'none'].indexOf(value) !== -1
                }
            },
            controlClick: { // 是否可以点击控制
                default: true,
                type: Boolean
            }
        },
        data() {
            return {
                items: [], // 轮播项数组
                currentIndex: 0, // 当前展示项
                distance: '',  // 每一次移动的距离
                translateDistance: 0, // 移动的总距离
                canMove: true, // 是否移动动画
                height: '', // 高度
            }
        },
        watch: {
            currentIndex(newvalue, oldvalue) { //  监听当前轮播索引 改变则事件输出
                if (newvalue === oldvalue) return false;

                let value = this.currentIndex;
                if (value === this.items.length) value = 0;
                this.$emit('change', value)
            }
        },
        computed: {
            // 容器初始化总样式
            sliderStyle() {
                let style = {
                    maxHeight: `${this.height}px`,
                };
                if (this.controlPosition === 'outside') {
                    style.paddingBottom = '30px'
                }
                return style
            },

            // 轮播初始样式
            contentInitStyle() {
                return this.orientation === 'Y' && {
                    display: 'block'
                } || {}
            },

            // 轮播活动样式
            contentStyle() {
                return {
                    webkitTransitionDuration: this.canMove ? `${this.duration}ms` : '0ms',
                    transitionDuration: this.canMove ? `${this.duration}ms` : '0ms',
                    webkitTransform: `translate${this.orientation}(${this.translateDistance}px)`,
                    transform: `translate${this.orientation}(${this.translateDistance}px)`
                };
            },

            // 控制索引的
            activeIndex() {
                if (this.currentIndex < 0) return this.items.length - 1;
                if (this.currentIndex === this.items.length) return 0;
                return this.currentIndex;
            },

            // 控制列表样式
            controlStyle() {
                let _styleObj = {
                    // 控制点在左侧
                    left: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        webkitTransform: 'rotate(90deg)',
                        transform: 'rotate(90deg)'
                    },
                    // 控制点在轮播底部
                    bottom: {
                        width: '100%',
                        bottom: 0
                    },
                    // 控制点在轮播外面
                    outside: {
                        width: '100%',
                        position: 'relative'
                    }
                };

                return _styleObj[this.controlPosition] || {
                    display: 'none'
                }
            }
        },
        methods: {
            /**
             * 初始化
             */
            _init() {
                if (this.items.length < 2) return;
                this._cache();
                this._autoPlay()
            },

            /**
             * 缓存一些常用变量
             */
            _cache() {
                this.height = this.items[0].$el.offsetHeight;
                this.$nextTick(()=>{
                    this.distance = this.orientation === 'X' ? this.$refs.content.offsetWidth : this.items[0].$el.offsetHeight; // 一屏宽度/高度
                });
                this.firstChild = this.items[0]; // 第一个子元素
                this.lastChild = this.items[this.items.length - 1]; // 最后一个子元素
            },

            // touch事件
            _onTouchStart(e) {
                clearTimeout(this.timeout);
                this.touchStart(e);
            },
            _onTouchMove(e) {
                this.touchMove(e);
                e.preventDefault();
            },
            _onTouchEnd() {
                if (this[`offset${this.orientation}`] < 30) { // 滑动距离过小，则不切换
                    return this._autoPlay();
                }
                let index = this.currentIndex;
                this[`delta${this.orientation}`] > 0 ? index-- : index++;
                if (index < 0) {
                    this._first()
                } else if (index > this.items.length - 1) {
                    this._last()
                }
                this._moveTo(index);
            },
            /**
             * 点击控制点
             * @param index
             */
            _clickControl(index) {
                if (!this.controlClick) return;
                this._moveTo(index)
            },
            /**
             * 移动到指定位
             * @param index
             */
            _moveTo(index = 0) {
                this.canMove = true;
                clearTimeout(this.timeout);
                this._move(index);
                this.currentIndex = index;
                if (this.auto) {
                    this._autoPlay()
                }
            },
            /**
             * 移动
             * @param index 索引
             */
            _move(index = 0) {
                this.translateDistance = -index * this.distance
            },
            /**
             * 移动到第一个的情况
             */
            _first() {
                if (this.items.length < 2) return;
                this.lastChild.translate = -this.items.length * this.distance;
                setTimeout(() => {
                    this.canMove = false;
                    this.currentIndex = this.items.length - 1;
                    this.lastChild.translate = 0;
                    this._move(this.items.length - 1)
                }, this.duration)
            },
            /**
             * 移动到最后一个的情况
             */
            _last() {
                if (this.items.length < 2) return false;
                this.firstChild.translate = this.items.length * this.distance;
                setTimeout(() => {
                    this.canMove = false;
                    this.currentIndex = 0;
                    this.firstChild.translate = 0;
                    this._move(0)
                }, this.duration)
            },
            /**
             * 滚动
             */
            _autoPlay() {
                if (!this.auto) return;
                clearTimeout(this.timeout);

                this.timeout = setTimeout(() => {
                    if (!document.hidden) {
                        this.canMove = true;
                        this.currentIndex++;
                        this._move(this.currentIndex);
                        if (this.currentIndex >= this.items.length) {
                            this._last()
                        }
                    }
                    this._autoPlay()
                }, this.time);
            }
        },
        mounted() {
            this._init() // 入口
        },
    }
</script>
