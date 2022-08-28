import { IUserData } from "../../utils/firebase/firebas.utils";
export interface IUserState {
    currentUser: (IUserData & {id: string}) | null;
    isLoading: boolean;
    error: Error | null;
    signInSuccess: boolean;
}


const USER_INITIAL_STATE: IUserState = {
    currentUser: null,
    isLoading: false,
    error: null,
    signInSuccess: false
}

export default USER_INITIAL_STATE;


