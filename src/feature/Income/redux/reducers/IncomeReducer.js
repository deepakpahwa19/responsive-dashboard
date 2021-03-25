import { INCOME_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from './reducerUtil';

const initialAction = {
    destinations: [],
    isCountriesLoading: false,
    status: '',
    statusCode: '',
    errorMessage: '',
    errorCode: ''
};

export const incomeReducer = (state = initialAction, action) => {
    switch (action.type) {
        case INCOME_ACTION_TYPES.GET_INCOME:
            return updateState(state, action.payload, { isCountriesLoading: true });

        case INCOME_ACTION_TYPES.GET_INCOME_FAILED:
        case INCOME_ACTION_TYPES.GET_INCOME_SUCCESS:
            const { message, data } = action.payload;
            return updateState(state, data, { message, isCountriesLoading: false });

        default:
            break;
    }
    return state;
};
