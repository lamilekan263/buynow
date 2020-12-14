import { basketTypes } from './basketTypes'

const initialState = {
    basket : []
}


const basketReducer = (state = initialState, action) => {
    switch (action.type) {
      case basketTypes.ADD_TO_BASKET:
        return {
          ...state,
          basket: [...state.basket, action.payload],
        };
        case basketTypes.REMOVE_FROM_BASKET:
            return{
                ...state,
                basket: []
            }

      default:
        return state;
    }
}


export default basketReducer