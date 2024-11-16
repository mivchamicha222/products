import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaguinationComponent } from './componentss/paguination/paguination.component';

const routes: Routes = [
  {path:"",component:PaguinationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }