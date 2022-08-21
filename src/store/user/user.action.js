import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCurrentUserAction = (user) => createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
export const checkAuthentificationAsync = (user) => createAction(USER_ACTION_TYPES.CHECK_USER_AUTHENTIFICATION, user);
export const userSignInFailedAction = (error) => createAction(USER_ACTION_TYPES.USER_SIGNIN_FAILed,error);
export const userSignInSuccesssAction = (payload) => createAction(USER_ACTION_TYPES.USER_SIGIN_SUCCESS,payload);
export const userSignGooglePopupAction = () => createAction(USER_ACTION_TYPES.USER_SIGIN_GOOGLE_POPUP);
export const userSignout = () => createAction(USER_ACTION_TYPES.USER_SIGNOUT);
export const userSignoutSuccess = () => createAction(USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS);
export const userSignoutFailed = (error) => createAction(USER_ACTION_TYPES.USER_SIGNOUT_FAILED, error);
export const userSignEmailAction = (email, password) => createAction(USER_ACTION_TYPES.USER_SIGIN_EMAIL, {email, password});
export const userSignupAction = (email, password, displayName) => createAction(USER_ACTION_TYPES.USER_SIGNUP, {email, password, displayName});
export const userSignupFailedAction = (error) => createAction(USER_ACTION_TYPES.USER_SIGNUP_FAILED, error);