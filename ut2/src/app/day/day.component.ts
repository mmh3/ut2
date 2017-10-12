import { Component, OnInit, Input } from '@angular/core';
import { UtEntry } from '../ut-entry.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() entry: UtEntry;

  constructor() { }

  ngOnInit() {
  }

}
