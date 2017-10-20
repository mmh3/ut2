import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

import { UtService } from '../ut.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public state: Observable<any>;

  constructor(private utService: UtService) { }

  ngOnInit() {
      this.state = this.utService.getUserName();
  }
}
