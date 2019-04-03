<template>
  <div class="spinner" ref="wrap">
    <div class="rect1" :style="{background:color}"></div>
    <div class="rect2" :style="{background:color}"></div>
    <div class="rect3" :style="{background:color}"></div>
    <div class="rect4" :style="{background:color}"></div>
    <div class="rect5" :style="{background:color}"></div>
  </div>
</template>
<script>
export default {
  props:{
    color:{
      type:String,
      default:'#399'
    },
    linenum:{
      type:Number,
      default:5
    },
    text:{
      type:String,
      default:'loading...'
    }
  },
  mounted(){
    this.$refs.wrap.onmousedown=function(){
      console.log('down')
    }
  }
}
</script>

<style>
  .spinner {
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  left:50%;
  top:50%;
  margin-left:-25px;
  margin-top:-30px;
  z-index: 999;
  /* margin-left:-5%;
  margin-top:-10px;
  position: fixed;
  z-index: 11111;
  left:50%;top:50%; */
}

.spinner > div {
  /* background-color: #67CF22; */
  height: 100%;
  width: 6px;
  display: inline-block;
   
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
 
.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) } 
  20% { -webkit-transform: scaleY(1.0) }
}
 
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
