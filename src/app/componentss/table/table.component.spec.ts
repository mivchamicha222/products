import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { Product } from '../../interfaces/product.interface';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should filter products based on filterName', () => {
    component.filterName = 'Producto 1';
    component.searchProduct();
    expect(component.productFiltered.length).toBe(1);
    expect(component.productFiltered[0].name).toBe('Producto 1');
  });

  it('should show all products when filterName is empty', () => {
    component.filterName = '';
    component.searchProduct();
    expect(component.productFiltered.length).toBe(3); 
  });

});