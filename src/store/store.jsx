import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  cart: cartSlice,
  products: productSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)
export default store;