import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ListViewComponent } from "./list-view/list-view.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: 'list', component: ListViewComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
