import { favoritesTypes} from './favoritesTypes'
const initialState = {
    favorite : []
}


const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case favoritesTypes.ADD_TO_FAVORITES: 
        let newFavorite = state.favorite.includes(action.payload);
        if (newFavorite) {
            alert('Item Already added to your wishlist')
          return {...state};
        } else {
            return {favorite : [...state.favorite, action.payload]}
        }
        case favoritesTypes.REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorite: state.favorite.filter(favouritewishist => favouritewishist.id !== action.payload )
            }
        default :
            return state    
    }
}

export default favoritesReducer;