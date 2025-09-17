import { Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { count, last } from 'rxjs';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, ReactiveFormsModule, CommonModule],
  providers: [CartService],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  products = signal<Product[]>([]);
  buyingForm: FormGroup
  selected: {[key: number]: number} = {};

  constructor(public cartService: CartService, private fb: FormBuilder) {
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
    this.products.set(this.cartService.currentProducts);
  }
  toggle(index: number): void {
    if(this.selected[index]){
      delete this.selected[index];
    }else{
      this.selected[index] = 1;
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
}
