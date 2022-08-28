// import { call, all, put, takeLatest, takeEvery}  from 'redux-saga/effects';
import { call, all, put, takeLatest}  from 'typed-redux-saga/macro';
import { 
    userSignInFailedAction, 
    userSignInSuccesssAction, 
    userSignupFailedAction, 
    userSignoutFailed,
    userSignoutSuccess,
    userSignEmailAction,
    userSignEmailType,
    userSignupType
} from '../user/user.action'
import { USER_ACTION_TYPES } from '../user/user.types'
import { 
    getCurrentUserAuth, 
    createUserDocumentFromAuth, 
    signInWithGooglePopup, 
    signOutUser, 
    signInWithWithEmailAndPasswordMethod,
    createAuthUserWithEmailAndPassword,
    IAdditionalInfo,
    IUserData
} from '../../utils/firebase/firebas.utils';

import { User } from 'firebase/auth';




export function* getAuthSnapshootFromUserAuth(userAuth: User, additionalInfor?: IAdditionalInfo) {
    try {
        // console.log(userAuth, additionalInfor)
        // console.log(userAuth)
        const userSnapshot = yield* call(createUserDocumentFromAuth,userAuth,additionalInfor);
        // console.log(userSnapshot!.data())
        if(!userSnapshot) return;
        const user = {id: userSnapshot.id, ...userSnapshot.data()} as (IUserData & {id: string});
        // console.log(user)
        yield* put(userSignInSuccesssAction(user));
    }catch(error) {
        yield* put(userSignInFailedAction(error as Error));
    }
}





//check authentification
export function* onCheckAuthentification () {
    try{
        //ES7 sytax
        const userAuth = yield* call(getCurrentUserAuth);
        if(!userAuth) return;
        yield* call(getAuthSnapshootFromUserAuth, userAuth);
    } catch (error){
        yield* put(userSignInFailedAction(error as Error));
    }
}



function* onsignInWithGooglePopupSaga() {
    try{
        const googleUser = yield* call(signInWithGooglePopup);
        const userAuth = googleUser.user;
        // console.log(googleUser)
        if(!userAuth) return;
        yield call(getAuthSnapshootFromUserAuth, userAuth);
    }catch (error) {
        yield put(userSignInFailedAction(error as Error));
    }
}


function* onSigninWithEmail(singinWithEmailAction:userSignEmailType ) {// pass action
    const {email, password} = singinWithEmailAction.payload;
    try {
        // const emailUser =  yield call(signInWithWithEmailAndPasswordMethod, email, password)
        yield* call(signInWithWithEmailAndPasswordMethod,email, password);

        const userAuth = yield* call(getCurrentUserAuth);

        yield* call(getAuthSnapshootFromUserAuth,userAuth as User);
        // console.log(email, password)
    }catch(error) {
        // console.log(error)
        yield put(userSignInFailedAction(error as Error));
    }
}


function* onSignoutSaga() {
    try {
        yield call(signOutUser);
        yield put(userSignoutSuccess());
    } catch(error) {
        yield put(userSignoutFailed(error as Error));
    }
}
// createUserWithEmailAndPassword

function* onSignupSaga(signupAction:userSignupType) {
    const { email, password, displayName } = signupAction.payload;
    try {
        const user = yield* call(createAuthUserWithEmailAndPassword, email, password);
        if(!user) return;
        const useAuth = user.user as User;
        // console.log(user,displayName)
        if(!user) return;
        yield* call(getAuthSnapshootFromUserAuth, useAuth, {displayName});
    } catch(error) {
        put(userSignupFailedAction(error as Error));
    }
}


export function* checkAuthentification () {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_AUTHENTIFICATION, onCheckAuthentification);
}

export function* signInWithGooglePopupSaga() {
    // console.log('google')
    yield takeLatest(USER_ACTION_TYPES.USER_SIGIN_GOOGLE_POPUP, onsignInWithGooglePopupSaga)
}

export function* signInWithEmailSaga() {
    yield* takeLatest(USER_ACTION_TYPES.USER_SIGIN_EMAIL, onSigninWithEmail)
}
// export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export function* signoutSaga() {
    yield* takeLatest(USER_ACTION_TYPES.USER_SIGNOUT, onSignoutSaga)
}

export function* signupSaga() {
    yield* takeLatest(USER_ACTION_TYPES.USER_SIGNUP, onSignupSaga)
}


export function* authentificationAsync() {
    yield all([
        call(checkAuthentification),
        call(signInWithGooglePopupSaga),
        call(signoutSaga),
        call(signInWithEmailSaga),
        call(signupSaga)
    ]);
}