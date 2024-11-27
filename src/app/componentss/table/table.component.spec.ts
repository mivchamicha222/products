import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  const mockProducts: Product[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      logo: 'logo1.png',
      date_release: new Date('2023-01-01'),
      date_revision: new Date('2023-01-02')
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      logo: 'logo2.png',
      date_release: new Date('2023-01-03'),
      date_revision: new Date('2023-01-04')
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      logo: 'logo3.png',
      date_release: new Date('2023-01-05'),
      date_revision: new Date('2023-01-06')
    }
  ];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.dataTable = mockProducts;
    fixture.detectChanges();
  });

  
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter products based on filterName', () => {
    component.filterName = 'Producto 1';
    component.search();
    expect(component.productFiltered.length).toBe(1);
    expect(component.productFiltered[0].name).toBe('Producto 1');
  });


  it('should show all products when filterName is empty', () => {
    component.filterName = '';
    component.search();
    expect(component.productFiltered.length).toBe(3);
  });

  it('should filter products and limit results by selectedOption', () => {
    component.filterName = '';
    component.selectedOption = 2;
    component.search();
    expect(component.productFiltered.length).toBe(2);
  });


  it('should update filtered products when dataTable changes', () => {
    const newMockProducts: Product[] = [
      {
        id: 4,
        name: 'Producto 4',
        description: 'Descripción del producto 4',
        logo: 'logo4.png',
        date_release: new Date('2023-01-07'),
        date_revision: new Date('2023-01-08')
      }
    ];
    component.dataTable = newMockProducts;
    component.ngOnChanges({
      dataTable: {
        currentValue: newMockProducts,
        previousValue: mockProducts,
        firstChange: false,
        isFirstChange: () => false
      }
    });
    expect(component.productFiltered.length).toBe(1);
    expect(component.productFiltered[0].name).toBe('Producto 4');
  });
});