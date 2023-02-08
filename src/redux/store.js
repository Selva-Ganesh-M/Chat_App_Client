import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import { useSelector as useAppSelector, useDispatch as useAppDispatch } from "react-redux"
import { rootPersisConfig, rootReducer } from "./rootReducer"

const store = configureStore({
    reducer: persistReducer(rootPersisConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
})

const persistor = persistStore(store)

const { dispatch } = store

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch()

export { store, persistor, useSelector, useDispatch, dispatch }