// import { compose , applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'; 
// imo
// import { USER_ACTION_TYPES } from './user/user.types'
import logger from 'redux-logger';
import { rootReducer } from './root-rudcer';
import { USER_ACTION_TYPES } from './user/user.types';
import { 
    persistReducer, 
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from '@redux-saga/core';

import { rootSaga } from './root-saga/root-saga';


import USER_INITIAL_STATE from './user/user.default'
import CART_INITIAL_STATE from './cart/cart.default'
import CATEGORIES_INITIA_STATE from './categories/categories.default'


// persist middleware
const persistConfig = {
    key: 'root',
    storage,
    // blackLlist: ['user'],
    whitelist: ['categories', 'cart', 'user']
};
const preloadedState = {
    user: USER_INITIAL_STATE,
    categories: CATEGORIES_INITIA_STATE,
    cart: CART_INITIAL_STATE
}
export const persistedReducer = persistReducer(persistConfig, rootReducer);


//soga middle
const sagaMiddleware = createSagaMiddleware();




export const store = configureStore ({
    // reducer: rootReducer,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>{ 
        return   getDefaultMiddleware({
            // thunk: true,
            // serializableCheck :false
            serializableCheck :  {
                // ignoreState: true,
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, USER_ACTION_TYPES.SET_CURRENT_USER]
            }
        }).concat(logger, sagaMiddleware)
    },
    preloadedState,
    // middleware: [thunk, logger],
    devTools: process.env.NODE_ENV !== 'production',
})
sagaMiddleware.run(rootSaga);

// const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

export const persistor = persistStore(store);

