import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { carouselDTO } from '../../models/carouselDTO';

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

  ngOnInit(): void {
    this.carouselType = this.data?.carousel
    this.startAutoplay();
  }

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



}
