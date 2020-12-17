import { basketTypes } from './basketTypes'

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
          return {
              ...state,
              basket: state.basket.filter(newbasket => newbasket.id !== action.payload)
            }
      default:
        return state;
    }
}



export default basketReducer


export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);