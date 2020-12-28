import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import basketReducer from "./basket/basketReducer";
import favoritesReducer from "./favorite/favoritesReducer";
import shopReducer from "./shop/ShopReducer";
import userReducer from "./userAuth/userReducer";

const { combineReducers } = require("redux");


const persistConfig = {
  key: 'root',
  storage,
  whitelist : ["basket"]
}

const rootReducers = combineReducers({
  user: userReducer,
  basket: basketReducer,
  favorites: favoritesReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducers);