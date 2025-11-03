import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../../models/loginDto';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { Categories } from '../../models/Products';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiPath = 'https://api.katauro.com'

  constructor(private http: HttpClient) {
    //this.apiPath = 'http://localhost:3000';

  }
  getFinishes() {
    return this.http.get(`${this.apiPath}/products/finish`);
  }

  addToCart(userId: string, variantId: string): Observable<User> {
    return this.http.patch<User>(`${this.apiPath}/users/${userId}`, { updateCart: [variantId] });
  }

  signUp(createUserDto: CreateUserDto) {
    return this.http.post(`${this.apiPath}/auth/register`, createUserDto)
  }

  signIn(loginDto: LoginDto) {
    return this.http.post(`${this.apiPath}/auth/login`, loginDto, { withCredentials: true })
  }

  getProducts(options?: { page?: number, category?: Categories }) {
    if (options?.page && !options.category) {
      return this.http.get(`${this.apiPath}/products?page=${options.page}`);
    }
    else if (options?.category) {
      return options.page ? this.http.get(`${this.apiPath}/products?page=${options.page}&category=${options.category}`) : this.http.get(`${this.apiPath}/products?category=${options.category}`)
    }
    return this.http.get(`${this.apiPath}/products`)
  }

  logOut() {
    return this.http.get(`${this.apiPath}/auth/logout`, { withCredentials: true })
  }

  getProductById(id: string) {
    return this.http.get(`${this.apiPath}/products/${id}`)
  }

  getPages(option?: { category?: Categories }) {
    return !option?.category ? this.http.get(`${this.apiPath}/products/pages`) : this.http.get(`${this.apiPath}/products/pages?category=${option.category}`)
  }

  refreshUser() {
    return this.http.get(`${this.apiPath}/auth/me`, { withCredentials: true })
  }
  getUserById(id: string) {
    return this.http.get(`${this.apiPath}/users/${id}`, { withCredentials: true })
  }

}
