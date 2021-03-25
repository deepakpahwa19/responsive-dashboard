import { takeLatest, put } from 'redux-saga/effects';
import { getCountriesFailedAction, getCountriesSuccessAction } from '../actions/actions/countriesAction';
import { COUNTRIES_ACTION_TYPES } from '../actions/actionTypes';
import { STATUS } from '../../../../constants/commonConstants';
import { getCountriesAPI } from '../../services';

function* getCountriesSaga(action) {
    const response = yield getCountriesAPI();
    switch (response.status) {
        case STATUS.SUCCESS:
            yield put(getCountriesSuccessAction(response));
            break;
        case STATUS.FAILED:
            yield put(getCountriesFailedAction(response));
            break;
        default:
            break;
    }
}

export function* countriesWatcherSaga() {
    yield takeLatest(COUNTRIES_ACTION_TYPES.GET_COUNTRIES, getCountriesSaga);
}
