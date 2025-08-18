import { Component } from '@angular/core';
import { Categories, Product } from '../../../../../shared/models/Products';
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
  
  constructor(private route: ActivatedRoute){
    this.currentProduct = {
            id: this.route.snapshot.paramMap.get('category')?? "ajyyhsbodihjbqouh",
            name: "tubo e lu fria",
            description: "un tubo que alumbra y no se calienta",
            image: "/assets/Image.png",
            price: 200,
            vector:  "/assets/bombillo.svg",
    
            stock: 13,
            categorie: Categories.footLumin
          };
  }

}
