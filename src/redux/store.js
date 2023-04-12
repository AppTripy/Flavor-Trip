import { configureStore, combineReducers } from "@reduxjs/toolkit";
import viewSlice from "./viewSlice";




const rootReducer = combineReducers({ mainview: viewSlice })




export const store = configureStore({reducer: rootReducer})



export const dispatch = store.dispatch;
