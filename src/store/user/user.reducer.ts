import { USER_ACTION_TYPES } from './user.types'
import USER_INITIAL_STATE from './user.default'

import { AnyAction } from 'redux';
import { IUserState} from './user.default'
import { 
    setCurrentUserAction,
    checkAuthentificationAsync,
    userSignInFailedAction,
    userSignInSuccesssAction,
    userSignGooglePopupAction,
    userSignoutSuccess,
    userSignoutFailed,
    userSignEmailAction,
    userSignupAction,
    userSignupFailedAction
} from './user.action';

//create a reduce function return an object
/*
    { currentUser: null}
*/

export const userReducer = (state = USER_INITIAL_STATE, action: AnyAction):IUserState  =>{
    const { type, payload } = action;
    // console.log(payload)

    if(setCurrentUserAction.match(action)){
        return {
            ...state,
            currentUser: payload
        };
    }
    if(checkAuthentificationAsync.match(action)){
        return {
            ...state,
            isLoading: true,
        };
    }
    if(userSignInFailedAction.match(action)){
        return {
            ...state,
            error: payload
        };
    }
    if(userSignupFailedAction.match(action)){
        return {
            ...state,
            error: payload
        };
    }
    if(userSignInSuccesssAction.match(action)){
        return {
            ...state,
            currentUser: payload
        };
    }
    if(userSignoutSuccess.match(action)){
        return {
            ...state,
            currentUser: null
        };
    }
    if(userSignoutFailed.match(action)){
        return {
            ...state,
            error: payload
        };
    }
    if(userSignupFailedAction.match(action)){
        return {
            ...state,
            error: payload
        };
    }

    return state;

    // switch(type) {
    //     case USER_ACTION_TYPES.SET_CURRENT_USER:
    //         return {
    //             ...state,
    //             currentUser: JSON.stringify(payload)
    //         };
    //     case USER_ACTION_TYPES.CHECK_USER_AUTHENTIFICATION:
    //         return {
    //             ...state,
    //             isLoading: true,
    //         };
    //     case USER_ACTION_TYPES.USER_SIGNIN_FAILed:
    //         return {
    //             ...state,
    //             error: payload
    //         };
    //     case USER_ACTION_TYPES.USER_SIGNUP_FAILED:
    //         return {
    //             ...state,
    //             error: payload
    //         };
    //     case USER_ACTION_TYPES.USER_SIGNUP_SUCCESS:
    //         return {
    //             ...state,
    //             payload: payload
    //         };
    //     case USER_ACTION_TYPES.USER_SIGIN_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser :payload
    //         };
    //     case USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS:
    //         return {
    //             ...state,
    //             currentUser: null
    //         };
    //     case USER_ACTION_TYPES.USER_SIGNOUT_FAILED:
    //         return {
    //             ...state,
    //             error: payload
    //         };
    //     default:
    //         return state;
    // }
}



