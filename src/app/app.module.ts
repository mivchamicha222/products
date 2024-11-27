import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';
import { TableComponent } from '../app/componentss/table/table.component';
import { TitleComponent } from '../app/componentss/title/title.component';
import { AppRoutingModule } from './app-routing.module';
import { FinancialProductsComponent } from './pages/financial-products/financial-products.component';
import { FormAddProductsComponent } from './pages/financial-products/form-add-products/form-add-products.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TitleComponent,
    FinancialProductsComponent,
    FormAddProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}