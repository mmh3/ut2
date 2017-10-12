import { Component, OnInit } from '@angular/core';
import {UtService} from '../ut.service'
import { Observable } from "rxjs/Observable";
import { UtEntry } from '../ut-entry.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    public test: Observable<any>;
    public utEntries: Array<UtEntry>;

  constructor(private utService: UtService) { }

  ngOnInit() {
      //this.test = this.utService.getUtEntries();

      this.utService.getUtEntries()
          .map((result: Array<any>) => {
              let entries: Array<UtEntry> = [];
              if (result) {
                  result.forEach((e) => {
                      entries.push(new UtEntry(+e.time_tracker_uid, +e.project_number, new Date(e.entry_date), +e.work_type, +e.minutes, new Date(e.date_created), e.created_by, new Date(e.date_last_modified), e.last_maintained_by, +e.employee_id, +e.action_type, e.comments, e.bad_work));
                  });
              }
              return entries;
          })
          .subscribe(entries => this.utEntries = entries);
          

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
