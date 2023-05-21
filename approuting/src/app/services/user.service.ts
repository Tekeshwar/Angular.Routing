import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
 private baseUrl = 'https://jsonplaceholder.typicode.com/users';

  getAllUsers(){
    return this.http.get(this.baseUrl);
  }

  getUsers(id: string):Observable<User>{
    return this.http.get<User>(this.baseUrl+'/'+id);
  }
}
