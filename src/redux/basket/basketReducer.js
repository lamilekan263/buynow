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
          // let index = state.basket.findIndex((basketItem) => basketItem.id  === action.payload);
          // let newBasket = [...state.basket]
          // console.log(newBasket)
          // if (index >= 0) {
          //   newBasket.splice(index, 1)
          //   console.log(newBasket);
          //     }else{
          //       console.warn(`sorry you can't remove item with index ${index}`)
          //     }
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