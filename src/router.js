import Vue from 'vue';
import Router from 'vue-router';  //引入插件
 Vue.use(Router);  //安装插件


//组件懒加载
//import(需要加载的组件)-->返回一个promise  import(组件).then(返回组件)
import index from './components/index'
// import home from './components/home'
const home = ()=> import('./components/home')
// import cart from './components/cart'
const cart = ()=> import('./components/cart')
// import find from './components/find'
const find = ()=> import('./components/find')
// import product from './components/product'
//let product = ()=>{ return import(组件) } //import() es7 返回的是promise  阮一峰 
const product = ()=> import('./components/product')
// import item from './components/item'
const item = ()=> import('./components/item')
// import login from './components/login'
const login = ()=> import('./components/login')
// import register from './components/register'
const register = ()=> import('./components/register')
import error from'./components/error'

let routes = [
  //component 接受组件|函数
  {path:'/index',component:index},
  {path:'/home',component:home},//用户页
  {path:'/',redirect:'/index'},
  {path:'/find',component:find}, 
  {path:'/product',component:product},
  {path:'/cart',component:cart},
  {path:'/item/:id',component:item,name:'item'},//详情页
  {path:'/login',component:login},
  {path:'/register',component:register},
  {path:'*',component:error},
]

export default new Router({
  routes,
  scrollBehavior (to, from, savedPosition) {
    //return 期望滚动到哪个位置 
    return { x: 0, y: 0 }
  }
})
