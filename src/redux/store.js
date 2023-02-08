import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import { rootPersisConfig, rootReducer } from "./rootReducer"

const store = configureStore({
    reducer: persistReducer(rootPersisConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false
    })
})

const persistor = persistStore(store)

export { store, persistor }