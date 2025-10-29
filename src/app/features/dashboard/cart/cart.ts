import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {Subscription } from 'rxjs';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, ReactiveFormsModule, CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  products = signal<Variant[]>([]);
  buyingForm: FormGroup
  selected: { [key: string]: number } = {};
  queryParamsSubscription: Subscription | undefined;
  constructor(readonly cartService: CartService, private fb: FormBuilder, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
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
    this.queryParamsSubscription = this.route.queryParamMap.subscribe(() => {
      this.loadData();
    });
  }

  loadData(): void {
    this.route.queryParamMap.subscribe(params => {
      var marked = params.get('markedId');
      if (marked) {
        const index = marked.split('^');
        //const current = this.cartService.currentProducts();
        //const selectedVariants = this.cartService.currentProducts().filter(x=> index.includes(x.id));
        //const varIndex = selectedVariants.map(x=> this.cartService.currentProducts().indexOf(x));
        index.forEach(x=> this.selected[x] = 1);
        this.cdr.detectChanges();
      }
    });

  }

  loadCart() {
    this.cartService.loadCart()
  }

  toggle(index: string): void {
    if (this.selected[index]) {
      delete this.selected[index];
    } else {
      this.selected[index] = 1;
      console.log(this.cartService.currentProducts);
    }
  }


  plus(index: string): void {
    if (this.selected[index]) {
      this.selected[index]++;
    } else {
      this.selected[index] = 1;
    }
  }
  minus(index: string): void {
    if (this.selected[index]) {
      this.selected[index]--;
    }
    if (this.selected[index] === 0) {
      delete this.selected[index];
    }
  }

  isActive(index: string): boolean {
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
