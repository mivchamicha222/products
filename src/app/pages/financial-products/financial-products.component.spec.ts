import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancialProductsComponent } from './financial-products.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { productsHardcoded } from '../../conts/financial-products.const';

describe('FinancialProductsComponent', () => {
  let component: FinancialProductsComponent;
  let fixture: ComponentFixture<FinancialProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialProductsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct data', () => {
    expect(component.dataSource).toEqual(productsHardcoded);
    expect(component.productFiltered.length).toBe(5);
  });


  it('should update selectedOption and filter products accordingly', () => {
    component.selectedOption = 10;
    component.onOptionChange(10);
    expect(component.selectedOption).toBe(10);
    expect(component.productFiltered.length).toBe(10);
  });

  it('should update filterName and filter products accordingly', () => {
    component.onFilterChange('Tarjeta'); 
    expect(component.filterName).toBe('Tarjeta');
    expect(component.productFiltered.length).toBeGreaterThan(0); 
  });
});