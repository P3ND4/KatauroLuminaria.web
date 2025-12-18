import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/User';
import { DropdownAnimation, DropdownAnimationAH } from '../../../shared/animations/ComboBoxAnimation';
import { CUBA_PROVINCES } from '../../../shared/models/citiesDic';
import { CreateOrderDto } from '../../../shared/models/createOrderDTO';
import { OrderState } from '../../../shared/models/Order';
import { HttpService } from '../../../shared/services/http/http.service';

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
  constructor(readonly cartService: CartService, private fb: FormBuilder, private http: HttpService,
    private route: ActivatedRoute, private cdr: ChangeDetectorRef, private authService: AuthService) {
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
        note: ["", Validators.maxLength(200)]
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

  toggleDelivery() {
    this.aditionalInfo = !this.aditionalInfo;
    var province = this.buyingForm.get('province');
    var city = this.buyingForm.get('municipality');
    var address = this.buyingForm.get('address');
    if (this.aditionalInfo) {
      this.buyingForm.get('province')?.setValidators([Validators.required, Validators.minLength(1)]);
      this.buyingForm.get('municipality')?.setValidators([Validators.required, Validators.minLength(1)]);
      this.buyingForm.get('address')?.setValidators([Validators.required, Validators.minLength(1)]);
    }
    else {
      province?.clearValidators()
      address?.clearValidators()
      city?.clearValidators()
    }

    province?.updateValueAndValidity();
    city?.updateValueAndValidity();
    address?.updateValueAndValidity();

    this.cdr.detectChanges()
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
    if (this.buyingForm.valid && this.currentUser) {
      const order: CreateOrderDto = {
        userId: this.currentUser.id,
        createdAt: new Date(),
        productsID: this.cartService.currentProducts().filter(x => x.id in this.selected).map(x => ({
          productId: x.id,
          count: this.selected[x.id]
        })),
        note: this.buyingForm.get('note')?.value,
        province: this.buyingForm.get('province')?.value,
        city: this.buyingForm.get('municipality')?.value,
        address: this.buyingForm.get('address')?.value,
        delivery: this.aditionalInfo,
        state: OrderState.pending,
        price: this.subTotalPrice(),
        delPrice: this.deliveryPrice(),
        name: this.buyingForm.get('name')?.value,
        lastName: this.buyingForm.get('lastName')?.value,
        email: this.buyingForm.get('email')?.value,
        phone: (this.buyingForm.get('phone')?.value as number).toString()
      }
      console.log(order);
      this.http.createOrder(order).subscribe({
        next: val => {
          console.log(val);
          this.openWhatsApp();
        },
        error: err => console.log(err)
      })
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
  openWhatsApp() {
    const phone = '5355801741';
    const text = encodeURIComponent('Hola, quiero escribirte');
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  }


}
