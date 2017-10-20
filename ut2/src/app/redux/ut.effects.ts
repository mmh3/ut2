import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import * as UtActions from './ut.actions';
import { UtEntry } from "../models/ut-entry.model";
import { UtDay } from "../models/ut-day.model";

@Injectable()
export class UtEffects {
    @Effect()
    getUsername = this.actions$
        .ofType(UtActions.GET_USERNAME)
        .switchMap(() => {
            let headers = new Headers();
            let options = new RequestOptions({ headers: headers, withCredentials: true });
            return this.http.get('http://localhost:2301/api/ut/username', options);
        })
        .map((response: Response) => {
            return response.json();
        })
        .map((response: any) => {
            return {
                type: UtActions.SET_USERNAME,
                payload: response
            };
        });

    @Effect()
    getEntries = this.actions$
      .ofType(UtActions.GET_ENTRIES)
      .switchMap(() => {
        let options = new RequestOptions({ withCredentials: true });
        return this.http.get('http://localhost:2301/api/ut/utEntries', options);
      })
      .map((response: Response) => {
        return response.json();
      })
      .map((result: Array<any>) => {
        var days = {};
        var daysArray = [];
        if (result) {
          console.log(result);
          result.forEach((e) => {
            if (days[e.entry_date] === undefined) {
              var ent = new UtEntry(+e.time_tracker_uid, +e.project_number, new Date(e.entry_date), +e.work_type, +e.minutes, new Date(e.date_created), e.created_by, new Date(e.date_last_modified), e.last_maintained_by, +e.employee_id, +e.action_type, e.comments, e.bad_work);
              days[e.entry_date] = new UtDay(new Date(e.entry_date), ent);
            }
            else {
              days[e.entry_date].addEntry(new UtEntry(+e.time_tracker_uid, +e.project_number, new Date(e.entry_date), +e.work_type, +e.minutes, new Date(e.date_created), e.created_by, new Date(e.date_last_modified), e.last_maintained_by, +e.employee_id, +e.action_type, e.comments, e.bad_work));
            }
          });

          // Create an array we can use in the template
          for (var objectKey in days) {
            daysArray.push(days[objectKey]);
          }
          // This sorting isn't working right for some reason? It messes up the last day in the sort so instead we're just sorting in the query.
          //daysArray.sort(function (a, b) {
          //    a = new Date(a.entryDate);
          //    b = new Date(b.entryDate);
          //    return b - a;
          //})

        }
        return daysArray;
      })
      .map((response: any) => {
        return {
          type: UtActions.SET_ENTRIES,
          payload: response
        };
      });

    constructor(private actions$: Actions, private http: Http){}
}
