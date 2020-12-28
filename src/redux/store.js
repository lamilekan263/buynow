import { applyMiddleware, createStore, } from 'redux';
import { persistStore } from 'redux-persist'

import logger from 'redux-logger'
import rootReducers from './rootReducers'



const middlewares = [logger]

export const store = createStore(
  rootReducers,
  applyMiddleware(...middlewares)
);

export const persiststor = persistStore(store)

