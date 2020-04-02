import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {Observable} from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  validateLogin(user: User): Observable<any> {
    return this.http.post('/api/user/login', {
      username : user.username,
      password : user.password
    });
  }
}
