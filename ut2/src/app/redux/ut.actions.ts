import { Action } from '@ngrx/store';

import { UtEntry } from "../models/ut-entry.model";


export const SET_USERNAME = 'GET_USERNAME';
export const GET_USERNAME = 'SET_USERNAME';
export const GET_ENTRIES = 'GET_ENTRIES';
export const SET_ENTRIES = 'SET_ENTRIES';
export const SET_MONTH = 'SET_MONTH';
export const SAVE_ENTRY = 'SAVE_ENTRY';

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

  constructor(public payload: {}) { }
}

export class SetMonth implements Action {
  readonly type = SET_MONTH;

  constructor(public payload: {'month': number, 'year': number}) { }
}

export class SaveEntry implements Action {
  readonly type = SAVE_ENTRY;

  constructor(public payload: UtEntry) { }
}


export type UtActions = GetUsername | SetUsername | GetEntries | SetEntries | SetMonth | SaveEntry;
