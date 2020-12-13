import basketReducer from "./basket/basketReducer";
import favoritesReducer from "./favorite/basketReducer";
import shopReducer from "./shop/ShopReducer";
import userReducer from "./userAuth/userReducer";

const { combineReducers } = require("redux");




const rootReducers = combineReducers({
  user: userReducer,
  basket: basketReducer,
  favorites: favoritesReducer,
  shop: shopReducer,
});

export default rootReducers;