import { takeLatest, put } from 'redux-saga/effects';
import { getHighlightsFailedAction, getHighlightsSuccessAction } from '../actions/actions/highlightsAction';
import { HIGHLIGHTS_ACTION_TYPES } from '../actions/actionTypes';
import { STATUS } from '../../../../constants/commonConstants';
import { getHighlightsAPI } from '../../services';

function* getHighlightsSaga(action) {
    const response = yield getHighlightsAPI();
    switch (response.status) {
        case STATUS.SUCCESS:
            yield put(getHighlightsSuccessAction(response));
            break;
        case STATUS.FAILED:
            yield put(getHighlightsFailedAction(response));
            break;
        default:
            break;
    }
}

export function* highlightsWatcherSaga() {
    yield takeLatest(HIGHLIGHTS_ACTION_TYPES.GET_HIGHLIGHTS, getHighlightsSaga);
}
