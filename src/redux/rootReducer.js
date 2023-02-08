import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import appReducer from "./slices/app.slice";

const rootPersisConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-"
}

const rootReducer = combineReducers({
    app: appReducer
})


export { rootReducer, rootPersisConfig }