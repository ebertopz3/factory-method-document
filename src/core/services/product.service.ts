import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private _http: HttpClient = inject(HttpClient);
  constructor() { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
