import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import middleware from './middleware'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  {},
  applyMiddleware(
    ...middleware, 
  )
);
export const persistor = persistStore(store);
