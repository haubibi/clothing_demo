import { all, call } from 'redux-saga/effects'
import { onFetchCategoriesAsync } from './fetch-catefories-saga'
import { authentificationAsync } from './user-saga'


export function* rootSaga() {
    yield all([
        call(onFetchCategoriesAsync),
        call(authentificationAsync)
    ])
}