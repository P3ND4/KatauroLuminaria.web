import { Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { count, last } from 'rxjs';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  products = signal<Variant[]>([]);
  buyingForm: FormGroup
  selected: {[key: number]: number} = {};

  constructor(readonly cartService: CartService, private fb: FormBuilder) {
    this.buyingForm = fb.group(
      {
        name: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.required, Validators.minLength(8)]]
      }
    )

  }
  ngOnInit(): void {
    //this.products.set(this.cartService.currentProducts);
    //this.loadCart();
  }

  loadCart(){
    this.cartService.loadCart()
  }

  toggle(index: number): void {
    if(this.selected[index]){
      delete this.selected[index];
    }else{
      this.selected[index] = 1;
      console.log(this.cartService.currentProducts)
    }
  }
 

  plus(index: number): void {
    if (this.selected[index]) {
      this.selected[index]++;
    } else {
      this.selected[index] = 1;
    }
  }
  minus(index: number): void {
    if (this.selected[index]) {
      this.selected[index]--;
    }
    if (this.selected[index] === 0) {
      delete this.selected[index];
    }
  }

  isActive(index: number): boolean {
    return index in this.selected;
  }

  onSubmit(): void {
    if (this.buyingForm.valid) {
      const name = this.buyingForm.get('name')?.value;
      console.log(name);
    }
  }
  isMobile(): boolean {
    return window.innerWidth <= 700;
  }
}
