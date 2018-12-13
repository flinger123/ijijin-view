<!--  
    纵向跑马灯组件 
-->

<template>
    <div class="vu-horse-race-lamp g-box_b" :style="{'backgroundColor': backgroundColor}">
        <ul :class="{'animation': canScroll}" :style="combineStyle">
            <li class="g-box_b" :key="index" v-for="(item, index) in list" @click.stop="jumpNotice(item.url)">{{ item.text || item }}</li>
        </ul>
    </div>
</template>

<script>
    import '../less/HorseRaceLamp.less'
    export default {
        name: "horse-race-lamp",

        data () {
            return {
                currentTop: 0, // roll distances
                currentIndex: 1, // current item index
                canScroll: true, // can or not roll
                timer: null,
            }
        },

        props: {
            // list data
            list: {
                type: Array,
                'default': []
            },
            // interval time
            time: {
                type: Number,
                default: 5000
            },
            // cover style
            styles: {
                type: Object
            },
            // container and item height
            height: {
                type: Number,
                'default': 0.67
            },
            // background color
            backgroundColor: {
                type: 'String',
                default: '#fdefd3'
            }
        },

        computed: {
            // horse race lamp transform style and cover style
            combineStyle() {
                return Object.assign({}, this.styles, {
                    webkitTransform: `translateY(-${this.currentTop}rem)`,
                    transform: `translateY(-${this.currentTop}rem)`,
                    height: `${this.height}rem`
                })
            }
        },
        
        methods: {
            /**
             * horse race lamp control function
             */
            _addTop() {
                clearTimeout(this.timer);

                this.timer = setTimeout(() => {
                    if(document.hidden) return this._addTop();
                    if (this.currentIndex === this.list.length) { // loop again when loop finished
                        this.canScroll = false;
                        this.currentIndex = 1;
                        this.currentTop = 0;
                        setTimeout(() => {
                            this.canScroll = true;
                            this.currentTop = this.currentIndex++ * this.height;
                            this._addTop()
                        }, 500)
                    } else {
                        this.currentTop = this.currentIndex++ * this.height;
                        this._addTop()
                    }
                }, this.time)
            },

            /**
             * jump url
             */
            jumpNotice (url) {
                if (!url) return false;
                location.href = url;
            }
        },

        mounted() {
            this._addTop()
        },
    
        created() {
            if (this.list.length) {
                this.list.push(this.list[0]);
            }
            if (this.time < 1500) this.time = 1500; // 时间不得小于过渡时间
        }        
    }
</script>
