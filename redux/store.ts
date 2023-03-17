import {configureStore} from '@reduxjs/toolkit'
import wjReducer from './reducers/wjReducer';

// Reference here all your application reducers
const reducer = {
  wjReducer: wjReducer,
}

// @ts-ignore
const store = configureStore({
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer,
},);

export default store;