const initialState = {
    favorite : []
}


const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITE": 
            return {
                
                favorite : [...state.favorite, action.payload]
            }
        default :
            return state    
    }
}

export default favoritesReducer;