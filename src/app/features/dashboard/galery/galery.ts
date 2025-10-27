import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Categories, Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http/http.service';
import { Subscription } from 'rxjs';
import { FadeAndSlideIn } from '../../../shared/animations/FadeAndSlideIn';

@Component({
  selector: 'app-galery',
  imports: [CommonModule],
  animations: [FadeAndSlideIn],
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




  }
  readQuery() {
    this.route.queryParamMap.subscribe(params => {
      const page = params.get('page');
      this.currentPage = page ? + page : 1;
      const category = params.get('category');
      this.selectedCategory = category ? category as Categories : "TODAS";
    });
    this.readData();

  }

  readData() {
    const option = this.selectedCategory !== 'TODAS' ? { page: this.currentPage, category: this.selectedCategory } : { page: this.currentPage }

    const pagesOpt = {category: this.selectedCategory !== 'TODAS'? this.selectedCategory: undefined}
    this.http.getPages(pagesOpt).subscribe(
      {
        next: (val) => {
          this.pages = val as number;
          this.pagesArray = Array.from({ length: this.pages }, (_, i) => i + 1);
        },
        error: (err) => { console.log(err); }
      }
    )

    this.http.getProducts(option).subscribe({
      next: (val) => {
        this.products = val as Product[]
        this.products = this.products.filter((prod) => prod.variants.length > 0);
        console.log(this.products.length);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }

  onCategoryChange(category: Categories | 'TODAS') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage, category: category !== "TODAS" ? category : undefined },
      queryParamsHandling: 'merge',
    });
    window.scrollTo(0, 0);
  }

  navigateToProduct(productCategory: Categories, productId: string) {
    this.router.navigate(['/dashboard', productCategory, productId], { queryParams: { index: productId } });
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
