import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'https://electronic-ecommerce.herokuapp.com/api/v1/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly http: HttpClient) {}

  fetchProducts() {
    return this.http.get(BASE_URL);
  }
}
