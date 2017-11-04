import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { UtService } from './ut.service';
import { ListViewComponent } from './list-view/list-view.component';
import { DayComponent } from './day/day.component';
import { utReducer } from './redux/ut.reducer';
import { UtEffects } from './redux/ut.effects';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListViewComponent,
    DayComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot({ utStore: utReducer }),
    EffectsModule.forRoot([UtEffects]),
    ReactiveFormsModule
  ],
  providers: [UtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
