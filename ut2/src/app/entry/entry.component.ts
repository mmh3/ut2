import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UtEntry } from '../models/ut-entry.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() entry: UtEntry;

  entryForm: FormGroup;
  workTypes = [{ value: 107619, display: 'New Dev' }, { value: 107620, display: 'Rework' }];
  actionTypes = [{ value: 107621, display: 'Coding' },
                 { value: 107622, display: 'Testing' },
                 { value: 107623, display: 'Moving Code' },
                 { value: 107624, display: 'Deploying' },
                 { value: 107625, display: 'Spec/Docu' },
                 { value: 107626, display: 'Quoting' },
                 { value: 107627, display: 'Meeting' },
                 { value: 107632, display: 'Other' },
                 { value: 107640, display: 'General Dev' },
                 { value: 107774, display: 'Training' }]

  constructor() { }

  ngOnInit() {
    this.entryForm = new FormGroup({
      'projectNo': new FormControl(this.entry.projectNo),
      'workType': new FormControl(this.entry.workType),
      'workDate': new FormControl(this.entry.entryDate.toLocaleDateString()),
      'actionType': new FormControl(this.entry.actionType),
      'minutes': new FormControl(this.entry.minutes),
      'comments': new FormControl(this.entry.comments)
    })
  }

  onEnter() {
    console.log(this.entryForm);
  }
  onSubmit() {
    console.log(this.entryForm);
  }
}
