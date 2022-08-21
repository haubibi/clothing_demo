import { all, call, put, takeLatest  } from 'redux-saga/effects';
import { fetchCategoriesStartAction, fetchCategoriesErrorAction, fetchCategoriesSucceedAction } from '../categories/categories.action'
import { CATEGORIES_ACTION_TYPES } from '../categories/categories.types'
import { getCategoriesAndCocuments } from '../../utils/firebase/firebas.utils'


export function* fetchCategoriesAsync() {
    console.log(111)
    try{
        const categories = yield call(getCategoriesAndCocuments, 'categories');
        yield put(fetchCategoriesSucceedAction(categories));
    }catch (error){
        yield put(fetchCategoriesErrorAction(error));
    }
}


export function* onFetchCategoriesAsync() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    )
}