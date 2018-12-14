<!-- 
 输入框
 -->

<template>
    <section class="m-ctn m-input_ctn">
        <h1>输入框</h1>

        <div>
            <h4>1.普通</h4>
            <v-input 
                v-model="value1"
                placeholder="普通输入框"
            />
        </div>

        <div>
            <h4>2.带清除功能</h4>
            <v-input 
                clearable="true"
                v-model="value2"
                placeholder="带清除功能的输入框"
            />
        </div>

        <div>
            <h4>3.只读</h4>
            <v-input 
                readonly="true"
                v-model="value3"
                placeholder="只读的输入框"
            />
        </div>

        <div>
            <h4>4.指定类型</h4>
            <v-input 
                v-model.number="value4"
                type="number"
                placeholder="数字输入框"
            />
        </div>

        <div>
            <h4>5.事件</h4>
            <v-input 
                clearable="true"
                v-model="value5"
                placeholder="事件输入框"
                @focus="eventShow('focus')"
                @blur="eventShow('blur')"
                @input="eventShow('input')"
                @keypress="eventShow('keypress')"
            />
        </div>

        <div>
            <h4>6.无边框</h4>
            <v-input 
                :border="false"
                v-model="value6"
                placeholder="无边框输入框"
            />
        </div>

        <div>
            <h4>7.特殊样式</h4>
            <v-input 
                :border="false"
                className="u-input"
                v-model="value7"
                placeholder="特殊样式输入框"
            />
        </div>
        
    </section>
</template>

<script>
    import Input from 'ijijin-view/vue/Input'

    export default {
        name: 'Input',
        data () {
            return {
                value1: '',
                value2: '点击右侧icon清除',
                value3: '只读的输入框',
                value4: '',
                value5: '',
                value6: '',
                value7: ''
            }
        },

        components: {
            'v-input': Input
        },

        methods: {
            eventShow (type) {
                type = type === 'input' || type === 'keypress' ? 'input 或 keypress' : type
                this.$toast.show('触发事件： ' + type);
            }
        }
    }
</script>

<style lang="less">
    .m-input_ctn{
        .vu-input {
            margin: 20px auto;
            width: 80%;
            height: .6rem;
            line-height: .6rem;

            input {

            }
        }

        .u-input {
            background-color: #ccc;
            height: 1rem;
            line-height: 1rem;
            font-size: 0.453rem;
            color: blue;
        }
    }
</style>