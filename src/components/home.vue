<template>
<section>
    <div class="home-head white-bgcolor clearfix">
        <div class="head-img">
            <div class="head-logo"><img src="../assets/img/fuckyou.jpeg" alt=""></div>
            <div class="head-name">UserName:{{user.name}}</div>
            <div class="head-icon">
                <a href=""><img src="../assets/img/svg/home-cog.svg" alt=""></a>
                <a href=""><img src="../assets/img/svg/home-message.svg" alt=""></a>
            </div>
        </div>
        <div class="head-cont">
            <div class="weui-flex">
                <div class="weui-flex__item"><a href="javascript:;"><p>12</p><span>收藏的宝贝</span></a></div>
                <div class="weui-flex__item"><a href="javascript:;"><p>6</p><span>我的喜欢</span></a></div>
                <div class="weui-flex__item"><a href="javascript:;"><p>16</p><span>我的足迹</span></a></div>
            </div>
        </div>
    </div>
    <div class="home-cont weui-cells mt-625">
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="../assets/img/svg/home-1.svg" alt=""> 全部订单</p>
            </div>
            <div class="weui-cell__ft choose-des">
                查看所有已购宝贝
            </div>
        </a>
    </div>
    <div class="weui-flex home-order white-bgcolor mb-625">
        <a href="javascript:;" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="../assets/img/svg/home-dfk.svg" alt="">
            </div>
            <p class="weui-flex__label">待付款</p>
        </a>
        <a href="javascript:;" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="../assets/img/svg/home-dfh.svg" alt="">
            </div>
            <p class="weui-flex__label">待发货</p>
        </a>
        <a href="javascript:;" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="../assets/img/svg/home-dsh.svg" alt="">
            </div>
            <p class="weui-flex__label">待收货</p>
        </a>
        <a href="javascript:;" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="../assets/img/svg/home-dpj.svg" alt="">
            </div>
            <p class="weui-flex__label">待评价</p>
        </a>
        <a href="javascript:;" class="weui-flex__item">
            <div class="weui-flex__icon">
                <img src="../assets/img/svg/home-tk.svg" alt="">
            </div>
            <p class="weui-flex__label">退款/售后</p>
        </a>
    </div>
    <!-- <div class="home-cont weui-cells mb-625">
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="../assets/img/svg/home-2.svg" alt=""> 酷币</p>
            </div>
            <div class="weui-cell__ft choose-des">
                当前可用酷币30酷币
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="coupon.html">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="../assets/img/svg/home-3.svg" alt=""> 优惠券</p>
            </div>
            <div class="weui-cell__ft choose-des">
                2张
            </div>
        </a>
    </div> -->
    <div class="home-cont weui-cells mb-625">
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="../assets/img/svg/home-4.svg" alt=""> 我的资料</p>
            </div>
            <div class="weui-cell__ft choose-des">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <p class="choose-text"><img src="../assets/img/svg/home-5.svg" alt=""> 意见反馈</p>
            </div>
            <div class="weui-cell__ft choose-des">
            </div>
        </a>
        <a class="weui-cell weui-cell_access" href="javascript:;">
            <div class="weui-cell__bd">
                <router-link tag="p" class="choose-text" style="text-align:center" to="/index" @click.native="logOut">退出登入</router-link>
                <!-- <p class="choose-text" style="text-align:center" @click="logOut">退出登入</p> -->
            </div>
        </a>
    </div>
</section>
</template>
<script>
//引入状态管理
import store from '../store';//引入状态对象实例，实例的上面可以获取api，state里的数据
//console.log('dmt',store.state.user.userDate.tel)
import {mapActions,mapGetters} from 'vuex';
export default {
    data() {
        return {
            user:{}
        }
    },
    //import {mapGetters} from "vuex"   
    //要在进入组件之前拿到state里的数据判断是否能进入该组件，而mapGetters已经进入组件了 
    beforeRouteEnter (to, from, next) {
   /*  let data = true;  //假数据
    if(data){next()}else{next("/login")} */
    //this.$store.state.count
    let auth = store.state.user.auth;//同步获取状态管理的数据
    //console.log("home",store.state.user)
    if(auth){//同步条件
      next(_this=>_this.user=store.state.user.userData) //数据预载
    }else{
      next('/login')
    }
    },
    methods:mapActions([
      'logOut',
    ]),
}
</script>
<style scoped>
.home-head{}
.home-head .head-img{
	position: relative;
	background: url(../assets/img/home-bg.jpg) no-repeat center center;
	background-size: 100%;
	width: 100%;
	height: 200px;
}
.home-head .head-img .head-logo{
	overflow: hidden;
    width: 70px;
    height: 70px;
    border-radius: 50px;
    background: #fff;
    position: absolute;
    left: 2rem;
    bottom: 0;
    margin-bottom: -35px;
}
.home-head .head-img .head-logo img{
	width: 100%;
}
.home-head .head-img .head-name{
	position: absolute;
	bottom: 0;
	left: 110px;
	line-height: 2.5rem;
	color: #fff;
	font-weight: bold;
}
.home-head .head-img .head-icon{
	position: absolute;
	top: 0.625rem;
	right: 0.625rem;
}
.home-head .head-img .head-icon a{
	margin-left: 0.4rem;
	font-size: 1.5rem;
	color: #fff;
}
.home-head .head-cont{
    width: 70%;
    float: right;
    text-align: center;
    padding: 8px 0;
}
.home-head .weui-flex__item{border-right: 1px solid #eee;}
.home-head .weui-flex__item:last-child{border-right: none;}
.home-head .head-cont p{
	margin: 0;
	font-weight: bold;
	line-height: 1rem;
	font-size: 1.2rem;
}
.home-head .head-cont span{
	font-size: 1rem;
}
.home-cont{}
.home-cont .choose-text{
	color: #444;
}
.home-order{
	padding: 1rem 0;
	border-top: 1px solid #f2f2f2;
}
.home-order .weui-flex__item{
	text-align: center;
}
.home-order .weui-flex__icon{}
.home-order .weui-flex__label{
	margin: 0;
	color: #777;
	font-size: 1rem;
}
</style>
