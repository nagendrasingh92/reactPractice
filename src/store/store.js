import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';

const loggerMiddleware = createLogger();

const persistConfig = {
    key: 'root',
    storage,
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

const persistor = persistStore(store);
export { persistor };
export default store