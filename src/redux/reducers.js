/*
包含多个用于生成新的state的reducer函数的模块
 */

//合并路由模块
import {combineReducers} from 'redux'


function xxx(state=0,action) {
  switch (action.type){

    default:
      return state
  }
}

function yyy(state=0,action) {
  switch (action.type){

    default:
      return state
  }
}

//返回合并后的reducer
export default combineReducers({
  xxx,
  yyy
})
// 整合的reducer管理的状态: {xxx: 0, yyy: {}}

