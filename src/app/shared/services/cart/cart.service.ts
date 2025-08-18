import { Injectable } from '@angular/core';
import { Product } from '../../models/Products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  currentProducts: Product[] = []

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
