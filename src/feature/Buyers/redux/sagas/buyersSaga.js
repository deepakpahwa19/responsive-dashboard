import { takeLatest, put } from 'redux-saga/effects';
import { getBuyersFailedAction, getBuyersSuccessAction } from '../actions/actions/buyersAction';
import { BUYERS_ACTION_TYPES } from '../actions/actionTypes';
import { STATUS } from '../../../../constants/commonConstants';
import { getBuyersAPI } from '../../services';

function* getBuyersSaga(action) {
    const response = yield getBuyersAPI();
    switch (response.status) {
        case STATUS.SUCCESS:
            yield put(getBuyersSuccessAction(response));
            break;
        case STATUS.FAILED:
            yield put(getBuyersFailedAction(response));
            break;
        default:
            break;
    }
}

export function* buyersWatcherSaga() {
    yield takeLatest(BUYERS_ACTION_TYPES.GET_BUYERS, getBuyersSaga);
}
