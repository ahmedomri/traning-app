import { User } from './user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) {}

  register(user:User){
    return this.http.post("http://localhost:3000/users",user);
  }
}
