import { HIGHLIGHTS_ACTION_TYPES } from '../actionTypes';

export const getHighlightsAction = () => ({
    type: HIGHLIGHTS_ACTION_TYPES.GET_HIGHLIGHTS
});

export const getHighlightsSuccessAction = payload => ({
    type: HIGHLIGHTS_ACTION_TYPES.GET_HIGHLIGHTS_SUCCESS,
    payload: payload
});

export const getHighlightsFailedAction = payload => ({
    type: HIGHLIGHTS_ACTION_TYPES.GET_HIGHLIGHTS_FAILED,
    payload: payload
});
