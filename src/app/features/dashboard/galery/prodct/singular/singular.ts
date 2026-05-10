import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Categories, Finish, Product, Variant } from '../../../../../shared/models/Products';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, CurrencyPipe, NgClass, isPlatformBrowser } from '@angular/common';
import { HttpService } from '../../../../../shared/services/http/http.service';
import { lastValueFrom, Subscription } from 'rxjs';
import { CartService } from '../../../../../shared/services/cart/cart.service';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { User } from '../../../../../shared/models/User';
import { BoxLoader } from "../../../../../shared/components/box-loader/box-loader";
import { ErrorLogService } from '../../../../../shared/services/errors/error.log.service';
import { parseError } from '../../../../../shared/services/errors/errorParser';
import { Discount } from "../../../../../shared/components/discount/discount";
import { calculateDiscount } from '../../../../../shared/utils/calcDiscount';
import { getAlt } from '../../../../../shared/utils/getAlt';
import { CustomCurrencyPipe } from '../../../../../shared/pipes/myCurrencyPipe';
import { ASSETS } from '../../../../../shared/constants/image-library';

@Component({
  selector: 'app-singular',
  imports: [CustomCurrencyPipe, CommonModule, BoxLoader, Discount],
  providers: [CurrencyPipe],
  templateUrl: './singular.html',
  styleUrl: './singular.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // 👈 esto es lo que faltaba
})
export class Singular implements OnInit {
  readonly ASSETS = ASSETS;
  currentProduct: Product | undefined;
  prodId: string | undefined;
  queryParamsSubscription: Subscription | undefined;
  images: string[] = [];
  finishes: Finish[] = [];
  prodFinishes: Finish[] = [];
  currentVariant = 0;
  selectedImage = 0;
  user: User | undefined;
  charged = false;
  loading = false;
  getAlt = getAlt;
  platformId = inject(PLATFORM_ID);



  discounts = calculateDiscount;
  constructor(private route: ActivatedRoute, private http: HttpService, private cdr: ChangeDetectorRef, private userService: AuthService,
    readonly cartService: CartService, private router: Router, private errorServ: ErrorLogService) {

  }
  ngOnInit(): void {
    this.loadModelViewer();
    this.queryParamsSubscription = this.route.paramMap.subscribe(() => this.chargeValues())
  }

  private loadModelViewer(): void {
    if (!isPlatformBrowser(this.platformId) || document.querySelector('script[src*="model-viewer"]')) return;
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);
  }
  chargeValues() {
    const id = this.route.snapshot.paramMap.get('id')
    const selectedVariant = this.route.snapshot.queryParamMap.get('variant');
    this.prodId = id ? id : undefined;
    if (id) {
      this.http.getProductById(id).subscribe({
        next: (val => {
          this.currentProduct = val as Product
          this.images = this.currentProduct.variants[this.currentVariant].images.map(x => x.link);
          this.loadFinishes();
          if (selectedVariant) {
            this.currentVariant = this.currentProduct?.variants.findIndex(x => x.id === selectedVariant) ?? 0;
          }
          this.cdr.detectChanges();
          this.charged = true
        }),
        error: (err) => {

          this.errorServ.addError(parseError(err));
        }
      })
    }
    this.userService.currentUser$.subscribe(
      {
        next: val => this.user = val as User,
        error: err => console.log(err)
      }
    )
  }
  private loadFinishes() {
    this.http.getFinishes().subscribe({
      next: val => {
        this.finishes = val as Finish[];
        this.prodFinishes = this.finishes.filter(x => this.currentProduct!.finish.filter(y => y.finishId === x.id).length > 0) ?? [];

      },
      error: err => {

        this.errorServ.addError(parseError(err));
      }
    })
  }

  hasModel3D(): boolean {
    const models = this.currentProduct?.variants[this.currentVariant]?.models3D;
    return models !== undefined && models.length > 0;
  }

  get model3DUrl(): string | undefined {
    return this.currentProduct?.variants[this.currentVariant]?.models3D?.[0]?.url;
  }

  variantChange(i: number) {
    this.currentVariant = i
    this.images = this.currentProduct?.variants[this.currentVariant].images.map(x => x.link) ?? [];
    this.selectedImage = 0;
    this.cdr.detectChanges()
  }

  selectImage(i: number) {
    this.selectedImage = i;
    this.cdr.detectChanges();
  }

  async addToCart() {
    if (this.currentProduct && this.userService.isLogged()) {
      this.loading = true;
      this.cartService.addToCart(this.user!.id, this.currentProduct.variants[this.currentVariant].id).subscribe(
        {
          next: val => {

            this.cartService.currentProducts.update(x => [...x, this.currentProduct!.variants[this.currentVariant]]);
            this.cartService.loadCartFromBackend(this.user!.id);
            this.loading = false;
            this.cdr.detectChanges();
          },
          error: err => {

            this.loading = false;
            this.errorServ.addError(parseError(err));
          }
        }
      )
    }
    else if (!this.userService.isLogged()) {
      this.router.navigate(['/login/signin']);
    }
  }

  toOwn() {
    if (this.currentProduct && this.cartService.currentProducts().find(x => x.id === this.currentProduct?.variants[this.currentVariant].id)) {
      this.router.navigate(['/dashboard/cart'], {
        queryParams: {
          markedId: this.currentProduct?.variants[this.currentVariant].id
        }
      });
    }
    else if (this.currentProduct && this.userService.isLogged()) {
      this.loading = true;
      this.cartService.addToCart(this.user!.id, this.currentProduct.variants[this.currentVariant].id).subscribe(
        {
          next: val => {

            this.cartService.currentProducts.update(x => [...x, this.currentProduct!.variants[this.currentVariant]]);
            this.cartService.loadCartFromBackend(this.user!.id);
            this.loading = false;
            this.cdr.detectChanges();
            this.router.navigate(['/dashboard/cart'], {
              queryParams: {
                markedId: this.currentProduct?.variants[this.currentVariant].id
              }
            })
          },
          error: err => {

            this.loading = false;
            this.errorServ.addError(parseError(err));
          }
        }
      )
    }
    else if (!this.userService.isLogged()) {
      this.router.navigate(['/login/signin']);
    }

  }

}
