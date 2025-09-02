import { Component } from '@angular/core';
import { Corousel } from "../../../shared/components/corousel/corousel";
import { carouselDTO } from '../../../shared/models/carouselDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Corousel, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
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
  mostRated: string[] = [
    "/assets/lampara.png",
    "/assets/lampara.png",
    "/assets/lampara.png",
    "/assets/lampara.png",
    "/assets/lampara.png",
    "/assets/lampara.png",
    "/assets/lampara.png"
  ]
  ngAfterViewInit() {
    window.scrollTo(0, 0); // Scroll instantáneo al top
  }
}
