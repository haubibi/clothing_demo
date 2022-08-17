import { USER_ACTION_TYPES } from './user.types'


//initial state
const INITIAL_STATE = {
    currentUser: null
}



//create a reduce function return an object
/*
    { currentUser: null}
*/

export const userReducer = (state = INITIAL_STATE, action) =>{
    const { type, payload } = action;
    // console.log(payload)
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            return state;
    }
}



