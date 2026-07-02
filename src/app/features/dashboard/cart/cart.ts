import { ChangeDetectorRef, Component, OnInit, inject, PLATFORM_ID, signal, AfterViewInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { FormBuilder, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ASSETS } from '../../../shared/constants/image-library';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../shared/models/User';
import { DropdownAnimation, DropdownAnimationAH } from '../../../shared/animations/ComboBoxAnimation';
import { CUBA_PROVINCES } from '../../../shared/models/citiesDic';
import { CreateOrderDto } from '../../../shared/models/createOrderDTO';
import { Order, OrderState } from '../../../shared/models/Order';
import { HttpService } from '../../../shared/services/http/http.service';
import { BoxLoader } from "../../../shared/components/box-loader/box-loader";
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';
import { parseError } from '../../../shared/services/errors/errorParser';
import { MessageBox } from "../../../shared/components/message-box/message-box";
import { Promotion } from '../../../shared/models/promotions';
import { calculateDiscount } from '../../../shared/utils/calcDiscount';
import { CustomCurrencyPipe } from '../../../shared/pipes/myCurrencyPipe';

@Component({
  selector: 'app-cart',
  imports: [CustomCurrencyPipe, ReactiveFormsModule, CommonModule, NgOptimizedImage, BoxLoader, MessageBox],
  providers: [CurrencyPipe],
  animations: [DropdownAnimation, DropdownAnimationAH],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit, AfterViewInit {
  readonly ASSETS = ASSETS;
  products = signal<Variant[]>([]);
  buyingForm: FormGroup
  selected: { [key: string]: number } = {};
  queryParamsSubscription: Subscription | undefined;
  currentUser: User | undefined;
  plataformId = inject(PLATFORM_ID);
  aditionalInfo = false;
  provinceOpen = false;
  munIsOpen = false;
  currentProvinceMun: string[] = []
  provinces = CUBA_PROVINCES;
  provincesArray: string[] = [];
  deliveryPrices: any[] = [];
  deliveryAvailable = false;
  loading = false;
  toDelete: string | undefined;
  discount = calculateDiscount;
  constructor(readonly cartService: CartService, private fb: FormBuilder, private http: HttpService,
    private route: ActivatedRoute, private cdr: ChangeDetectorRef, private authService: AuthService, private errorServ: ErrorLogService) {
    this.provincesArray = [];
    this.currentProvinceMun = []
    this.buyingForm = fb.group(
      {
        name: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.required, Validators.minLength(8)]],
        province: [""],
        municipality: [""],
        address: [""],
        note: ["", Validators.maxLength(200)]
      }
    )

  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.plataformId)) {
      window.scrollTo(0, 0);
    }
  }

  ngOnInit(): void {
    this.loadDeliveryPrices();

    this.authService.currentUser$.subscribe(user => {

      const phone = user?.phone.split(" ") ?? ""
      this.selectedRegionCode = user ? this.regionCodes.findIndex(x => x.code == phone[0]) : 2
      this.selectedRegionCode = this.selectedRegionCode == -1 ? 2 : this.selectedRegionCode
      this.currentUser = user ?? undefined;
      this.buyingForm.patchValue({
        name: user?.name ?? '',
        lastName: user?.lastName ?? '',
        email: user?.email ?? '',
        phone: phone.length > 0 ? phone[1] : ''
      })
    })
    this.queryParamsSubscription = this.route.queryParamMap.subscribe(() => {
      this.loadData();
    });
  }

  loadDeliveryPrices(): void {
    this.http.getDeliveryPrices().subscribe({
      next: (val) => {
        this.deliveryPrices = val as any[];
        const activePrices = this.deliveryPrices.filter(dp => dp.active);

        if (activePrices.length > 0) {
          this.deliveryAvailable = true;
          // Extraer provincias únicas de los precios de delivery
          const uniqueProvinces = [...new Set(activePrices.map(dp => dp.province))];
          this.provincesArray = uniqueProvinces;
        } else {
          this.deliveryAvailable = false;
          this.provincesArray = [];
          this.currentProvinceMun = [];
          // Limpiar provincia y municipio si no hay delivery disponible
          this.buyingForm.get('province')?.setValue('');
          this.buyingForm.get('municipality')?.setValue('');
          // Si estaba activado el delivery, desactivarlo
          if (this.aditionalInfo) {
            this.aditionalInfo = false;
            this.toggleDelivery();
          }
        }
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error loading delivery prices:', err);
        this.deliveryAvailable = false;
        this.provincesArray = [];
        this.currentProvinceMun = [];
        this.errorServ.addError(parseError(err));
      }
    });
  }

  filterMunicipalities(province: string): void {
    this.currentProvinceMun = this.deliveryPrices
      .filter(dp => dp.active && dp.province.toLowerCase() === province.toLowerCase())
      .map(dp => dp.municipality);
  }

  toggleDelivery() {
    if (!this.deliveryAvailable) return;
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
    province?.updateValueAndValidity({ emitEvent: false });
    city?.updateValueAndValidity({ emitEvent: false });
    address?.updateValueAndValidity({ emitEvent: false });
    this.buyingForm.updateValueAndValidity();
  }



  selectProvince(name: string) {
    this.buyingForm.get('province')?.setValue(name);
    this.buyingForm.get('municipality')?.setValue("");
    this.filterMunicipalities(name);
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

  canAdd(index: string): boolean {
    const variant = this.cartService.currentProducts().find(x => x.id === index);
    return variant ? this.selected[index] < variant.stock : false;
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
    if (this.buyingForm.valid && this.currentUser && this.selected) {

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
        phone: this.regionCodes[this.selectedRegionCode].code + " " + (this.buyingForm.get('phone')?.value as number).toString()
      }
      console.log(order);

      this.loading = true;
      this.http.createOrder(order).subscribe({
        next: val => {
          console.log(val);
          this.loading = false;
          const order = val as Order;

          const productLines = this.cartService.currentProducts()
            .filter(v => v.id in this.selected)
            .map(v => {
              const count = this.selected[v.id];
              const name = v.genericProd?.name || 'Producto';
              const url = `https://katauro.com/dashboard/${encodeURIComponent(v.genericProd?.category?.nombre || '')}/${v.genericProd?.id}`;
              return `  - ${name} x ${count} (${url})`;
            })
            .join('\n');

          const fullName = `${this.buyingForm.get('name')?.value || ''} ${this.buyingForm.get('lastName')?.value || ''}`.trim();
          const phone = this.buyingForm.get('phone')?.value
            ? `${this.regionCodes[this.selectedRegionCode].code} ${this.buyingForm.get('phone')?.value}`
            : '';
          const email = this.buyingForm.get('email')?.value || '';
          const city = this.buyingForm.get('municipality')?.value || '';
          const province = this.buyingForm.get('province')?.value || '';
          const subtotal = this.subTotalPrice().toFixed(2);
          const delivery = this.deliveryPrice().toFixed(2);
          const total = (this.subTotalPrice() + this.deliveryPrice()).toFixed(2);
          const note = this.buyingForm.get('note')?.value || 'Ninguna';

          const message = `Hola, equipo de Katauro.

Me gustaría realizar el siguiente pedido:

DATOS DEL CLIENTE
• Nombre completo: ${fullName}
• Teléfono: ${phone}
• Correo electrónico: ${email}
• Ciudad/Provincia: ${city}, ${province}

DETALLES DEL PEDIDO
• Producto(s):
${productLines}

RESUMEN DE COMPRA
• Subtotal: ${subtotal} USD
• Gasto de envío: ${delivery} USD
• Total a pagar: ${total} USD

OBSERVACIONES
${note}

Quedo atento(a) a la confirmación de disponibilidad, forma de pago y coordinación de la entrega.

Muchas gracias.`;

          this.openWhatsApp(order.id, message);
        },
        error: err => {
          console.log(err);
          this.loading = false;
          this.errorServ.addError(parseError(err));
        }
      })
    }
  }
  isMobile(): boolean {
    return isPlatformBrowser(this.plataformId) ? window.innerWidth <= 700 : false;
  }
  subTotalPrice(): number {
    let total = 0;
    for (const key in this.selected) {
      const variant = this.cartService.currentProducts().find(x => x.id === key);
      console.log(variant?.promotions)
      let varDiscount = variant?.promotions.filter(x => this.filterPromoByDate(x.promotion)).map(x => x.promotion.discount * 0.01).reduce((a, b) => a + b, 0) ?? 0;

      if (variant) {
        total += (variant.price - (variant.price * varDiscount)) * this.selected[key];
      }
    }
    return total;
  }

  private filterPromoByDate(promotion: Promotion) {
    let now = new Date()
    return new Date(promotion.startDate) < now && new Date(promotion.endDate) > now;
  }

  OriginalSubTotalPrice(): number {
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
    if (!this.aditionalInfo) return 0;

    const province = this.buyingForm.get('province')?.value;
    const municipality = this.buyingForm.get('municipality')?.value;

    if (!province || !municipality) return 0;

    const delivery = this.deliveryPrices.find(dp =>
      dp.active &&
      dp.province.toLowerCase() === province.toLowerCase() &&
      dp.municipality.toLowerCase() === municipality.toLowerCase()
    );

    return delivery?.price || 0;
  }
  openWhatsApp(id: string, messageText?: string) {
    if (isPlatformBrowser(this.plataformId)) {
      const phone = '+5353789828';
      const text = messageText
        ? encodeURIComponent(messageText)
        : encodeURIComponent(`Estoy interesado en comprar estos productos:\n\nID de pedido: ${id}`);
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    }
  }
  noSelected() {
    return Object.keys(this.selected).length == 0;
  }
  isValidForm(name: string) {
    return this.buyingForm.get(name)?.valid || !this.buyingForm.get(name)?.touched;
  }
  deleteFromCart(id: string) {
    this.loading = true;
    this.cartService.deleteFromCart([id], this.currentUser!.id).subscribe({
      next: val => {
        this.loading = false;
        const index = this.cartService.currentProducts().findIndex(x => x.id == id);
        if (index !== -1) {
          this.cartService.currentProducts().splice(index, 1);
        }
        // Limpiar selección si el producto borrado estaba seleccionado
        if (this.selected[id]) {
          delete this.selected[id];
        }
        this.cdr.detectChanges();
      },
      error: err => {
        this.loading = false;
        console.log(err);
        this.errorServ.addError(parseError(err));
      }
    })
  }
  warn: { msg: string, warn: string } | undefined;
  chose(id: string) {
    this.toDelete = id;
    this.warn = { msg: 'Eliminar producto de la cesta', warn: '¿Estás seguro que deseas realizar esta acción? Esta acción no tiene vuelta atrás.' };
  }

  onChosen(opt: boolean) {
    if (opt && this.toDelete) {
      this.deleteFromCart(this.toDelete);
      this.toDelete = undefined;
    }
    else {
      this.toDelete = undefined;
    }
  }


  openDropdown = false;
  selectedRegionCode = 2;
  onSelectRegionCode(index: number) {
    this.selectedRegionCode = index;
    this.openDropdown = false;
  }


  regionCodes = [
    { code: '+1', country: 'US' },   // Estados Unidos
    { code: '+52', country: 'MX' },
    { code: '+53', country: 'CU' },
    { code: '+54', country: 'AR' },
    { code: '+55', country: 'BR' },
    { code: '+56', country: 'CL' },
    { code: '+57', country: 'CO' },
    { code: '+58', country: 'VE' },

    { code: '+34', country: 'ES' },
    { code: '+33', country: 'FR' },
    { code: '+39', country: 'IT' },
    { code: '+49', country: 'DE' },
    { code: '+44', country: 'GB' },

    { code: '+351', country: 'PT' },
    { code: '+31', country: 'NL' },
    { code: '+32', country: 'BE' },
    { code: '+41', country: 'CH' },
    { code: '+43', country: 'AT' },

    { code: '+86', country: 'CN' },
    { code: '+81', country: 'JP' },
    { code: '+82', country: 'KR' },
    { code: '+91', country: 'IN' },

    { code: '+7', country: 'RU' },
    { code: '+20', country: 'EG' },
    { code: '+27', country: 'ZA' },
    { code: '+61', country: 'AU' },
  ];
}
