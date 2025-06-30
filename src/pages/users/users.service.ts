import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export interface User {

  email: string
  id: number
  name: { firstname: string, lastname: string }
  password: string
  phone: string
  username: string
  address: {
    city: string
    geolocation: { lat: string, long: string }
    number: number
    street: string
    zipcode: string
  }
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private http: HttpClient) {
  }

  url = 'https://fakestoreapi.com';

  getUsers() {
    return this.http.get<User[]>(`${this.url}/users`);
  }
}
