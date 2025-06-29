import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

@Injectable({
 providedIn: 'root'
})

export class CardService {
  url = 'https://fakestoreapi.com'

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`);
  }
}
