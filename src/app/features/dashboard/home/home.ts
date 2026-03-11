import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Corousel } from "../../../shared/components/corousel/corousel";
import { carouselDTO } from '../../../shared/models/carouselDTO';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Categories, Product, Variant } from '../../../shared/models/Products';
import { HttpService } from '../../../shared/services/http/http.service';
import { Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { User } from '../../../shared/models/User';
import { SkeletonLoader } from '../../../shared/components/skeleton-loader/skeleton-loader';
import { BoxLoader } from "../../../shared/components/box-loader/box-loader";
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';
import { HttpErrorResponse } from '@angular/common/http';
import { parseError } from '../../../shared/services/errors/errorParser';
import { Carousel } from '../../../shared/models/promotions';

@Component({
  selector: 'app-home',
  imports: [Corousel, CommonModule, SkeletonLoader, BoxLoader],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit {
  catEnum = Categories;
  correctLoaded = () => this.prodLoaded && this.carLoaded;
  user: User | undefined
  prodLoaded = false
  carLoaded = false


  carousel1: carouselDTO | undefined;
  carousel2: carouselDTO | undefined;

  carousel3: carouselDTO = this.create3rdPan()

  create3rdPan() {
    const images = [
      '/assets/back_image4.png',
      '/assets/back_image5.png',
      '/assets/back_image.webp']
    const carousel: carouselDTO = {
      carousel: 2,
      banners: images.map(x => ({
        id: 0,
        name: "Katauro Luminarias",
        description: "Un equipo multidisciplinario de trabajo creado desde el 2013, especializado en el diseño y producción de luminarias en Cuba. Vemos la luz en un diseño conceptual e innovador. Concebimos soluciones tecnológicas que permiten la producción en serie, el montaje en el espacio y el acompañamiento técnico de lámparas.",
        image: x,
        prodId: '',
        carouselId: 0
      }))
    }
    return carousel;

  }
  mostRated: Product[] = [
  ]
  loading = false;
  loadMsg = "Cargando..."

  constructor(private httpService: HttpService, private cdr: ChangeDetectorRef, readonly router: Router, private cartService: CartService, private userService: AuthService, private errorServ: ErrorLogService) {

  }
  ngOnInit(): void {
    this.userService.currentUser$.subscribe({
      next: val => this.user = val as User,
      error: err => console.log(err)
    });
    this.httpService.getProducts().subscribe({
      next: (data: any) => {
        this.mostRated = data;
        this.mostRated = this.mostRated.filter((prod: Product) => prod.variants.length != 0);

        this.cdr.detectChanges();
        this.prodLoaded = true;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.prodLoaded = true;
        this.errorServ.addError(parseError(err));
      }
    });
    this.loadData();
  }

  loadData() {
    this.httpService.getCarousels().subscribe({
      next: val => {
        const cars = val as Carousel[]
        this.carousel1 = {
          carousel: 0,
          banners: cars[0].banners
        }
        this.carousel2 = {
          carousel: 1,
          banners: cars[1].banners
        }
        this.carLoaded = true;
      },
      error: err => {
        this.carLoaded = true;
        this.errorServ.addError(parseError(err))
      }
    })
  }

  platformId = inject(PLATFORM_ID);
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0); // Scroll instantáneo al top
    }
  }
  isChargin() {
    return this.loading;
  }
  navigateToProduct(productCategory: Categories, productId: string) {
    this.router.navigate(['/dashboard', productCategory, productId], { queryParams: { index: productId } });
  }
  navigateCat(cat: Categories) {
    this.router.navigate(['dashboard/galery'], {
      queryParams: {
        page: 1,
        category: cat
      }
    })
  }

  toOwn(variant: Variant) {
    if (this.cartService.currentProducts().find(x => x.id === variant.id)) {
      this.router.navigate(['/dashboard/cart'], {
        queryParams: {
          markedId: variant.id
        }
      });
    }
    else if (this.userService.isLogged()) {
      this.loading = true;
      this.cdr.detectChanges();
      this.cartService.addToCart(this.user!.id, variant.id).subscribe(
        {
          next: val => {
            console.log(val);
            this.cartService.currentProducts.update(x => [...x, variant]);
            this.cartService.loadCartFromBackend(this.user!.id);
            this.cdr.detectChanges();
            this.router.navigate(['/dashboard/cart'], {
              queryParams: {
                markedId: variant.id
              }
            })
          },
          error: err => {
            console.log(err);
            this.loading = false;
          }
        }
      )
    }
  }

}
