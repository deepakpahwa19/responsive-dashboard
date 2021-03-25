import { HIGHLIGHTS_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from './reducerUtil';

const initialAction = {
    destinations: [],
    isCountriesLoading: false,
    status: '',
    statusCode: '',
    errorMessage: '',
    errorCode: ''
};

export const highlightsReducer = (state = initialAction, action) => {
    switch (action.type) {
        case HIGHLIGHTS_ACTION_TYPES.GET_HIGHLIGHTS:
            return updateState(state, action.payload, { isCountriesLoading: true });

        case HIGHLIGHTS_ACTION_TYPES.GET_HIGHLIGHTS_FAILED:
        case HIGHLIGHTS_ACTION_TYPES.GET_HIGHLIGHTS_SUCCESS:
            const { message, data } = action.payload;
            console.log(message, data);
            return updateState(state, data, { message, isCountriesLoading: false });

        default:
            break;
    }
    return state;
};
