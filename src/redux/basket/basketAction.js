import { basketTypes } from './basketTypes'

export const addToBasket = (id, title, image, price) => {
  return {
    type: "ADD_TO_bASKET",
    payload: {
      id,
      title,
      image,
      price,
    },
  };
};