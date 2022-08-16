import { createContext, useState ,useEffect, useReducer} from "react";
import { onUserAuthStateChanged,createUserDocumentFromAuth, signOutUser } from "../utils/firebase/firebas.utils";

import { useNavigate } from 'react-router-dom';


//as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>{}
});

//define user types
const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}


//create a reduce function return an object
/*
    { currentUser: null}
*/

const userReducer = (state, action) =>{
    const { type, payload } = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                payload
            };
        default:
            throw new Error(`can't find type ${type} in this action`)
    }
}


//initial state
const INITIAL_STATE = {
    currentUser: null
}

export const UserContextProvider = ({ children }) =>{
    // const [currentUser, setCurrentUser] = useState(null);
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

    // console.log(currentUser)

    const navigate = useNavigate();
    
    const setCurrentUser = (user) =>{
        dispatch({
            type: USER_ACTION_TYPES.SET_CURRENT_USER,
            payload: user
        });
    };
    const value = {currentUser, setCurrentUser};
    
    // signOutUser();
    
    useEffect(()=>{
        signOutUser();
        const unsubscribe = onUserAuthStateChanged((user)=>{
            // console.log(user)
            // console.log(user)
            setCurrentUser(user);
            if(user){
                createUserDocumentFromAuth(user);
                console.log(111)
                navigate(-1);
            }
        });

        return unsubscribe;
    },[]);

    return (
        <UserContext.Provider value = {value}>{children}</UserContext.Provider>
    );
}


