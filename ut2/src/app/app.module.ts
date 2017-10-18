import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from './header/header.component';
import { UtService } from './ut.service';
import { TestComponent } from './test/test.component';
import { DayComponent } from './day/day.component';
import { utReducer } from './redux/ut.reducer';
import { UtEffects } from './redux/ut.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    DayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.forRoot({ utStore: utReducer }),
    EffectsModule.forRoot([UtEffects])
  ],
  providers: [UtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
