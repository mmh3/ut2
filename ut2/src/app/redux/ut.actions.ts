import { Action } from '@ngrx/store';

export const SET_USERNAME = 'GET_USERNAME';
export const GET_USERNAME = 'SET_USERNAME';
export const GET_ENTRIES = 'GET_ENTRIES';

export class GetUsername implements Action {
    readonly type = GET_USERNAME;
}

export class SetUsername implements Action {
    readonly type = SET_USERNAME;

    constructor(public payload: string) { }
}

export class GetEntries implements Action {
    readonly type = GET_ENTRIES;
}


export type UtActions = GetUsername | SetUsername | GetEntries;
