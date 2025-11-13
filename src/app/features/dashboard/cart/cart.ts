import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/User';
import { DropdownAnimation, DropdownAnimationAH } from '../../../shared/animations/ComboBoxAnimation';
import { CUBA_PROVINCES } from '../../../shared/models/citiesDic';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, ReactiveFormsModule, CommonModule],
  animations: [DropdownAnimation, DropdownAnimationAH],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  products = signal<Variant[]>([]);
  buyingForm: FormGroup
  selected: { [key: string]: number } = {};
  queryParamsSubscription: Subscription | undefined;
  currentUser: User | undefined;
  aditionalInfo = false;
  provinceOpen = false;
  munIsOpen = false;
  currentProvinceMun: string[] = []
  provinces = CUBA_PROVINCES;
  provincesArray: string[] = [];
  constructor(readonly cartService: CartService, private fb: FormBuilder, private route: ActivatedRoute, private cdr: ChangeDetectorRef, private authService: AuthService) {
    this.provincesArray = Object.keys(CUBA_PROVINCES) as string[];
    this.currentProvinceMun = this.provinces['La Habana']
    this.buyingForm = fb.group(
      {
        name: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.required, Validators.minLength(8)]],
        province: ["La Habana"],
        municipality: [""],
        address: [""],
        note: [""]
      }
    )

  }
  ngOnInit(): void {
    //this.products.set(this.cartService.currentProducts);
    //this.loadCart();
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user ?? undefined;
      this.buyingForm.patchValue({
        name: user?.name ?? '',
        lastName: user?.lastName ?? '',
        email: user?.email ?? '',
        phone: user?.phone ?? ''
      })
    })
    this.queryParamsSubscription = this.route.queryParamMap.subscribe(() => {
      this.loadData();
    });
  }
  selectProvince(name: string) {
    this.buyingForm.get('province')?.setValue(name);
    this.buyingForm.get('municipality')?.setValue("");
    this.currentProvinceMun = this.provinces[name];
    this.provinceOpen = false;
    this.cdr.detectChanges();
  }
  selectMunicipality(name: string) {
    this.buyingForm.get('municipality')?.setValue(name);
    this.munIsOpen = false;
    this.cdr.detectChanges();
  }

  loadData(): void {
    this.route.queryParamMap.subscribe(params => {
      var marked = params.get('markedId');
      if (marked) {
        const index = marked.split('^');
        //const current = this.cartService.currentProducts();
        //const selectedVariants = this.cartService.currentProducts().filter(x=> index.includes(x.id));
        //const varIndex = selectedVariants.map(x=> this.cartService.currentProducts().indexOf(x));
        index.forEach(x => this.selected[x] = 1);
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
  subTotalPrice(): number {
    let total = 0;
    for (const key in this.selected) {
      const variant = this.cartService.currentProducts().find(x => x.id === key);
      if (variant) {
        total += variant.price * this.selected[key];
      }
    }
    return total;
  }
  deliveryPrice(): number {
    return 0;
  }
}
