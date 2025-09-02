import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../../models/loginDto';
import { User } from '../../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiPath = 'https://api.katauro.com'
  
  constructor(private http: HttpClient){

  }

  signUp(createUserDto: CreateUserDto){
    return this.http.post(`${this.apiPath}/auth/register`, createUserDto)
  }

  signIn(loginDto: LoginDto): Observable<User>{
    return this.http.post(`${this.apiPath}/auth/login`, loginDto) as Observable<User>
  }

  getProducts(){
    return this.http.get(`${this.apiPath}/products`)
  }

}
