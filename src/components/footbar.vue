<template>
<footer class="zyw-footer">
    <div class="zyw-container white-bgcolor clearfix">
        <div class="weui-tabbar">
            <router-link to="/index" class="weui-tabbar__item" active-class="weui-bar__item--on">
                <div class="weui-tabbar__icon">
                    <img src="../assets/img/svg/foot-1.svg" alt=""/>
                </div>
                <p class="weui-tabbar__label">首页</p>
            </router-link>
            <router-link to="/product" class="weui-tabbar__item" active-class="weui-bar__item--on">
                <div class="weui-tabbar__icon">
                    <img src="../assets/img/svg/foot-2.svg" alt=""/>x
                </div>
                <p class="weui-tabbar__label">分类</p>
            </router-link>
            <router-link to="/find" class="weui-tabbar__item" active-class="weui-bar__item--on">
                <div class="weui-tabbar__icon">
                    <img src="../assets/img/svg/foot-3.svg" alt=""/>
                </div>
                <p class="weui-tabbar__label">发现</p>
            </router-link>
            <router-link to="/cart" class="weui-tabbar__item" active-class="weui-bar__item--on">
                <span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">{{count}}</span>
                <div class="weui-tabbar__icon">
                    <img src="../assets/img/svg/foot-4.svg" alt=""/>
                </div>
                <p class="weui-tabbar__label">购物车</p>
            </router-link>
            <router-link to="/home" class="weui-tabbar__item" active-class="weui-bar__item--on">
                <div class="weui-tabbar__icon">
                    <img src="../assets/img/svg/foot-5.svg" alt=""/>
                </div>
                <p class="weui-tabbar__label">我的</p>
            </router-link>
        </div>
    </div>
</footer>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        count(){
             if(this.$store.state.buycar.length==0){
                return 0
            }else{
                let sum = 0;
                this.$store.state.buycar.forEach(val => {
                    sum+=val.number
                });
                return sum
            }
        },
      ...mapGetters([
        'buycar'
      ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.zyw-footer {
    bottom: 0;
    height: 56px;
}
.zyw-footer~.zyw-container {
    border-bottom: 56px solid transparent;
}
</style>
