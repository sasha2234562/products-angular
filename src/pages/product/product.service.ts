import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../products/service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  constructor(private http: HttpClient) {
  }

  url = 'https://fakestoreapi.com'

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/products/${id}`);
  }

}
