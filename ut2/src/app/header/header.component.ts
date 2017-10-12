import { Component, OnInit } from '@angular/core';
import { UtService } from '../ut.service'
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userName: Observable<any>;

  constructor(private utService: UtService) { }

  ngOnInit() {
    this.userName = this.utService.getUserName();
  }

}
