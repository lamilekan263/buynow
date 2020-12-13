const initialState = {
    favorite : []
}


const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE": 
            return {
                ...state,
                basket : [...state.basket, action.payload]
            }
        default :
            return state    
    }
}

export default favoritesReducer;