import { Component, OnInit } from '@angular/core';
import { FinancialProducts, Product } from 'src/app/interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-financial-products',
  templateUrl: './financial-products.component.html',
  styleUrls: ['./financial-products.component.scss']
})
export class FinancialProductsComponent implements OnInit {
  productFiltered: Product[] = [];
  filterName: string = '';
  selectOptions = [5, 10, 20];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.productService.getAllProducts().subscribe((product: FinancialProducts) => {
      this.productFiltered = product.data
    })
  }

}