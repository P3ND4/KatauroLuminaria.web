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

  constructor(private http: HttpClient) {
    this.apiPath = 'http://localhost:3000'

  }

  signUp(createUserDto: CreateUserDto) {
    return this.http.post(`${this.apiPath}/auth/register`, createUserDto)
  }

  signIn(loginDto: LoginDto) {
    return this.http.post(`${this.apiPath}/auth/login`, loginDto, { withCredentials: true })
  }

  getProducts(page?: number) {
    if(page){
      return this.http.get(`${this.apiPath}/products?page=${page}`)
    }
    return this.http.get(`${this.apiPath}/products`)
  }

  logOut() {
    return this.http.post(`${this.apiPath}/auth/logout`, { withCredentials: true })
  }

  getProductById(id: string) {
    return this.http.get(`${this.apiPath}/products/${id}`)
  }

  getPages() {
    return this.http.get(`${this.apiPath}/products/pages`)
  }

  refreshUser() {
    return this.http.get(`${this.apiPath}/auth/me`, { withCredentials: true })
  }

}
