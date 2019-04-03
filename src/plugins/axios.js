import axios from 'axios';
//Vue.use(axios);//不是所有插件都支持use安装
// window.axios = axios; //全局暴露
import store from '../store'
import * as types from '../store/types'

//axios拦截器
// Add a request interceptor ,提交一个请求的拦截
axios.interceptors.request.use(
  function (config) {
  // Do something before request is sent
  //做点事，修改body，或显示loading图
  store.dispatch(types.VIEW_LOADING,true)
  return config;  //请求所携带的所有数据 url，parmas,body,header...
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
  // Do something with response data
  //隐藏loading图
  store.dispatch(types.VIEW_LOADING,false)
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default{
  install:function(Vue){
    Vue.prototype.$axios = axios;
    window.axios = axios; //全局暴露
  }
}