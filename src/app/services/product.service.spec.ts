import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { enviromnents } from '../environments/environments';
import { FinancialProducts } from '../interfaces/product.interface';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;
  const mockResponse: FinancialProducts = {
    data: [
      {
        id: 1,
        name: 'Product 1',
        description: 'Description 1',
        logo: 'logo1.png',
        date_release: new Date(),
        date_revision: new Date(),
      },
    ],
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call getAllProducts and return a list of products', () => {
    service.getAllProducts().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpTestingController.expectOne(`${enviromnents.URLBASE}products`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('authorId')).toBe('50');
    req.flush(mockResponse);
  });
});