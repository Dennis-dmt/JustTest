<template>
<form method="post" name="cart_form" target="_self" id="cart_form" action="">
<header class="zyw-header">
    <div class="zyw-container white-color">
        <div class="head-l"><a href="javascript:window.history.back(-1)" target="_self"><img src="../assets/img/svg/head-return.svg" alt=""></a></div>
        <h1>购物车</h1>
        <div class="head-r"><a href="">编辑</a></div>
    </div>
</header>
<footer class="zyw-footer">
    <div class="zyw-container white-bgcolor">
        <div class="settle_box">
            <dl class="all_check select">
                <dt>
                    <span id="all_pitch_on"></span>
                    <em>全选</em>
                </dt>
            </dl>
            <dl class="total_amount">
                <dt>
                    合计：
                    <p id="total_price">
                        ¥<b>{{total}}</b>
                    </p>
                </dt>
                <dd>不含运费</dd>
            </dl>
            <input type="hidden" name="gcs" id="gcs"/>
            <a class="settle_btn" href="javascript:void(0);" id="confirm_cart">去结算</a>
            <a class="settle_btn" href="javascript:void(0);" id="confirm_cart1" onclick="big_cart_remove()">删除</a>
        </div>
    </div>
</footer>
<section class="zyw-container">
        <!--list-->
        <div class="commodity_list_box">
            <div class="cart_top">
                <span>商品清单</span>
                <p id="weights">总重量约25kg</p>
                <div class="clear"></div>
            </div>
            <!--商品列表-->
            <div class="commodity_box">
                <div class="commodity_list">
                    <!--店名信息-->
                    <div class="tite_tim select">
                        <em aem="1" cart_id="84"></em>
                        <span>美妆专卖店</span>
                        <div class="clear"></div>
                    </div>
                    <!--商品-->
                    <ul class="commodity_list_term">
                        <li class="select" v-for="item in buycar" :key="item.itemNum">
                            <em aem="0" cart_id="84"></em>
                            <img :src="item.picUrl"/>
                            <div class="div_center">
                                <h4>{{item.title}}</h4>
                                <span>销量:{{item.salesVolume}}</span>
                                <p class="now_value">
                                    <i>￥</i>
                                    <b class="qu_su">{{item.price*item.number}}</b>
                                </p>
                            </div>
                            <div class="div_right">
                                <i @click="changeItem({itemNum:item.itemNum,num:-1})">-</i>
                                <span class="zi">{{item.number}}</span>
                                <input type="hidden" value="84">
                                <i @click="changeItem({itemNum:item.itemNum,num:1})">+</i>
                                <i @click="removeItem({itemNum:item.itemNum})">delete</i>
                            </div>
                        </li>
                    </ul>
                    <!--优惠信息-->
                    <div class="shop_ul_bottom account_info_box">
                        <ul class="account_info">
                            <li class="i_text">
                                <span class="info_name xi_cu">包邮</span>
                                <span class="info_name">商家包邮</span>
                                <a class="settle_btn" href="javascript:void(0);" id="confirm_cart" @click="clearBuycar">删除</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 商品列表 end -->
        </div>
        <!-- end -->
