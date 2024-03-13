import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HomepageComponent} from "./Homepage/homepage.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Teams', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
