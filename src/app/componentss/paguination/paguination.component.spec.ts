import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PaguinationComponent } from './paguination.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

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

  it('should emit optionChange when selectedOption changes', () => {
    spyOn(component.optionChange, 'emit'); 
    component.selectedOption = 10; 
    component.onSelectChange();
    expect(component.optionChange.emit).toHaveBeenCalledWith(10);
  });

  it('should have default values for inputs', () => {
    expect(component.totalItems).toBe(0);
    expect(component.selectOptions).toEqual([]);
    expect(component.selectedOption).toBe(5);
  });

  it('should update selectedOption and emit optionChange when onSelectChange is called', () => {
    component.selectedOption = 15;
    spyOn(component.optionChange, 'emit');

    component.onSelectChange(); 

    expect(component.optionChange.emit).toHaveBeenCalledWith(15); 
  });
});