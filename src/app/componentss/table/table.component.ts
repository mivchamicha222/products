import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataTable: Product[] = [];
  @Input() selectOptions: number[] = [5, 10, 20]; 
  @Input() selectedOption: number = 5; 
  @Output() optionChange = new EventEmitter<number>(); 
  @Output() filterChange = new EventEmitter<string>(); 
  filterName: string = ''; 
  productFiltered: Product[] = [];

  ngOnInit() {
    this.searchProduct(); 
  }

  searchProduct(): void {
    const filteredProducts = !this.filterName
      ? this.dataTable
      : this.dataTable.filter(product =>
          product.name.toLowerCase().includes(this.filterName.toLowerCase())
      );
    this.productFiltered = filteredProducts.slice(0, this.selectedOption);
}

  onSelectChange(): void {
    this.optionChange.emit(this.selectedOption); 
    this.searchProduct();
  }

  onFilterInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement; 
    const newFilter = inputElement.value; 
    this.filterName = newFilter; 
    this.searchProduct(); 
    this.filterChange.emit(this.filterName);
}
}