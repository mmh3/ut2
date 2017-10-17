import { Component, OnInit } from '@angular/core';
import { UtService } from '../ut.service'
import { Observable } from "rxjs/Observable";
import "rxjs/add/Observable/of";
import { UtEntry } from '../models/ut-entry.model';
import { UtDay } from "../models/ut-day.model";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    public test: Observable<any>;
    public days = {};
    public daysArray: Observable<Array<any>>;
    objectKeys = Object.keys;

  constructor(private utService: UtService) { }

  ngOnInit() {

      this.utService.getUtEntries()
          .map((result: Array<any>) => {
              var days = {};
              var daysArray = [];
              if (result) {
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
              return Observable.of(daysArray);
          })
          .subscribe(daysArray => this.daysArray = daysArray);
  }
}
