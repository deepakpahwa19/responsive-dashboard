import { COUNTRIES_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from './reducerUtil';

const initialAction = {
    destinations: [],
    isCountriesLoading: false,
    status: '',
    statusCode: '',
    errorMessage: '',
    errorCode: ''
};

export const countriesReducer = (state = initialAction, action) => {
    switch (action.type) {
        case COUNTRIES_ACTION_TYPES.GET_COUNTRIES:
            return updateState(state, action.payload, { isCountriesLoading: true });

        case COUNTRIES_ACTION_TYPES.GET_COUNTRIES_SUCCESS:
        case COUNTRIES_ACTION_TYPES.GET_COUNTRIES_FAILED:
            const { message, data } = action.payload;
            console.log(message, data);
            return updateState(state, data, { message, isCountriesLoading: false });

        default:
            break;
    }
    return state;
};
