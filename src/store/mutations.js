//import { VIEW_NAV,VIEW_FOOT,VIEW_LOADING,CHECK_USER} from './types'
import * as types from './types'

let mutations={ 

  [types.VIEW_NAV]:(state,payload)=> {state.bNav=payload},
  [types.VIEW_FOOT]:(state,payload)=> state.bFoot=payload,
  [types.VIEW_LOADING]:(state,payload)=> state.bLoading=payload,
  [types.CHECK_USER]:(state,payload)=> state.user=payload.user,

  [types.ADD_ITEM]:(state,payload)=>{
    state.buycar=payload;  //
  },
  [types.CHANGE_ITEM]:(state,payload)=>{
    state.buycar=payload; //替换的是actions传递过来的新值
  },
  [types.REMOVE_ITEM]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.CLEAR_BUYCAR]:(state,payload)=>{
    state.buycar=payload;
  },
  [types.LOG_OUT]:(state,payload)=>{
    state.user=payload.user;
    state.buycar=payload.buycar;
  },
};
export default mutations;
