import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import appLoadingConfigSlice from "./appLoadingConfigSlice";
import authSlice from "./authSlice";


const createPersistedReducer = (key: string, reducer: any) => {
    const persistConfig = {
        key,
        storage,
    }
    return persistReducer(persistConfig, reducer);
}


const persistedAuthReducer = createPersistedReducer('auth', authSlice);

const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        appLoadingConfig: appLoadingConfigSlice
        //   cart: persistedCartReducer,
        //   todos: todosReducer,
        //   control: controlReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],
        },
    }),
})


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>

export default store;