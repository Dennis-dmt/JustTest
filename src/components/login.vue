<template>
<div>
<header class="zyw-header">
    <div class="zyw-container white-color">
        <div class="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="../assets/img/svg/head-return.svg" alt=""></a></div>
        <h1>登录</h1>
        <div class="head-r"><router-link to="/register">注册</router-link></div>
    </div>
</header>
<section class="zyw-container">
    <div class="login-img"><img src="../assets/img/fuckyou.jpeg" alt=""></div>
    <div class="weui-cells">
        <div class="weui-cell weui-cell_select weui-cell_select-before">
            <div class="weui-cell__hd">
                <select class="weui-select" name="select2">
                    <option value="1">+86</option>
                    <option value="2">+80</option>
                    <option value="3">+84</option>
                    <option value="4">+87</option>
                </select>
            </div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入手机号" v-model="tel">
            </div>
        </div>
    </div>
    <div class="weui-cells">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="password" placeholder="请输入密码" v-model="password">
            </div>
        </div>
    </div>  
    <div class="weui-cells__tips text-right"><a href="">忘记密码？</a></div>
    <div class="login-btn">
      <a href="javascript:;" class="weui-btn weui-btn_warn theme-bgcolor" @click="checkLogin">登录</a>
      <!-- <a href="javascript:;" class="weui-btn weui-btn_warn theme-bgcolor" @click="$store.dispatch({...})">登录</a> -->
    </div>
</section>
</div>
</template>
<script>
import * as types from '../store/types.js'
export default {
  data(){
    return{
        tel:"",
        password:""
    }
  },    
  methods: {
    checkLogin(){
      //this.$store.dispatch("类型",负载)
      //this.$store.dispatch({type:类型,负载key:value}) //actions->playload.key
      this.$store.dispatch({
        type:types.CHECK_USER,
        telephone:this.tel,
        password:this.password
      }).then(  
         (auth)=>{
           //抓state仓库//抓res结果
           if(auth){
            this.$router.push('/index')
           }else{
            this.$router.push('/error')
           }
         }
      )
    },
    /* checkLogin(){
        this.$axios({
            //url:"http://localhost:3000/user",{parmas:{user:this.iptUser,pass:this.iptPassWord}}
            url:'/data/user.json'
        }).then(
            res=>this.$store.dispatch(types.CHECK_USER,res.data)
        )
    } */
  },
}
</script>
<style>
.login-img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #dedede;
    padding: 2px;
    margin: 3rem auto;
}
.login-img img{
    width: 100%;
    border-radius: 50%;
}
.weui-cells {
    margin-top: 0;
}
.weui-cells:before {
    border-top: none;
    height: 0;
    color: #fff;
}
.login-btn{
    padding: 4rem 0.625rem;
}
</style>
