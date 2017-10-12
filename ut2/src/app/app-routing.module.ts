import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test/test.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full'},
  { path: 'test', component: TestComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
