import { Component, OnInit } from '@angular/core';
import { UtService } from '../ut.service'
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    public state: Observable<any>;

  constructor(private utService: UtService) { }

  ngOnInit() {
    this.utService.setMonth({ 'month': (new Date()).getUTCMonth() + 1, 'year':(new Date()).getUTCFullYear() });
    this.state = this.utService.getUtEntries();
  }
}
