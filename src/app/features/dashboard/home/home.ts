import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Corousel } from "../../../shared/components/corousel/corousel";
import { carouselDTO } from '../../../shared/models/carouselDTO';
import { CommonModule } from '@angular/common';
import { Categories, Product, Variant } from '../../../shared/models/Products';
import { HttpService } from '../../../shared/services/http/http.service';
import { Router } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-home',
  imports: [Corousel, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit {
  catEnum = Categories;
  correctLoaded = false;
  user: User | undefined

  carousel1: carouselDTO = {
    carousel: 0,
    title: "Título atractivo en 2 líneas de texto",
    description: "Descripción corta del evento o producto que se este promocionando.",
    images: [
      '/assets/back_image.webp',
      '/assets/back_image2.png',
      '/assets/back_image3.png']
  }
  carousel2: carouselDTO = {
    carousel: 1,
    title: "Título atractivo en 2 líneas de texto",
    description: "Descripción corta del evento o producto que se este promocionando.",
    images: [
      '/assets/back_image4.png',
      '/assets/back_image5.png',
      '/assets/back_image.webp']
  }
  mostRated: Product[] = [
  ]
  loading = false;
  constructor(private httpService: HttpService, private cdr: ChangeDetectorRef, readonly router: Router, private cartService: CartService, private userService: AuthService) {

  }
  ngOnInit(): void {
    this.loading = true
    this.userService.currentUser$.subscribe({
      next: val => this.user = val as User,
      error: err => console.log(err)
    });
    this.httpService.getProducts().subscribe({
      next: (data: any) => {
        this.mostRated = data;
        this.mostRated = this.mostRated.filter((prod: Product) => prod.variants.length != 0);
        this.loading = false
        this.cdr.detectChanges();
        this.correctLoaded = true;
      },
      error: (err) => {
        console.log(err)
        this.loading = false
      }
    });
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0); // Scroll instantáneo al top
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
          error: err => console.log(err)
        }
      )
    }
  }

}
