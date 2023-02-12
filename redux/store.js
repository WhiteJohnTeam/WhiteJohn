import {configureStore} from '@reduxjs/toolkit'
import appReducer from './reducers/appReducer';

// Reference here all your application reducers
const reducer = {
  appReducer: appReducer,
}

// @ts-ignore
const store = configureStore({
  reducer,
},);

export default store;