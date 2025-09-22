import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Categories, Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http/http.service';
import { Subscription } from 'rxjs';

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
  pages = 1;
  currentPage = 1
  pagesArray = [1]
  queryParamsSubscription: Subscription | undefined;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService) {

  }

  ngOnInit(): void {
    const cat = this.route.snapshot.paramMap.get('cat');

    this.queryParamsSubscription = this.route.queryParamMap.subscribe(() => {
      this.readQuery();
    });

    this.http.getPages().subscribe(
      {
        next: (val) => {
          this.pages = val as number;
          this.pagesArray = Array.from({ length: this.pages }, (_, i) => i + 1);
        },
        error: (err) => { console.log(err); }
      }
    )




  }
  readQuery() {
    this.route.queryParamMap.subscribe(params => {
      const result = params.get('page');
      this.currentPage = result ? + result : 1;

    });

    this.readData();
  }

  readData() {
    this.http.getProducts(this.currentPage).subscribe({
      next: (val) => {
        this.products = val as Product[]
        this.products = this.products.filter((prod) => prod.variants.length > 0);
        console.log(this.products.length);
      },
      error: (err) => {
        console.log(err);
        for (let index = 0; index < 8; index++) {
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
    })
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


  onPageChange(page: number) {
    this.currentPage = page;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
    window.scrollTo(0, 0);
  }



  ngOnDestroy() {
    // Es importante desuscribirse para evitar fugas de memoria
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
}
