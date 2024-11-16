import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Product, ResponseProduct } from '../interfaces/product.interface';
import { enviromnents } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_BASE = enviromnents.URLBASE + 'bp/products/';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ResponseProduct> {
    const headers = new HttpHeaders().set('authorId', '50');
    return this.http.get<ResponseProduct>(this.URL_BASE, { headers })
      .pipe(
        tap(data => console.log('Fetched products:', data)),
        catchError(this.handleError)
      );
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post<any>(this.URL_BASE, product)
      .pipe(
        tap(data => console.log('Product added:', data)),
        catchError(this.handleError)
      );
  }

  updateProduct(id: string, product: Partial<Product>): Observable<any> {
    return this.http.put<any>(`${this.URL_BASE}${id}`, product)
      .pipe(
        tap(data => console.log('Product updated:', data)),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.URL_BASE}${id}`)
      .pipe(
        tap(data => console.log('Product removed:', data)),
        catchError(this.handleError)
      );
  }

  verifyProductId(id: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.URL_BASE}verification/${id}`)
      .pipe(
        tap(data => console.log('Verification result:', data)),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}