import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app/app.component';
import { TitleComponent } from '../app/componentss/title/title.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaguinationComponent } from '../app/componentss/paguination/paguination.component';
import { TableComponent } from '../app/componentss/table/table.component';
import { FinancialProductsComponent } from './pages/financial-products/financial-products.component';
import { FormAddProductsComponent } from './pages/financial-products/form-add-products/form-add-products.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PaguinationComponent, 
    TableComponent,
    TitleComponent,
    FinancialProductsComponent,
    FormAddProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}