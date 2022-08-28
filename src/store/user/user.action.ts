import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import { matchCreateActions } from '../../utils/reducer/reducer.utils';
import { IAction, IActionWithPayload } from '../../utils/reducer/reducer.utils';
import { IUserData } from '../../utils/firebase/firebas.utils';


export type setCurrentUserType = IActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, Error>;
export type checkAuthentificationType  = IAction<USER_ACTION_TYPES.CHECK_USER_AUTHENTIFICATION>;
export type userSignInFailedType  = IActionWithPayload<USER_ACTION_TYPES.USER_SIGNIN_FAILed, Error>;
export type userSignInSuccesssType  = IActionWithPayload<USER_ACTION_TYPES.USER_SIGIN_SUCCESS, IUserData & {id: string}>;
export type userSignGooglePopupType  = IAction<USER_ACTION_TYPES.USER_SIGIN_GOOGLE_POPUP>;
export type userSignoutType  = IAction<USER_ACTION_TYPES.USER_SIGNOUT>;
export type userSignoutSuccessType  = IAction<USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS>;
export type userSignoutFailedType  = IActionWithPayload<USER_ACTION_TYPES.USER_SIGNOUT_FAILED, Error>;
export type userSignEmailType  = IActionWithPayload<USER_ACTION_TYPES.USER_SIGIN_EMAIL, {email: string, password: string}>;
export type userSignupType  = IActionWithPayload<USER_ACTION_TYPES.USER_SIGNUP, {email: string, password: string, displayName: string}>;
export type userSignupFailedType  = IActionWithPayload<USER_ACTION_TYPES.USER_SIGNUP_FAILED, Error>;

export const setCurrentUserAction = matchCreateActions(
    (user: Error):setCurrentUserType  => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);
export const checkAuthentificationAsync = matchCreateActions(
    ():checkAuthentificationType => createAction(USER_ACTION_TYPES.CHECK_USER_AUTHENTIFICATION)
);
export const userSignInFailedAction = matchCreateActions(
    (error:Error):userSignInFailedType => createAction(USER_ACTION_TYPES.USER_SIGNIN_FAILed,error)
);
export const userSignInSuccesssAction = matchCreateActions(
    (user: IUserData & {id: string}):userSignInSuccesssType  => createAction(USER_ACTION_TYPES.USER_SIGIN_SUCCESS, user)
);
export const userSignGooglePopupAction = matchCreateActions(
    ():userSignGooglePopupType => createAction(USER_ACTION_TYPES.USER_SIGIN_GOOGLE_POPUP)
);
export const userSignout = matchCreateActions(
    ():userSignoutType => createAction(USER_ACTION_TYPES.USER_SIGNOUT)
);
export const userSignoutSuccess = matchCreateActions(
    ():userSignoutSuccessType => createAction(USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS)
);
export const userSignoutFailed = matchCreateActions(
    (error: Error):userSignoutFailedType => createAction(USER_ACTION_TYPES.USER_SIGNOUT_FAILED, error)
);
export const userSignEmailAction = matchCreateActions(
    (email: string, password: string):userSignEmailType => createAction(USER_ACTION_TYPES.USER_SIGIN_EMAIL, {email, password})
);
export const userSignupAction = matchCreateActions(
    (email: string, password: string, displayName: string):userSignupType => createAction(USER_ACTION_TYPES.USER_SIGNUP, {email, password,displayName})
);
export const userSignupFailedAction = matchCreateActions(
    (error: Error):userSignupFailedType => createAction(USER_ACTION_TYPES.USER_SIGNUP_FAILED, error)
);



// export const setCurrentUserAction = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
// export const checkAuthentificationAsync = (user) => createAction(USER_ACTION_TYPES.CHECK_USER_AUTHENTIFICATION, user);
// export const userSignInFailedAction = (error) => createAction(USER_ACTION_TYPES.USER_SIGNIN_FAILed,error);
// export const userSignInSuccesssAction = (payload) => createAction(USER_ACTION_TYPES.USER_SIGIN_SUCCESS,payload);
// export const userSignGooglePopupAction = () => createAction(USER_ACTION_TYPES.USER_SIGIN_GOOGLE_POPUP);
// export const userSignout = () => createAction(USER_ACTION_TYPES.USER_SIGNOUT);
// export const userSignoutSuccess = () => createAction(USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS);
// export const userSignoutFailed = (error) => createAction(USER_ACTION_TYPES.USER_SIGNOUT_FAILED, error);
// export const userSignEmailAction = (email, password) => createAction(USER_ACTION_TYPES.USER_SIGIN_EMAIL, {email, password});
// export const userSignupAction = (email, password, displayName) => createAction(USER_ACTION_TYPES.USER_SIGNUP, {email, password, displayName});
// export const userSignupFailedAction = (error) => createAction(USER_ACTION_TYPES.USER_SIGNUP_FAILED, error);

