import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Categories, Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-galery',
  imports: [CommonModule],
  templateUrl: './galery.html',
  styleUrl: './galery.css'
})
export class Galery implements OnInit, AfterViewInit {
  products: Product[] = []; // Aquí se almacenarán los productos filtrados
  categories = Categories
  selectedCategory: Categories | 'TODAS' = 'TODAS';
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const cat = this.route.snapshot.paramMap.get('cat');

    for (let index = 0; index < 9; index++) {
      this.products.push({
        id: "cme4vc3750000wjt8qkx5io9v",
        name: "tubo e lu fria",
        description: "un tubo que alumbra y no se calienta",
        details: [],
        subtitle: "alumbra como unyelo",
        vector: "/assets/Group.svg",
        categorie: index == 2 ? Categories.tableLumin : Categories.footLumin,
        variants: [{
          id: "cme4vc3750000wjt8qkx5io9v",
          image: "/assets/Image.png",
          images: [],
          price: 200,
          stock: 13,
          name: ""
        }]
      });
    }
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  onCategoryChange(category: Categories | 'TODAS') {
    this.selectedCategory = category;
  }

  navigateToProduct(productCategory: Categories, productId: string) {
    this.router.navigate(['/dashboard', productCategory, productId]);
  }
}
