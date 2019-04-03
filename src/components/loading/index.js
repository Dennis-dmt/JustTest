//主角
// export default 函数|对象|类型  默认输出 
// export const 变量=any  批量输出

//插件 输出 函数（自身会被vue当做install方法），对象(要求插件内部要有install方法)

import loading from './components/loading.vue';
// import RouterView from './components/RouterView.vue';

export default {
  // key:value
  install:function(Vue){
    // console.log('install',Vue)
    Vue.component('loading',loading);//注册到全局
    // Vue.component('router-view',RouterView);//注册到全局
    // Vue.component('router-link',RouterLink);//注册到全局
  }
}

// export default function(){}