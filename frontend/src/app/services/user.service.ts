import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   apiUrl:string;//= 'http://localhost:3000/';


  constructor( private http: HttpClient) {
    this.apiUrl="http://localhost:3000/auth/";
   }
  redirectUrl: string;

  loginuser(user: User):Observable<User> {

    // this.http.post<User>(this.apiUrl + 'register', user);

    return this.http.post<User>(this.apiUrl + 'login', user)


  }

}

