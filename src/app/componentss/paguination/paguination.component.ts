import { Component, OnInit } from '@angular/core';
import { Product, ResponseProduct } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-paguination',
  templateUrl: './paguination.component.html',
  styleUrls: ['./paguination.component.scss']
})
export class PaguinationComponent implements OnInit {
  dataProducts: Product[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getDataProducts();
  }

  getDataProducts() {
    this.productService.getAllProducts().subscribe(
      (response: ResponseProduct) => {
        console.log('Response from API:', response);
        this.dataProducts = response.data;
        this.loading = false;
      },
      error => {
        console.error('Error fetching products:', error);
        this.loading = false;
      }
    );
  }
}