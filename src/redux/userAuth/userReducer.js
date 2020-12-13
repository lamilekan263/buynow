import {userTypes} from './userActionTypes'

const initialState = {
    currentUser: null
}



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case userTypes.SET_CURRENT_USER :
            return {
              ...state,
              currentUser: action.payload,
            };
        case userTypes.NO_USER_AVAILABLE:
            return {
              ...state,
              currentUser: null,
            };
    
        default:
            return state;
    }
}


export default userReducer

