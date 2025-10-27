import { Injectable, signal } from '@angular/core';
import { Product, Variant } from '../../models/Products';
import { HttpService } from '../http/http.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public currentProducts = signal<Variant[]>([]);
  public isCharged = false;


  constructor(private http: HttpService, private authService: AuthService) {
  }



  addToCart(userId: string, productId: string) {
    return this.http.addToCart(userId, productId);
  }
  addProductsToCart(products: string[]) {

  }
  async loadCart(): Promise<void> {
    this.authService.currentUser$.subscribe(
      {
        next: val => {
          if (val) {
            this.currentProducts.set(((val as User).cart as { product: Variant }[]).map(x => x.product))
            console.log(this.currentProducts);
          }
        },
        error: err => console.error(err)

      }
    )
  }

  loadCartFromBackend(id: string) {
    this.http.getUserById(id).subscribe(
      {
        next: val => this.currentProducts.set(((val as User).cart as { product: Variant }[]).map(x => x.product)),
        error: err=> console.log(err)
      }
    )
  }

  deleteFromCart(id: string) {
    //const index = this.currentProducts.findIndex((prod) => prod.id == id);
    //this.currentProducts.splice(index);
  }
  deleteSelectedFromCart(prodsId: string[]) {
    //this.currentProducts = this.currentProducts.filter((prod) => !prodsId.find((id) => prod.id == id))
  }

  restoreCart() {
    //this.currentProducts = [];
  }
}
