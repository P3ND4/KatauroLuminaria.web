import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Categories, Finish, Product, Variant } from '../../../../../shared/models/Products';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { HttpService } from '../../../../../shared/services/http/http.service';
import { lastValueFrom, Subscription } from 'rxjs';
import { CartService } from '../../../../../shared/services/cart/cart.service';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { User } from '../../../../../shared/models/User';

@Component({
  selector: 'app-singular',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './singular.html',
  styleUrl: './singular.css'
})
export class Singular implements OnInit {
  currentProduct: Product | undefined;
  prodId: string | undefined;
  queryParamsSubscription: Subscription | undefined;
  images: string[] = [];
  finishes: Finish[] = [];
  prodFinishes: Finish[] = [];
  currentVariant = 0;
  selectedImage = 0;
  user: User | undefined;
  constructor(private route: ActivatedRoute, private http: HttpService, private cdr: ChangeDetectorRef, private userService: AuthService, readonly cartService: CartService) {

  }
  ngOnInit(): void {
    this.queryParamsSubscription = this.route.paramMap.subscribe(() => this.chargeValues())

  }
  chargeValues() {
    const id = this.route.snapshot.paramMap.get('id')
    this.prodId = id ? id : undefined;
    if (id) {
      this.http.getProductById(id).subscribe({
        next: (val => {
          this.currentProduct = val as Product
          this.images = this.currentProduct.variants[this.currentVariant].images.map(x => x.link);
          this.loadFinishes();
          this.cdr.detectChanges();
        }),
        error: (err) => {
          console.log(err)

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
      error: err => console.log(err)
    })
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
      this.cartService.addToCart(this.user!.id, this.currentProduct.variants[this.currentVariant].id).subscribe(
        {
          next: val => {
            console.log(val);
            this.cartService.currentProducts.update(x=>[...x,this.currentProduct!.variants[this.currentVariant]]);
            this.cartService.loadCartFromBackend(this.user!.id);
            this.cdr.detectChanges();
          },
          error: err => console.log(err)
        }
      )
    }
  }

}
