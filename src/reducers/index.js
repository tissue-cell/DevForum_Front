import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';	// 추가
import storage from 'redux-persist/lib/storage';	// 추가

const initUser = {
    token : '',
    isLogin : false
}



const user = (state = initUser, action) =>{
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token : action.token,
        isLogin : true
      }
    case "REMOVE_TOKEN":
      return {
        ...state,
        token : action.token,
        isLogin : false

      }
    default:
      return state;

  }
}
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer  = combineReducers({
  user : user
})

export default persistReducer(persistConfig, rootReducer);
