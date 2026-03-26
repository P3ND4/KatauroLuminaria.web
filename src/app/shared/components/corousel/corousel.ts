import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { carouselDTO } from '../../models/carouselDTO';
import { Router } from '@angular/router';


@Component({
  selector: 'app-corousel',
  imports: [CommonModule],
  templateUrl: './corousel.html',
  styleUrl: './corousel.css'
})
export class Corousel implements OnInit, OnDestroy {
  @Input({ required: true }) data!: carouselDTO
  carouselType?: number
  currentSlide: number = 0;

  autoSlideInterval: any;

  ngOnDestroy(): void {
    clearInterval(this.autoSlideInterval);
  }

  platagormId = inject(PLATFORM_ID);
  ngOnInit(): void {
    this.carouselType = this.data?.carousel

    if (isPlatformBrowser(this.platagormId)) {
      this.startAutoplay();
    }
  }

  constructor(private router: Router) { }

  startAutoplay(): void {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 4000); // Cambia de slide cada 4 segundos
  }


  goToSlide(index: number) {
    this.currentSlide = index;
    clearInterval(this.autoSlideInterval);
    this.autoSlideInterval = setTimeout(() => {
      clearInterval(this.autoSlideInterval);
      this.startAutoplay();
    }, 6000
    ); // espera 10s y sigue
  }
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.data.banners.length;
  }

  toOwn(slide: number) {

    this.data.banners[slide].product ?
      this.router.navigate(['dashboard', this.data.banners[slide].product?.genericProd?.category.nombre, this.data.banners[slide].product.genericProd?.id],
        {
          queryParams: {
            variant: this.data.banners[slide].prodId
          }
        }
      ) : null
  }


}
