import { call, all, put, takeLatest, takeEvery}  from 'redux-saga/effects';
import { 
    userSignInFailedAction, 
    userSignInSuccesssAction, 
    userSignupFailedAction, 
    userSignupSuccessAction,
    userSignoutFailed,
    userSignoutSuccess
} from '../user/user.action'
import { USER_ACTION_TYPES } from '../user/user.types'
import { 
            getCurrentUser, 
            createUserDocumentFromAuth, 
            signInWithGooglePopup, 
            signOutUser, 
            signInWithWithEmailAndPasswordMethod,
            createAuthUserWithEmailAndPassword,           
} from '../../utils/firebase/firebas.utils';

export function* getAuthSnapshoot(userAuth, additionalInfor) {
    try {
        // console.log(userAuth, additionalInfor)
        const userSnapshot = yield call(createUserDocumentFromAuth,userAuth,additionalInfor);
        // console.log(userSnapshot)
        const user = {id: userSnapshot.id, ...userSnapshot.data()};
        // console.log(user)
        yield put(userSignInSuccesssAction(JSON.stringify(user)))
    }catch(error) {
        const err = JSON.stringify(error);
        yield put(userSignInFailedAction(err));
    }
}





//check authentification
export function* onCheckAuthentification () {
    try{
        //ES7 sytax
        const user = yield call(getCurrentUser);
        if(!user) return;
        yield call(getAuthSnapshoot, user);
    } catch (error){
        const err = JSON.stringify(error);
        yield put(userSignInFailedAction(err));
    }
}



function* onsignInWithGooglePopupSaga() {
    try{
        const googleUser = yield signInWithGooglePopup();
        // getAuthSnapshoot(userAuth, additionalInfor) 
        if(!googleUser.user) return;
        yield call(getAuthSnapshoot, googleUser.user);
    }catch (error) {
        const err = JSON.stringify(error);
        yield put(userSignInFailedAction(err));
    }
}


function* onSigninWithEmail({payload}) {// pass action
    const {email, password} = payload;
    try {
        // const emailUser =  yield call(signInWithWithEmailAndPasswordMethod, email, password)
        yield signInWithWithEmailAndPasswordMethod(email, password);
        const userAuth = yield call(getCurrentUser);
        yield getAuthSnapshoot(userAuth);
        // console.log(email, password)
    }catch(error) {
        // console.log(error)
        const err = JSON.stringify(error);
        yield put(userSignInFailedAction(err));
    }
}


function* onSignoutSaga() {
    try {
        yield call(signOutUser);
        yield put(userSignoutSuccess());
    } catch(error) {
        yield put(userSignoutFailed(error));
    }
}
// createUserWithEmailAndPassword

function* onSignupSaga(action) {
    const { email, password, displayName } = action.payload
    try {
        const user = yield call(createAuthUserWithEmailAndPassword, email, password);
        // console.log(user,displayName)
        if(!user) return;
        yield call(getAuthSnapshoot,user.user, displayName);
    } catch(error) {
        put(userSignupFailedAction(error));
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
    yield takeLatest(USER_ACTION_TYPES.USER_SIGIN_EMAIL, onSigninWithEmail)
}
// export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export function* signoutSaga() {
    yield takeLatest(USER_ACTION_TYPES.USER_SIGNOUT, onSignoutSaga)
}

export function* signupSaga() {
    yield takeLatest(USER_ACTION_TYPES.USER_SIGNUP, onSignupSaga)
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