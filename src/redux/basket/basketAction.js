import { basketTypes } from './basketTypes'

export const addToBasket = (id, title, image, price, description) => {
  return {
    type: basketTypes.ADD_TO_BASKET,
    payload: {
      id,
      title,
      image,
      price,
      description,
    },
  };
};