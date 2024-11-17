import { Component, OnInit } from '@angular/core';
import { productsHardcoded } from 'src/app/conts/financial-products.const';
import { Product, ResponseProduct } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-financial-products',
  templateUrl: './financial-products.component.html',
  styleUrls: ['./financial-products.component.scss']
})
export class FinancialProductsComponent implements OnInit {
  dataSource: ResponseProduct = productsHardcoded; // Datos originales
  productFiltered: Product[] = []; // Productos filtrados
  filterName: string = ''; // Para el filtro de búsqueda
  
  selectOptions = [5, 10, 20]; // Opciones para la paginación
  selectedOption = this.selectOptions[0]; // Opción seleccionada por defecto

  ngOnInit() {
    this.productFiltered = this.dataSource.data; // Inicializa los productos filtrados
    this.searchProduct(); // Filtra los productos al iniciar
  }

  searchProduct(): void {
    // Filtra los productos según el nombre
    const filteredProducts = !this.filterName
      ? this.dataSource.data
      : this.dataSource.data.filter(product =>
          product.name.toLowerCase().includes(this.filterName.toLowerCase())
      );

    // Aplica la paginación después del filtrado
    this.productFiltered = filteredProducts.slice(0, this.selectedOption);
  }

  onOptionChange(newOption: number): void {
    this.selectedOption = newOption; // Actualiza la opción seleccionada
    this.searchProduct(); // Filtra nuevamente los productos según la nueva opción
  }
}