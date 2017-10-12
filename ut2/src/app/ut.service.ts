import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
//import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UtService {
    constructor(private http: Http) { }

    getUserName() {
        let headers = new Headers();//{ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, withCredentials: true });
        return this.http.get('http://localhost:2301/api/ut/username', options)
            .map(
              (response: Response) => {
                return response.json();
              }
            )
    }

    getUtEntries(): Observable<any> {
        let options = new RequestOptions({ withCredentials: true });
        return this.http.get('http://localhost:2301/api/ut/utEntries', options)
            .map(
            (response: Response) => {
                return response.json();
              }
            )

        //let options = new RequestOptions({ withCredentials: true });
        //return this.http.get('http://localhost:2301/api/ut/utEntries', options)
        //    .map(
        //    (response: Response) => {
        //        let res: Array<any> = response.json() || {};
        //        let entries: Array<UtEntry> = [];
        //        if (res) {
        //            res.forEach((e) => {
        //                entries.push(new UtEntry(e.time_tracker_uid, e.project_number, e.entry_date, e.work_type, e.minutes, e.date_created, e.created_by, e.date_last_modified, e.last_maintained_by, e.employee_id, e.action_type, e.comments, e.bad_work));
        //            })
        //        }
        //        return entries;
        //    }
        //    ).subscribe();
    }
}
