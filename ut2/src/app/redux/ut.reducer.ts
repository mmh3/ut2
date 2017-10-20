import { Action } from '@ngrx/store';
import * as UtActions from './ut.actions';

const initialState = {
    userName: null,
    days: []
};

export function utReducer(state = initialState, action: UtActions.UtActions) {
    switch (action.type) {

        case UtActions.SET_USERNAME:
            return {
                ...state,
                userName: action.payload
            }

        case UtActions.SET_ENTRIES:
            return {
                ...state,
                days: action.payload
            }

        default:
            return state;
    }
}
