import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../users/users.service';

@Injectable({
  providedIn: 'root'
})

export class UserPageService {
  constructor(private http: HttpClient) {
  }

  url = 'https://fakestoreapi.com/users';


  getUser(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

}
