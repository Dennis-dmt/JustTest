<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <headbar v-show="bNav"></headbar>
    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
    <footbar v-show="bFoot"></footbar>
  </div>
</template>
<script>

import headbar from './components/headbar'  
import footbar from './components/footbar'
import {mapGetters} from 'vuex'
import * as types from './store/types.js'

export default {
  components:{
    headbar,
    footbar
    },
  mounted() {
    // console.log(this.$root.$data)
  },
  computed:{
      ...mapGetters([
      'bNav','bFoot','bLoading'
    ])
  }, 
  watch: {
    $route:{//路由监听
      handler:function(to){
        console.log("watch",to,this.$route.path)
        let path = to.path;
        if(/index|product/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true)
          this.$store.dispatch(types.VIEW_FOOT,true)
        }
        if(/find|home/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false)
          this.$store.dispatch(types.VIEW_FOOT,true)
        }
        if(/item|cart|login|register|error/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false)
          this.$store.dispatch(types.VIEW_FOOT,false)
        }     
      },
      immediate:true, //首次触发，而不是数据变化才触发
    }
  },
}
</script>   

<style>
</style>
