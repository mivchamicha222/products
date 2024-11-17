import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaguinationComponent } from './componentss/paguination/paguination.component';
import { FinancialProductsComponent } from './pages/financial-products/financial-products.component';

const routes: Routes = [
  {path:"",component:FinancialProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }