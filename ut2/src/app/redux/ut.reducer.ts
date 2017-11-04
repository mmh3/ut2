import { Action } from '@ngrx/store';
import * as UtActions from './ut.actions';

const initialState = {
  userName: null,
  allDays: {},
  displayMonthDays: [],
  displayMonth: 1,
  displayYear: 2017
};

export function utReducer(state = initialState, action: UtActions.UtActions) {
    var days = [];

    switch (action.type) {

      case UtActions.SET_USERNAME:
        return {
          ...state,
          userName: action.payload
        }

      case UtActions.SET_ENTRIES:
        days = filterDaysForMonthToArray(action.payload, state.displayMonth, state.displayYear);

        return {
          ...state,
          allDays: action.payload,
          displayMonthDays: days
        }

      case UtActions.SET_MONTH:
        days = filterDaysForMonthToArray(state.allDays, action.payload.month, action.payload.year);

        return {
          ...state,
          displayMonth: action.payload.month,
          displayYear: action.payload.year,
          displayMonthDays: days
        }

        default:
            return state;
    }
}

function filterDaysForMonthToArray(allDays: {}, month: number, year: number) {
  var days = [];

  if (typeof allDays === "undefined") {
    return days;
  }

  const filtered = Object.keys(allDays)
    .filter(key => (new Date(key).getUTCMonth() + 1 === month && new Date(key).getUTCFullYear() === year))
    .reduce((obj, key) => {
      obj[key] = allDays[key];
      return obj;
    }, {});

  for (var objectKey in filtered) {
    days.push(filtered[objectKey]);
  }

  return days;
}
