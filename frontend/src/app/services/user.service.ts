import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
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
  // logout() {
  //   localStorage.removeItem('currentUser');
  // }


  // isLoggedIn() {
  //   if (localStorage.getItem('currentUser')) {
  //     return true;
  //   }
  //   return false;
  // }
}

