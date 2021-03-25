import { COUNTRIES_ACTION_TYPES } from '../actionTypes';

export const getCountriesAction = () => ({
    type: COUNTRIES_ACTION_TYPES.GET_COUNTRIES
});

export const getCountriesSuccessAction = payload => ({
    type: COUNTRIES_ACTION_TYPES.GET_COUNTRIES_SUCCESS,
    payload: payload
});

export const getCountriesFailedAction = payload => ({
    type: COUNTRIES_ACTION_TYPES.GET_COUNTRIES_FAILED,
    payload: payload
});
