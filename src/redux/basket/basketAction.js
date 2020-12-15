import { basketTypes } from './basketTypes'


export const deleteFromBasket = (item) => {
  console.log("yes");
  return {
    type: basketTypes.REMOVE_FROM_BASKET,
    payload: item,
  };
};

export const addToBasket = basketItem => {
  console.log(basketItem);
  return {
    type: basketTypes.ADD_TO_BASKET,
    payload: basketItem
  };
  
};


