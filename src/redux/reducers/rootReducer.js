import { combineReducers } from 'redux';
import { countriesReducer } from '../../feature/Countries/';
import { highlightsReducer } from '../../feature/Highlights';
import { buyersReducer } from '../../feature/Buyers';
import { incomeReducer } from '../../feature/Income';

const rootReducer = combineReducers({
    countries: countriesReducer,
    highlights: highlightsReducer,
    buyers: buyersReducer,
    income: incomeReducer
});

export default rootReducer;
