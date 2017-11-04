import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';

import * as UtActions from './redux/ut.actions'
import { UtDay } from "./models/ut-day.model";
import { UtEntry } from "./models/ut-entry.model";


@Injectable()
export class UtService {
    constructor(private http: Http, private store: Store<any>) { }

    getUserName() {
        // TODO: there is an issue here in that anytime we want to get the username we will re-issue the
        // http get in the effect and set the username again. Need to make sure if we've already done that
        // that we just return the name that we already have.
        this.store.dispatch(new UtActions.GetUsername());
        return this.store.select('utStore');
    }

    getUtEntries() {
        this.store.dispatch(new UtActions.GetEntries());
        return this.store.select('utStore');
        //let options = new RequestOptions({ withCredentials: true });
        //return this.http.get('http://localhost:2301/api/ut/utEntries', options)
        //    .map(
        //    (response: Response) => {
        //        return response.json();
        //      }
        //    )
    }

    setMonth(arg: {'month':number, 'year':number}) {
      this.store.dispatch(new UtActions.SetMonth(arg));
      return this.store.select('utStore');
    }

    saveEntry(entry: UtEntry) {
      this.store.dispatch(new UtActions.SaveEntry(entry));
      return this.store.select('utStore');
    }
}
