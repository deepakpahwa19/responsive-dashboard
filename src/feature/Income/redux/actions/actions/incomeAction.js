import { INCOME_ACTION_TYPES } from '../actionTypes';

export const getIncomeAction = () => ({
    type: INCOME_ACTION_TYPES.GET_INCOME
});

export const getIncomeSuccessAction = payload => ({
    type: INCOME_ACTION_TYPES.GET_INCOME_SUCCESS,
    payload: payload
});

export const getIncomeFailedAction = payload => ({
    type: INCOME_ACTION_TYPES.GET_INCOME_FAILED,
    payload: payload
});
