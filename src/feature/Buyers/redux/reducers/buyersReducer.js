import { BUYERS_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from './reducerUtil';

const initialAction = {
    destinations: [],
    isCountriesLoading: false,
    status: '',
    statusCode: '',
    errorMessage: '',
    errorCode: ''
};

export const buyersReducer = (state = initialAction, action) => {
    switch (action.type) {
        case BUYERS_ACTION_TYPES.GET_BUYERS:
            return updateState(state, action.payload, { isCountriesLoading: true });

        case BUYERS_ACTION_TYPES.GET_BUYERS_SUCCESS:
        case BUYERS_ACTION_TYPES.GET_BUYERS_FAILED:
            const { message, data } = action.payload;
            return updateState(state, data, { message, isCountriesLoading: false });

        default:
            break;
    }
    return state;
};
