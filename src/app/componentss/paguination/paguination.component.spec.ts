import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaguinationComponent } from './paguination.component';
import { ProductService } from 'src/app/services/product.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PaguinationComponent', () => {
  let component: PaguinationComponent;
  let fixture: ComponentFixture<PaguinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      declarations: [PaguinationComponent],
      providers: [ProductService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaguinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});