import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaguinationComponent } from './paguination.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

describe('PaguinationComponent', () => {
  let component: PaguinationComponent;
  let fixture: ComponentFixture<PaguinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [PaguinationComponent],
      providers: [ProductService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaguinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values for inputs', () => {
    expect(component.totalItems).toBe(0);
    expect(component.selectOptions).toEqual([]);
    expect(component.selectedOption).toBe(5);
  });

});