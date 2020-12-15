import { applyMiddleware, createStore, } from 'redux';
import { composeWithDevTools } from "remote-redux-devtools";

import logger from 'redux-logger'
import rootReducers from './rootReducers'



const middlewares = [logger]

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);



export default store