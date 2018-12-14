# ijijin-view

![logo](https://fund.10jqka.com.cn/public/ijijin-view/dist/logo.png)

<a href="https://www.npmjs.com/package/ijijin-view" rel="nofollow"><img src="https://camo.githubusercontent.com/bcfb674d175b56d413a752e309470e5611073ba8/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f40616e74762f66322e737667" alt="npm package" data-canonical-src="https://img.shields.io/npm/v/@antv/f2.svg" style="max-width:100%;"></a>

- 官方文档：[文档地址](https://fund.10jqka.com.cn/public/ijijin-view/dist/)
- demo：[体验地址](https://fund.10jqka.com.cn/public/ijijin-view-show/dist/)

ijijin-view是根据开发频率抽离业务封装而成的前端库，这里是VueJs的移动端版本，适用于移动端业务开发。

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
        inport Input from 'ijijin-view/vue/Input'

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

### 更新计划
- v1.1.x 调整、支持弹窗、toast、按钮动态文案展示。2019.01
- v1.2.x 添加下拉选择、消息通知组件。2019.01

团队：[同花顺爱基金前端·语雀](https://www.yuque.com/gqsv8w)