import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from './productInterface';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private url = '/assets/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(this.url);
  }
}
