import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product } from '../../../shared/models/Products';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  products: Product[] = [];
  constructor(private cartService: CartService){
    this.products = this.cartService.currentProducts;
  }
}
