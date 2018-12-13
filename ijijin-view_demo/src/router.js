import Vue from 'vue'
import Router from 'vue-router'

// Global
import Global from './views/Global.vue'
import Alert from './views/Global/Alert.vue'
import Toast from './views/Global/Toast.vue'
import Button from './views/Global/Button.vue'
import Icon from './views/Global/Icon.vue'

// Form
import Form from './views/Form.vue'
import Input from './views/Form/Input.vue'
import Pickers from './views/Form/Pickers.vue'

import Home from './views/Home.vue'
//import About from './views/About.vue'


//Navigator
import Navigator from './views/Navigator.vue'
import Tab from './views/Navigation/Tab.vue'
import Sliders from './views/Navigation/Sliders.vue'
import HorseRaceLamp from './views/Navigation/HorseRaceLamp.vue'

// other
import Others from './views/Others.vue'
import PullRefresh from './views/Others/PullRefresh.vue'
import BottomPicker from './views/Others/BottomPickers.vue'
import PullWindow from './views/Others/PullWindow.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'h',
            component: Home
        },
        {
            path: '/global', // global
            name: 'g',
            component: Global
        },
        {
            path: '/alert',
            name: 'alert',
            component: Alert
        },
        {
            path: '/toast',
            name: 'toast',
            component: Toast
        },
        {
            path: '/button',
            name: 'button',
            component: Button
        },
        {
            path: '/icon',
            name: 'icon',
            component: Icon
        },
        {
            path: '/form',  // form
            name: 'form',
            component: Form
        },
        {
            path: '/input',
            name: 'input',
            component: Input
        },
        {
            path: '/pickers',
            name: 'pickers',
            component: Pickers
        },
        {
            path: '/navigator', // navigation
            name: 'na',
            component: Navigator
        },
        {
            path: '/tab',
            name:'tab',
            component: Tab
        },
        {
            path: '/sliders',
            name:'sliders',
            component: Sliders
        },
        {
            path: '/horseracelamp',
            name:'horseracelamp',
            component: HorseRaceLamp
        },  
        {
            path: '/others',        // others
            name:'others',
            component: Others
        },
        {
            path: '/pullrefresh',
            name:'pullrefresh',
            component: PullRefresh
        },
        {
            path: '/bottompicker',
            name:'bottompicker',
            component: BottomPicker
        },
        {
            path: '/pullwindow',
            name:'pullwindow',
            component: PullWindow
        }
    ]
})
