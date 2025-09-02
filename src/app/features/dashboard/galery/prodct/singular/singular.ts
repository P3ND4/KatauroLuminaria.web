import { Component } from '@angular/core';
import { Categories, Product, Variant } from '../../../../../shared/models/Products';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-singular',
  imports: [CurrencyPipe],
  templateUrl: './singular.html',
  styleUrl: './singular.css'
})
export class Singular {
  currentProduct: Product;

  constructor(private route: ActivatedRoute) {
    this.currentProduct = {
      id: this.route.snapshot.paramMap.get('category') ?? "ajyyhsbodihjbqouh",
      name: "tubo e lu fria",
      description: "un tubo que alumbra y no se calienta",
      details: [],
      subtitle: '',
      vector: "/assets/bombillo.svg",
      categorie: Categories.footLumin,
      variants: [{
        name: "",
        price: 200,
        stock: 13,
        image: "/assets/Image.png",
        images: [],
        id: ""
      }]
    };
  }

}
