<template>
<header class="zyw-header">
    <div class="zyw-container white-color">
        <div class="head-l"><i class="head-l-svg" aria-hidden="true"></i></div>
        <div class="head-search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="输入您当前要搜索的商品" class="white-color" />
        </div>
        <div class="head-r"><a href="cart.html"><i class="head-r-svg" aria-hidden="true"></i><i class="head-length">{{count}}</i></a></div>
    </div>
</header>
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
/*首页头部*/
.head-search{
    position: relative;
    width: 72%;
    margin: 0 auto;
    line-height: 45px;
}
.head-search input{
    width: 100%;
    height: 30px;
    line-height: 30px;
    border: none;
    padding-left: 30px;
    border-radius: 4px;
    font-size: 0.8rem;
}
.head-search input::-webkit-input-placeholder {color:#fff; font-size: 0.8rem;}
.head-search input:-moz-placeholder {color:#fff; font-size: 0.8rem;}
.head-search input::-moz-placeholder {color:#fff; font-size: 0.8rem;}
.head-search input:-ms-input-placeholder {color:#fff; font-size: 0.8rem;}
.head-search .fa-search{
    position: absolute;
    top: 50%;
    margin-top: -8px;
    left: 8px;
}

</style>
