import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpentsComponent } from './spents/spents.component';
import { NewSpentComponent } from './new-spent/new-spent.component';

const routes: Routes = [

  {
    path:'spents', component:SpentsComponent
  },
  {
    path:'new-spent', component:NewSpentComponent
  },
  {
    path:"", redirectTo:'/spents', pathMatch:'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
