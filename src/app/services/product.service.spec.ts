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
          id: 1,
          name: 'Tarjeta Visa Signature',
          description: 'Una tarjeta de crédito Visa Signature con beneficios exclusivos.',
          logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
          date_release: new Date('2025-01-01'),
          date_revision: new Date('2025-10-01'),
        },
        {
          id: 2,
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

  it('should create a product', () => {
    const newProduct: Product = {
      id: 3,
      name: 'Tarjeta American Express',
      description: 'Una tarjeta de crédito American Express.',
      logo: 'https://www.americanexpress.com/content/dam/amex/global/images/logo.png',
      date_release: new Date('2025-03-01'),
      date_revision: new Date('2025-12-01'),
    };

    service.createProduct(newProduct).subscribe(response => {
      expect(response).toEqual(newProduct);
    });

    const req = httpMock.expectOne(service['URL_BASE']);
    expect(req.request.method).toBe('POST');
    req.flush(newProduct);
  });

  it('should update a product', () => {
    const updatedProduct: Partial<Product> = {
      name: 'Tarjeta Visa Infinite',
      description: 'Una tarjeta de crédito Visa Infinite con beneficios premium.',
    };

    service.updateProduct('1', updatedProduct).subscribe(response => {
      expect(response).toEqual(updatedProduct);
    });

    const req = httpMock.expectOne(`${service['URL_BASE']}1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedProduct);
  });

  it('should delete a product', () => {
    service.deleteProduct('1').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['URL_BASE']}1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(true);
  });

  it('should verify product ID', () => {
    service.verifyProductId('1').subscribe(isValid => {
      expect(isValid).toBe(true);
    });
    const req = httpMock.expectOne(`${service['URL_BASE']}verification/1`);
    expect(req.request.method).toBe('GET');
    req.flush(true);
  });
});