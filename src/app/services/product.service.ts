import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviromnents } from '../environments/environments';
import { FinancialProducts } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URL_BASE = enviromnents.URLBASE;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<FinancialProducts> {
    const headers = new HttpHeaders().set('authorId', '50');
    return this.http.get<FinancialProducts>(this.URL_BASE + 'products' , { headers : headers })
  }
}