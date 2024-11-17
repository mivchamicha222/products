import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataTable: Product[] = []; // Datos originales
  @Input() selectOptions: number[] = [5, 10, 20]; // Opciones para la paginación
  @Input() selectedOption: number = 5; // Opción seleccionada por defecto
  @Output() optionChange = new EventEmitter<number>(); // Emitir cambios en la opción seleccionada

  filterName: string = ''; // Para el filtro de búsqueda
  productFiltered: Product[] = []; // Productos filtrados

  ngOnInit() {
    this.searchProduct(); // Filtrar productos al iniciar
  }

  searchProduct(): void {
    // Filtrar productos según el nombre
    const filteredProducts = !this.filterName
      ? this.dataTable
      : this.dataTable.filter((product) =>
          product.name.toLowerCase().includes(this.filterName.toLowerCase())
      );

    // Actualizar los productos filtrados según la opción seleccionada
    this.productFiltered = filteredProducts.slice(0, this.selectedOption);
  }

  onSelectChange(): void {
    this.optionChange.emit(this.selectedOption); // Emitir el cambio al componente padre
    this.searchProduct(); // Vuelve a filtrar los productos cuando cambia la selección
  }

  onFilterChange(): void {
    this.searchProduct(); // Filtrar productos cuando cambia el texto de búsqueda
  }
}