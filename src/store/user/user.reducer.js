import { USER_ACTION_TYPES } from './user.types'
import USER_INITIAL_STATE from './user.default'



//create a reduce function return an object
/*
    { currentUser: null}
*/

export const userReducer = (state = USER_INITIAL_STATE, action) =>{
    const { type, payload } = action;
    // console.log(payload)
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: JSON.stringify(payload)
            };
        case USER_ACTION_TYPES.CHECK_USER_AUTHENTIFICATION:
            return {
                ...state,
                isLoading: true,
            };
        case USER_ACTION_TYPES.USER_SIGNIN_FAILed:
            return {
                ...state,
                error: payload
            };
        case USER_ACTION_TYPES.USER_SIGNUP_FAILED:
            return {
                ...state,
                error: payload
            };
        case USER_ACTION_TYPES.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                payload: payload
            };
        case USER_ACTION_TYPES.USER_SIGIN_SUCCESS:
            return {
                ...state,
                currentUser :payload
            };
        case USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            };
        case USER_ACTION_TYPES.USER_SIGNOUT_FAILED:
            return {
                ...state,
                error: payload
            };
        default:
            return state;
    }
}



