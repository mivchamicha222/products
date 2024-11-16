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
      imports: [FormsModule] // Importa FormsModule para usar ngModel
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.productsHardcoded = [
      {
        id: 'trj-crd',
        name: 'Producto 1',
        description: 'Descripción 1',
        logo: 'https://example.com/logo1.png',
        date_release: new Date('2000-01-01'),
        date_revision: new Date('2001-01-01')
      },
      {
        id: 'trj-crd',
        name: 'Producto 2',
        description: 'Descripción 2',
        logo: 'https://example.com/logo2.png',
        date_release: new Date('2000-01-01'),
        date_revision: new Date('2001-01-01')
      },
      {
        id: 'trj-crd',
        name: 'Producto 3',
        description: 'Descripción 3',
        logo: 'https://example.com/logo3.png',
        date_release: new Date('2000-01-01'),
        date_revision: new Date('2001-01-01')
      }
    ];
    fixture.detectChanges(); // Detecta cambios iniciales
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
    expect(component.productFiltered.length).toBe(3); // Cambia esto según cuántos productos tengas
  });

  it('should update productFiltered based on select value', () => {
    component.select = 2; // Cambia el número de productos a mostrar
    component.searchProduct();
    expect(component.productFiltered.length).toBe(2); // Verifica que se muestren solo 2 productos
  });
});