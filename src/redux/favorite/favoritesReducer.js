import { favoritesTypes} from './favoritesTypes'
const initialState = {
    favorite : []
}


const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case favoritesTypes.ADD_TO_FAVORITES : 
            return {
                
                favorite : [...state.favorite, action.payload]
            }
        case favoritesTypes.REMOVE_FROM_FAVORITES:
            const index = state.favorite.findIndex((favoriteItem) => favoriteItem.id === action.payload);
            let newfavorites = [...state.favorite]
            if (index > 0) {
                newfavorites.splice(index, 1)
            } else {
                console.warn(`sorry cannot delete data from index ${index}`)
            }
            return {
                ...state,
                favorite: newfavorites
            }
        default :
            return state    
    }
}

export default favoritesReducer;