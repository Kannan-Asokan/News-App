import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadingComponent } from './heading/heading.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {path:'',component:HeadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'business',component:BusinessComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
