import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';

import * as UtActions from './redux/ut.actions'


@Injectable()
export class UtService {
    constructor(private http: Http, private store: Store<{ utStore: { userName: string } }>) { }

    getUserName() {
        this.store.dispatch(new UtActions.GetUsername());
        return this.store.select('utStore');
    }

    getUtEntries(): Observable<any> {
        let options = new RequestOptions({ withCredentials: true });
        return this.http.get('http://localhost:2301/api/ut/utEntries', options)
            .map(
            (response: Response) => {
                return response.json();
              }
            )
    }
}
