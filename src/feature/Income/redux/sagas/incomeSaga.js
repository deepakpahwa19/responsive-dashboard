import { takeLatest, put } from 'redux-saga/effects';
import { INCOME_ACTION_TYPES } from '../actions/actionTypes';
import { STATUS } from '../../../../constants/commonConstants';
import { getIncomeAPI } from '../../services';
import { getIncomeFailedAction, getIncomeSuccessAction } from '../actions/actions/incomeAction';

function* getIncomeSaga(action) {
    const response = yield getIncomeAPI();
    switch (response.status) {
        case STATUS.SUCCESS:
            yield put(getIncomeSuccessAction(response));
            break;
        case STATUS.FAILED:
            yield put(getIncomeFailedAction(response));
            break;
        default:
            break;
    }
}

export function* incomeWatcherSaga() {
    yield takeLatest(INCOME_ACTION_TYPES.GET_INCOME, getIncomeSaga);
}
