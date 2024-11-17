import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddProductsComponent } from './form-add-products.component';

describe('FormAddProductsComponent', () => {
  let component: FormAddProductsComponent;
  let fixture: ComponentFixture<FormAddProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
