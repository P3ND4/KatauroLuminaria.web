import { Injectable } from '@angular/core';
import { Product } from '../../models/Products';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentProducts: Product[] = []

  constructor(private http: HttpService){
    http.getProducts().subscribe({
      next: (val)=>{ 
        this.currentProducts = val as Product[];
        this.currentProducts = this.currentProducts.slice(0, 5);
       },
      error: (err) => {console.log(err); }
    });
  }

  addToCart(product: Product){
    this.currentProducts.push(product);
  }
  addProductsToCart(products: Product[]){
    this.currentProducts.concat(products);
  }

  deleteFromCart(id: string){
    const index = this.currentProducts.findIndex((prod) => prod.id == id);
    this.currentProducts.splice(index);
  }
  deleteSelectedFromCart(prodsId: string[]){
    this.currentProducts = this.currentProducts.filter((prod)=> !prodsId.find((id)=> prod.id == id))
  }

  restoreCart(){
    this.currentProducts = [];
  }
}
