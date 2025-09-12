import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Corousel } from "../../../shared/components/corousel/corousel";
import { carouselDTO } from '../../../shared/models/carouselDTO';
import { CommonModule } from '@angular/common';
import { Categories, Product } from '../../../shared/models/Products';
import { HttpService } from '../../../shared/services/http/http.service';

@Component({
  selector: 'app-home',
  imports: [Corousel, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, AfterViewInit {
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
  constructor(private httpService: HttpService) {
    for (let index = 0; index < 8; index++) {
      this.mostRated.push({
        id: "cme4vc3750000wjt8qkx5io9v",
        name: "tubo e lu fria",
        description: "un tubo que alumbra y no se calienta",
        details: [],
        subtitle: "alumbra como unyelo",
        vector: "/assets/Group.svg",
        categorie: index == 2 ? Categories.tableLumin : Categories.footLumin,
        variants: [{
          id: "cme4vc3750000wjt8qkx5io9v",
          image: "/assets/cat_image.png",
          images: [],
          price: 200,
          stock: 13,
          name: ""
        }]
      });
      this.loading = false
    }
  }
  ngOnInit(): void {
    this.loading = true
    this.httpService.getProducts().subscribe({
      next: (data: any) => {
        this.mostRated = data;
        this.mostRated = this.mostRated.filter((prod: Product) => prod.variants.length != 0);
        for (let index = 0; index < 8; index++) {
          this.mostRated.push({
            id: "cme4vc3750000wjt8qkx5io9v",
            name: "tubo e lu fria",
            description: "un tubo que alumbra y no se calienta",
            details: [],
            subtitle: "alumbra como unyelo",
            vector: "/assets/Group.svg",
            categorie: index == 2 ? Categories.tableLumin : Categories.footLumin,
            variants: [{
              id: "cme4vc3750000wjt8qkx5io9v",
              image: "/assets/cat_image.png",
              images: [],
              price: 200,
              stock: 13,
              name: ""
            }]
          });
          this.loading = false
        }
      },
      error: (err) => {
        console.log(err)
        for (let index = 0; index < 8; index++) {
          this.mostRated.push({
            id: "cme4vc3750000wjt8qkx5io9v",
            name: "tubo e lu fria",
            description: "un tubo que alumbra y no se calienta",
            details: [],
            subtitle: "alumbra como unyelo",
            vector: "/assets/Group.svg",
            categorie: index == 2 ? Categories.tableLumin : Categories.footLumin,
            variants: [{
              id: "cme4vc3750000wjt8qkx5io9v",
              image: "/assets/cat_image.png",
              images: [],
              price: 200,
              stock: 13,
              name: ""
            }]
          });
          this.loading = false
        }
      }
    });
  }

  ngAfterViewInit() {
    window.scrollTo(0, 0); // Scroll instantáneo al top
  }
  isChargin() {
    return this.loading;
  }
}
