import {favoritesTypes} from './favoritesTypes';



export const addToFavorites = (id, title, image, price, description) => {
  return {
    type: favoritesTypes.ADD_TO_FAVORITES,
    payload: {
      id,
      title,
      image,
      price,
      description,
    },
  };
};