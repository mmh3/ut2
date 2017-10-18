import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import * as UtActions from './ut.actions';

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

    constructor(private actions$: Actions, private http: Http){}
}
