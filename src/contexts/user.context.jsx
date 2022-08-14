import { createContext, useState ,useEffect} from "react";
import { onUserAuthStateChanged,createUserDocumentFromAuth, signOutUser } from "../utils/firebase/firebas.utils";

import { useNavigate } from 'react-router-dom';


//as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=>null
});


export const UserContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    const navigate = useNavigate();

    // signOutUser();

    useEffect(()=>{
        signOutUser();
        const unsubscribe = onUserAuthStateChanged((user)=>{
            // console.log(user)
            setCurrentUser(user);
            if(user){
                createUserDocumentFromAuth(user);
                navigate(-1);
            }
        });

        return unsubscribe;
    },[]);

    return (
        <UserContext.Provider value = {value}>{children}</UserContext.Provider>
    );
}


