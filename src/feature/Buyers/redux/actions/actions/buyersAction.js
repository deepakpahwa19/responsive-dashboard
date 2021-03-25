import { BUYERS_ACTION_TYPES } from '../actionTypes';

export const getBuyersAction = () => ({
    type: BUYERS_ACTION_TYPES.GET_BUYERS
});

export const getBuyersSuccessAction = payload => ({
    type: BUYERS_ACTION_TYPES.GET_BUYERS_SUCCESS,
    payload: payload
});

export const getBuyersFailedAction = payload => ({
    type: BUYERS_ACTION_TYPES.GET_BUYERS_FAILED,
    payload: payload
});
