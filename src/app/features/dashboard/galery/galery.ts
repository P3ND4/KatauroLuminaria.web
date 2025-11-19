import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Categories, Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http/http.service';
import { Subscription } from 'rxjs';
import { FadeAndSlideIn } from '../../../shared/animations/FadeAndSlideIn';
import { SkeletonLoader } from '../../../shared/components/skeleton-loader/skeleton-loader';

@Component({
  selector: 'app-galery',
  imports: [CommonModule, SkeletonLoader],
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

  correctCharged = false;

  @ViewChildren('CatElementGalery') catElements!: QueryList<ElementRef>;
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

    const pagesOpt = { category: this.selectedCategory !== 'TODAS' ? this.selectedCategory : undefined }
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
        this.correctCharged = true;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  ngAfterViewInit(): void {
    this.scrollToSelectedCat(this.selectedCategory);
    window.scrollTo(0, 0);
  }

  onCategoryChange(category: Categories | 'TODAS') {
    document.documentElement.setAttribute('data-direction', '');
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage, category: category !== "TODAS" ? category : undefined },
      queryParamsHandling: 'merge',
    });
    window.scrollTo(0, 0);
  }

  navigateToProduct(productCategory: Categories, productId: string) {
    document.documentElement.setAttribute('data-direction', '');
    this.router.navigate(['/dashboard', productCategory, productId], { queryParams: { index: productId } });
  }


  scrollToSelectedCat(currentCategory: Categories | 'TODAS') {
    const elems = this.catElements.toArray();
    const catDic = { 'TODAS': 0, 'Luminarias de mesa': 1, 'Luminarias de pared': 2, 'Luminarias de pie': 3, 'Luminarias de techo': 4, 'Accesorios': 5, 'Otras': 6 }
    const elem = elems[catDic[currentCategory]];
    if (!elem) return;
    elem.nativeElement.scrollIntoView({
      behavior: 'smooth', // animado
      inline: 'center',   // lo centra horizontalmente
      block: 'nearest'    // no hace scroll vertical
    });
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
