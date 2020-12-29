import {favoritesTypes} from './favoritesTypes';



export const addToFavorites = (favorites) => {
  console.log(favorites);
  return {
    type: favoritesTypes.ADD_TO_FAVORITES,
    payload: favorites,
  };
};


export const removeFromFavorites = favourites => {
  console.log(favourites);
  return {
    type: favoritesTypes.REMOVE_FROM_FAVORITES,
    payload: favourites,
  };
} 