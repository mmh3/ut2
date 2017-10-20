import { Action } from '@ngrx/store';

import { UtDay } from "../models/ut-day.model";


export const SET_USERNAME = 'GET_USERNAME';
export const GET_USERNAME = 'SET_USERNAME';
export const GET_ENTRIES = 'GET_ENTRIES';
export const SET_ENTRIES = 'SET_ENTRIES';

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

export class SetEntries implements Action {
    readonly type = SET_ENTRIES;

    constructor(public payload: Array<any>) { }
}


export type UtActions = GetUsername | SetUsername | GetEntries | SetEntries;
