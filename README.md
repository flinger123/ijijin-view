# ijijin-view

ijijin-ui是根据开发频率抽离业务封装而成的前端库，这里是VueJs的移动端版本，适用于移动端业务开发。

一期(v1.x)组件包含：弹窗、通知、按钮、图标、tab栏、轮播图、滚动通知、输入框、选择器、下拉刷新及上拉弹窗。


#### 特性
- 极其轻量
- 使用灵活、简单、方便
- 支持二次开发


#### 支持环境
- ios8.1及以上、安卓4.4及以上环境


#### 最新版本
- v1.0.0


### 使用

#### 安装
``` sh
    npm i --save-dev ijijin-ui
```

#### 使用
``` vue
    <template>
        <div>
            <v-input 
                v-model="value"
                placeholder="事件输入框"
            />
            <v-icon type="lock"/>
        </div>
    </template>
    <script>
        inport Input from 'ijijin-ui/vue/Input'

        export default {
            data () {
                return {
                    value: ''
                }
            },
            components: {
                'v-input': Input
            }
        }
    </script>
```