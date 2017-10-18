import { Action } from '@ngrx/store';
import * as UtActions from './ut.actions';

const initialState = {
    userName: null,
    entries: []
};

export function utReducer(state = initialState, action: UtActions.UtActions) {
    switch (action.type) {

        case UtActions.SET_USERNAME:
            return {
                ...state,
                userName: action.payload
            }

        case UtActions.GET_ENTRIES:
            return {
                ...state,
                entries: []
            }

        default:
            return state;
    }
}
