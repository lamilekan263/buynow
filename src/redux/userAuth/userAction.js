import { userTypes } from './userActionTypes';


export const updateUser = (state) => {
    return {
        type: userTypes.SET_CURRENT_USER,
        payload: state
    }
}

export const noUser = () => {
    return {
        type : userTypes.NO_USER_AVAILABLE
    }
}