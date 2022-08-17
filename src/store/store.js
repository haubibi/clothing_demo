// import { compose , applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux'; 
// imo
// import { USER_ACTION_TYPES } from './user/user.types'
import logger from 'redux-logger';
import { rootReducer } from './root-rudcer';

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

// const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));





const persistConfig = {
    key: 'root',
    storage,
    // blackLlist: ['user'],
    // whitelist: ['categories', 'cart']
};

const middleware = [logger];
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

export const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore ({
    // reducer: rootReducer,
    reducer: persistedReducer,
    middleware: [logger],
    // enhancer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middleWares),
    devTools: process.env.NODE_ENV !== 'production',
})


export const persistor = persistStore(store);

