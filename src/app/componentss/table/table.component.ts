import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() dataTable: Product[] = [];

  select: number = 5;
  filterName: string = ''; 
  productFiltered: Product[] = [];

  optionSelect = [5, 10, 20];


  productsHardcoded: Product[] = [
    {
      id: 'trj-crd',
      name: 'Nombre del producto',
      description: 'Descripción',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: new Date('01/01/2000'),
      date_revision: new Date('01/01/2001')
    },
    {
      id: 'trj-crd',
      name: 'Nombre del producto',
      description: 'Descripción',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: new Date('01/01/2000'),
      date_revision: new Date('01/01/2001')
    },
    {
      id: 'trj-crd',
      name: 'Nombre del producto',
      description: 'Descripción',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: new Date('01/01/2000'),
      date_revision: new Date('01/01/2001')
    },
    {
      id: 'trj-crd',
      name: 'Nombre del producto',
      description: 'Descripción',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: new Date('01/01/2000'),
      date_revision: new Date('01/01/2001')
    },
    {
      id: 'trj-crd',
      name: 'Nombre del producto',
      description: 'Descripción',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: new Date('01/01/2000'),
      date_revision: new Date('01/01/2001')
    },
    {
      id: 'trj-crd',
      name: 'Nombre del producto',
      description: 'Descripción',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: new Date('01/01/2000'),
      date_revision: new Date('01/01/2001')
    },
    {
      id: 'trj-crd',
      name: 'Jose',
      description: 'Descripción',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: new Date('01/01/2000'),
      date_revision: new Date('01/01/2001')
    },
  ];

  ngOnInit(): void {
    this.productFiltered = this.productsHardcoded;
    this.searchProduct();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataTable']) {
      this.searchProduct();
    }
  }

  searchProduct(): void {
    const filteredProducts = !this.filterName
        ? this.productsHardcoded
        : this.productsHardcoded.filter((product) =>
            product.name.toLowerCase().includes(this.filterName.toLowerCase())
        );
    this.productFiltered = filteredProducts.slice(0, this.select);
  }
}