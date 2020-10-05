import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl: 'http://localhost:3306/';


  constructor( private http: HttpClient) { }
  redirectUrl: string;

  loginuser(user: User):Observable<User> {

    return this.http.post<User>(this.apiUrl + 'login', user)

  }

}

