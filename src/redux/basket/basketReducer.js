import { basketTypes } from './basketTypes'
// import { addItemToCart } from "./basket.utils";

const initialState = {
    basket : []
}
// get basketTotal


const basketReducer = (state = initialState, action) => {
    switch (action.type) {
      case basketTypes.ADD_TO_BASKET:

        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
      case basketTypes.REMOVE_FROM_BASKET:  
        const index = state.basket.findIndex(basketItem => basketItem.id === action.payload);
        let newBasket = [...state.basket];
        if (index >= 0) {

           newBasket.splice(index, 1)
        }
        return {
          ...state,
          basket: newBasket
        }
      default:
        return state;
    }
}



export default basketReducer


export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

