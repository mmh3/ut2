import { Component, OnInit, Input } from '@angular/core';
import { UtEntry } from '../models/ut-entry.model';
import { UtDay } from "../models/ut-day.model";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day: UtDay;

  constructor() { }

  ngOnInit() {
  }
}
