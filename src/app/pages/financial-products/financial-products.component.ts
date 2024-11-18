import { Component, OnInit } from '@angular/core';
import { productsHardcoded } from 'src/app/conts/financial-products.const';
import { Product, ResponseProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-financial-products',
  templateUrl: './financial-products.component.html',
  styleUrls: ['./financial-products.component.scss']
})
export class FinancialProductsComponent implements OnInit {
  dataSource: ResponseProduct = productsHardcoded;
  productFiltered: Product[] = []; 
  filterName: string = '';
  
  selectOptions = [5, 10, 20];
  selectedOption = this.selectOptions[0];

  ngOnInit() {
    this.searchProduct();
  }

  searchProduct(): void {
    const filteredProducts = !this.filterName
      ? this.dataSource.data
      : this.dataSource.data.filter(product =>
          product.name.toLowerCase().includes(this.filterName.toLowerCase())
      );
    this.productFiltered = filteredProducts.slice(0, this.selectedOption);
  }

  onOptionChange(newOption: number): void {
    this.selectedOption = newOption;
    this.searchProduct(); 
  }

  onFilterChange(newFilter: string): void {
    this.filterName = newFilter; 
    this.searchProduct();
  }
}