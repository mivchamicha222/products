import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product, ResponseProduct } from '../interfaces/product.interface';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch all products', () => {
    const mockProducts: ResponseProduct = {
      data: [
        {
          id: 'uno',
          name: 'Tarjeta Visa Signature',
          description: 'Una tarjeta de crédito Visa Signature con beneficios exclusivos.',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: new Date('2025-01-01'),
          date_revision: new Date('2025-10-01'),
        },
        {
          id: 'dos',
          name: 'Tarjeta Mastercard Gold',
          description: 'Una tarjeta de crédito Mastercard Gold con recompensas.',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: new Date('2025-02-01'),
          date_revision: new Date('2025-11-01'),
        }
      ]
    };

    service.getAllProducts().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(service['URL_BASE']);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

});