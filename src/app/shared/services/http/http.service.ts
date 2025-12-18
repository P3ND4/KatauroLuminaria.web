import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../../models/loginDto';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { Categories } from '../../models/Products';
import { CreateOrderDto } from '../../models/createOrderDTO';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiPath = 'https://api.katauro.com'

  readonly CatParser = [
    Categories.footLumin,
    Categories.lightBulb,
    Categories.roofLumin,
    Categories.tableLumin,
    Categories.wallLumin
  ]

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

  updateUser(createOrderDTO: CreateUserDto, id: string) {
    return this.http.patch(`${this.apiPath}/users/${id}`, createOrderDTO);
  }

  getProducts(options?: { page?: number, category?: Categories }) {
    if (options?.page && !options.category) {
      return this.http.get(`${this.apiPath}/products?page=${options.page}`);
    }
    else if (options?.category) {
      return options.page ? this.http.get(`${this.apiPath}/products?page=${options.page}&category=${this.CatParser.indexOf(options.category)}`) : this.http.get(`${this.apiPath}/products?category=${this.CatParser.indexOf(options.category)}`)
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
  createOrder(body: CreateOrderDto) {
    return this.http.post(`${this.apiPath}/order`, body, { withCredentials: true })
  }
}
