import axios from 'axios';

import * as types from './types';

let actions={
  [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
  [types.VIEW_FOOT]:({commit,state},payload)=>commit(types.VIEW_FOOT,payload),
  [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
  //异步
  [types.CHECK_USER]:({commit,state},payload)=>{
    //payload.username|payload.password
    return axios({
      url:"./data/user.json",
      params:{telephone:payload.tel,password:payload.password}
    }).then(
      res=>{
        console.log("resdata",res.data)
        commit({type:types.CHECK_USER,user:res.data});
        return res.data.auth
      }
    )
  },
  addItem:({commit,state},payload)=>{ // state是复制的一份，修改不影响真实state
    //判断购物车是否存在当前项目，存在number+1，不存在，添加一项
    // console.log(state);
    console.log(payload)
    let arr=[...state.buycar];
    let find=false;
    arr.forEach((item,index)=>{
      if(item.itemNum==payload.itemNum){
        item.number++;//数量递增
        find=true;
      }
    });
    if(!find) {
      payload.number=1;//数量
      arr.push(payload);
    }
    // commit(types.ADD_ITEM,[...state.buycar])
    commit(types.ADD_ITEM,arr)
  },
  changeItem:({commit,state},payload)=>{
    // [...state.buycar]
    // {....state}
    state.buycar.forEach((item,index)=>{
      if(item.itemNum==payload.itemNum){
        if(payload.num>0) item.number+=payload.num;
        if(payload.num<0 && item.number>1) item.number+=payload.num;
        //if(item.number>=1) item.number+=payload.num;
      }
    });
    //如果是对象，需要复制一份，不然state.buycar指向的是复制后state修改之前的引用
    commit(types.CHANGE_ITEM,[...state.buycar])
    // commit(types.CHANGE_ITEM,state.buycar)
  },
  removeItem:({commit,state},payload)=>{
    state.buycar.forEach((item,index)=>{
      if(item.itemNum==payload.itemNum){
        state.buycar.splice(index,1);
      }
    });
    commit(types.REMOVE_ITEM,[...state.buycar]);
    // commit(types.REMOVE_ITEM,state.buycar);
  },
  clearBuycar:({commit,state})=>{
    console.log("delete")
    commit(types.CLEAR_BUYCAR,[]);
  },
  logOut:({commit,state})=>{
    commit(types.LOG_OUT,{user:{auth:false},buycar:[]});
  }
};
export default actions; 