import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  fetchProducts() {
    return this.http.get(
      'https://electronic-ecommerce.herokuapp.com/api/v1/product'
    );
  }
}