</section>
</form>
</template>
<script>
import store from '../store'
import {mapActions,mapGetters} from 'vuex';
export default {
    computed:{
        total:function(){
            let sum = 0;
            this.$store.state.buycar.forEach(val => {
                sum+=val.price*val.number;
            });
            return sum;
        },
        ...mapGetters([
            'buycar'
        ])
    },
    methods:mapActions([
      'changeItem','removeItem','clearBuycar'
    ]),
    beforeRouteEnter (to, from, next) {
        // ...
        let auth = store.state.user.auth;
        auth ? next(true):next('/login')
    }
}
</script>
<style>
/* 购物车 */
div#shopping_cart { position: fixed; bottom: 7px; right: 2%; background: #aacc36; width: 50px; height: 50px; border-radius: 50%; z-index: 9998; }
#shopping_cart a { position: relative; display: block; text-align: center; }
#shopping_cart a img { width: 52%; margin-top: 13px; }
#shopping_cart a em { position: absolute; width: 18px; height: 18px; background: #ff900d; border-radius: 50%; right: 12px; top: 4px; line-height: 18px; color: #fff; display: none; }
#newly_added { color: #ff900d; position: fixed; z-index: 9999; }
.footer_h { height:100px; text-align: center; color: #999; line-height: 60px; }
.ion-ios-arrow-left:before {content: "";/* color: #aacc36; */}
/*购物车*/
.cart_top p { float: right; margin: 0; font-size: 0.8rem}
.cart_top { padding: 6px 4%; background: #fff; font-size: 1.2rem; color: #999; line-height: 24px; border-bottom: solid 1px #e6e6e6; }
.commodity_list { background: #fff; margin-bottom: 10px; }
.shop_ul_bottom.account_info_box:nth-last-child(1) { border-bottom: none; }
.commodity_list .tite_tim { width: 90%; margin: 0 auto; padding: 8px 0; color: #333; font-size: 1.2rem; background-size: 6px; }
.commodity_list .tite_tim em { float: left; width: 20px; height: 20px; border: solid 1px #e6e6e6; border-radius: 50%; margin-right: 10px; }
.commodity_list .commodity_list_term {margin-left: 20px; margin-bottom: 0;}
.commodity_list .commodity_list_term li { position: relative; overflow: hidden; padding: 12px 0; }
.commodity_list .commodity_list_term li em { position: absolute; width: 20px; height: 20px; border: solid 1px #e6e6e6; border-radius: 50%; left: 0; top: 40px; }
.commodity_list .commodity_list_term li img { width: 80px; height: 80px; max-width: 80px; max-height: 80px; float: left; margin-left: 28px; border: 1px solid #dedede;padding: 2px;}
.commodity_list .commodity_list_term li .div_center { width: 50%; float: left; position: relative; margin-top: 7px; margin-left: 2%; }
.commodity_list .commodity_list_term li .div_center h4 { overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; color: #333; margin: 0; font-size: 1.2rem; margin-bottom: 2px; }
.commodity_list .commodity_list_term li .div_center span { color: #666; font-size: 1rem; }
.commodity_list .commodity_list_term li .div_center p { margin: 0; font-size: 1.25rem; color: #f34347; margin-top: 6px; font-family: "-apple-system","Helvetica Neue",Roboto,"Segoe UI",sans-serif; }
.commodity_list .commodity_list_term li .div_right { position: absolute; bottom: 10px; right: 4%; border: solid 1px #e6e6e6; border-radius: 4px; width: 82px; overflow: hidden; text-align: center; line-height: 30px; }
.commodity_list .commodity_list_term li .div_right i { float: left; width: 33%; color: #333; font-style: normal;}
.commodity_list .commodity_list_term li .div_right span { float: left; width: 33%; border-left: solid 1px #e6e6e6; border-right: solid 1px #e6e6e6; color: #333; }
.shop_ul_bottom.account_info_box { margin-top: 0; border-top: solid 1px #e6e6e6; border-bottom: solid 1px #e6e6e6; }
.shop_ul_bottom.account_info_box .xi_cu { height: 24px; line-height: 24px; font-size:12px; padding: 0 6px; border-radius: 4px; background: #f34347; color: #fff; margin-top: 11px; margin-right: 2%; }
.settle_box .all_check em {
    font-weight: initial;
    font-size: 0.8rem;
    color: #666;
    margin-left: 10%;
    font-style: normal;
}
.commodity_list .commodity_list_term li .div_center p i { font-size: 0.6rem; font-style: normal; }
.commodity_list .commodity_list_term li .div_center p b { font-weight: initial; }
.settle_box .total_amount b { font-weight: initial; }
.finish_box { text-align: center; line-height: 24px; }
.finish_box img { width: 35%; margin-top: 50px; margin-bottom: 15px; }
.finish_box h1 { font-size: 0.9rem; color: #333; }
.finish_box p { color: #999; font-size: 1.2rem; }
.finish_box a { color: #aacc36; font-size: 1.2rem; }


.commodity_list .commodity_list_term li:before{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid rgba(207, 207, 207, 0.95);
    color: rgba(207, 207, 207, 0.95);
    transform-origin: 0 100%;
    transform: scaleY(0.501);
}

@media screen and (max-width: 1920px){
    #cart_form{ width: 414px; margin: 0 auto; }
}
@media screen and (max-width: 800px){
    #cart_form{ width: 100%; margin: 0 auto; }
}
.header_box {
    height: 44px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999999;
}

.bar-header {
    border-bottom: solid 1px #e6e6e6;
    background: #fff;
    height:44px;
}

.bar-header .title {
    color: #fff ;
    border-bottom: none;
    font-size: 19px;
}



.star_x p i {
    color: #b3b3b3;
}

.star_x p .icon_color {
    color: #ffa127;
}


.input_a1 input {
    border-radius: 5px;
    background-color: #f2f2f2;
    width: 100%;
    text-indent: 5px;
    color: #999;
    height: 30px;
    line-height: normal;
    padding-left: 5px;
    margin-top: 1px;
}

a.input_a,.input_a1 {
    width: 74%;
    height: 34px;
    position: absolute;
    right: 0;
    left: 10%;
    overflow: hidden;
}

a.rig_shai {
    line-height: 35px;
    color: #fff;
    position: absolute;
    top: 5px;
    right: 2%;
}

.rig_shai i {
    padding: 4px 10px;
    background-size: 15px;
}

/*-----------------------------返回顶部----------------------------------------------*/
#totop {
    position: fixed;
    z-index: 99999;
    bottom: 62px;
    right: 2%;
    cursor: pointer;
    display: none;
    background: #fff;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    cursor: pointer;
    border: solid 1px #e1e1e1;
}

#totop a {
    display: block;
    background-size: 100%;
    width: 40px;
    height: 40px;
    cursor: pointer;
}

.bar.bar-dark .title {
    color: #fff
}

.bar.bar-dark.bar-footer {
    background-image: linear-gradient(180deg,#111,#111 50%,transparent 50%)
}

.bar .title {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    margin: 0 10px;
    min-width: 30px;
    height: 43px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 17px;
    font-weight: 500;
    line-height: 44px
}

.bar .title.title-left {
    text-align: left
}

.bar .title.title-right {
    text-align: right
}

.bar .title a {
    color: inherit
}

.bar .button,.bar button {
    z-index: 1;
    padding: 0 8px;
    min-width: initial;
    min-height: 31px;
    font-weight: 400;
    font-size: 13px;
    line-height: 32px
}

.settle_box_h {
	height: 60px;
}

.settle_box {
	background: #fff;
	position: fixed;
	left: 0px;
	bottom: 0px;
	overflow: hidden;
	z-index: 2;
	width: 100%;
	padding: 0 0 0 4%;
	border-top: solid 1px #e6e6e6;
}

.settle_box .all_check,.settle_box .total_amount {
	float: left;
}

.settle_box .all_check {
	width: 17%;
	margin-bottom: 0;
	margin-top: 15px
}

.settle_box .all_check dd {
	color: #999999;
	font-size: 12px;
}

.settle_box .all_check span {
	width: 20px;
	height: 20px;
	border: solid 1px #a2a2a2;
	vertical-align: middle;
	border-radius: 50%;
	float: left;
}

.settle_box .all_check .disabled {
	background: #e1e1e1;
	border: solid 1px #e1e1e1;
}

.settle_box .all_check .pitch_on {
	background: url(../assets/img/check.png) no-repeat center center;
	border: solid 1px #ff900d;
	background-size: 22px 22px;
}

.settle_box .total_amount {
	color: #999;
	font-size: 14px;
	margin: 0;
	width: 50%;
	text-align: right;
	margin-top: 5px;
	padding-right: 2%;
}

.settle_box .total_amount dd {
	margin-top: 1px;
	clear: both;
	font-size: 0.6rem;
}

.settle_box .total_amount dt p {
	color: #f34347;
	font-size: 0.8rem;
	float: right;
	line-height: 20px;
}

.settle_box .total_amount dt p:first-letter {
	font-size: 0.6rem
}

.settle_box .total_amount dt {
	font-weight: initial;
}

.settle_box .settle_btn {
	float: right;
	width: 33%;
	background: #f34347;
	color: #fff;
	padding: 17px 0;
	text-align: center;
	font-size: 1.3rem;
}

#confirm_cart1 {
	display: none;
}

.select .pitch_on {
	background: url(../assets/img/check.png) no-repeat center center;
	border: solid 1px #f34347;
	background-size: 22px 22px;
}

.account_info li {
	overflow: hidden;
	position: relative;
	border-bottom: solid 1px #eee;
	padding: 0 4%;
	line-height: 45px;
	list-style-type: none;
}

.account_info li .info_name {
	color: #9a9a9a;
	float: left;
	display: inline-block;
	margin-right: 5%;
	color: #333;
	font-size: 0.7rem;
}

</style>
