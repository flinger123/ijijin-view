<!-- 
 tab body
 -->

<template>
    <div class="vu-tab-body"
         ref="tabBody"
         @touchmove.stop="_onTouchMove"
         @touchstart.stop="_onTouchStart"
         @touchend.stop="_onTouchEnd"
         @touchcancel.stop="_onTouchEnd"
        >
        <div class="vu-tab-body-container"
             :style="trackStyle"
        >
            <slot/>
        </div>
    </div>
</template>

<script>
    import '../less/TabBody.less'
    import Touch from '../utils/touch'

    export default {
        name: 'TabBody',
        mixins: [Touch],
        props: {
            lazy: { //  true - 懒加载 false - 一次性加载
                type: Boolean,
                default: true
            },
            duration: { // 动画时间(ms)
                type: Number,
                default: 500
            },
            safeDistance: { // 滑动时的安全距离（小于此值时不切换）
                type: Number,
                default: 60
            },
            value: Number // 外部索引
        },
        data() {
            return {
                width: 0, // 容器宽度
                ownIndex: 0,// 内部索引值
                slide: false, // transition动画
                items: [], // 子元素数组
                min: 0, // 最小值
                max: 0, // 最大值
                cacheOffset: 0,// 缓存移动距离
                offset: 0, // 移动距离 控制移动
            }
        },
        computed: {
            /**
             * 轨迹动画
             */
            trackStyle() {
                return {
                    webkitTransitionDuration: `${this.slide ? this.duration : 0}ms`,
                    transitionDuration: `${this.slide ? this.duration : 0}ms`,
                    webkitTransform: `translateX(-${this.offset}px)`,
                    transform: `translateX(-${this.offset}px)`
                }
            }
        },
        methods: {
            _init() {
                this.domReact = this.$el.getBoundingClientRect();
                this.width = this.domReact.width; // 容器宽度
                this.min = 0; // 最大值
                this.max = this.width * (this.items.length - 1); // 最小值
                this.offset = this.ownIndex * this.width; // 默认值初始化
                this.cacheOffset = this.offset; // 缓存偏移量
                this.items[this.ownIndex].load = true; // 默认项加载
                setTimeout(() => {
                   this.slide = true;
                },0)
            },
            _onTouchStart(e) {
                this.touchStart(e)
            },
            _onTouchMove(e) {
                this.touchMove(e);
            },
            _onTouchEnd() {
                if(!this.items[this.ownIndex].canMove) return;
                const move = this.cacheOffset - this.deltaX;
                if (this.offsetY < this.safeDistance && 
                    this.offsetX > this.safeDistance && 
                    move < this.max && 
                    move > this.min) {
                    this.cacheOffset > move ? Math.max(--this.ownIndex, this.min) : Math.min(++this.ownIndex, this.max);
                    this.offset = this.ownIndex * this.width;
                    this.cacheOffset = this.offset;
                    let _index = Math.abs(this.ownIndex);
                    this.$emit('input', _index)
                }
            },
        },
        watch: {
            // 监听value改变
            value() {
                if (this.value === this.ownIndex) return;
                this.ownIndex = this.value;
                this.offset = this.ownIndex * this.width;
                this.cacheOffset = this.offset;
            }
        },
        created() {
           this.ownIndex = this.value ? this.value : this.ownIndex;// 获取默认值
        },
        mounted() {
            this._init()
        }
    }
</script>
