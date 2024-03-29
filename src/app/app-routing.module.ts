import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';

const routes: Routes = [{
  path:'', component:TopheadlinesComponent // top headline and home
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
