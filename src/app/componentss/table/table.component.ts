import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataTable: Product[] = [];
  @Output() filterChange = new EventEmitter<string>();
  filterName = '';
  productFiltered: Product[] = [];
  totalItems = 0;
  selectOptions = [5, 10, 20];
  selectedOption = 5;
  ngOnInit(): void {
    this.search();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataTable']?.currentValue) {
      this.search();
    }
  }
  
  search(): void {
    const filter = this.filterName.trim().toLowerCase();
    this.productFiltered = this.dataTable.filter((product) =>
      filter
        ? product.name.toLowerCase().includes(filter)
        : true
    );
    this.totalItems = this.productFiltered.length;
    this.productFiltered = this.productFiltered.slice(0, this.selectedOption);
  }

  onFilterInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filterName = inputElement.value;
    this.search();
    this.filterChange.emit(this.filterName);
  }
}