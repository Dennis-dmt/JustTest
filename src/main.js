import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//如果全局引入js的话，比如jq，要么他是模块化的，要么他是自执行的js
//在src环境下，全局引入css
import './assets/css/font-awesome.min.css'
import './assets/css/main.css'
import './assets/css/theme-color.css'
// import './assets/css/swiper.min.css'

//引入axios模块
import axios from './plugins/axios';
Vue.use(axios)

//全局过滤器('过滤器名','函数')
 import filters from './filters/index.js'   //引入
 Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]))  //注册全局过滤器
import { currency } from './filters/currency.js'
Vue.filter('currency',currency)

//安装通用组件，引入自定义loading插件
import loading from './components/loading'
Vue.use(loading)  //安装自定义插件

//全局引入动画库
import 'animate.css'


new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount('#app')