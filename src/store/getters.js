let getters={
  bNav:(state)=>state.bNav,
  bFoot:(state)=>state.bFoot,
  bLoading:(state)=>state.bLoading,
  user:state=>state.user,
  buycar:(state)=>{
    return state.buycar;
  }
};
export default getters;