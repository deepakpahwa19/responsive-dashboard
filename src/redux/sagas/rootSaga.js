import { all } from 'redux-saga/effects';

import { countriesWatcherSaga } from '../../feature/Countries';
import { highlightsWatcherSaga } from '../../feature/Highlights';
import { buyersWatcherSaga } from '../../feature/Buyers';
import { incomeWatcherSaga } from '../../feature/Income';

export default function* rootSaga() {
    yield all([countriesWatcherSaga(), highlightsWatcherSaga(), buyersWatcherSaga(), incomeWatcherSaga()]);
}
