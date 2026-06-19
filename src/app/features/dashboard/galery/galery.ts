import { AfterViewInit, Component, ElementRef, inject, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { Categories, Product, Variant } from '../../../shared/models/Products';
import { CommonModule, CurrencyPipe, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http/http.service';
import { ASSETS } from '../../../shared/constants/image-library';
import { SeoService } from '../../../shared/services/seo/seo.service';

import { Subscription } from 'rxjs';
import { FadeAndSlideIn } from '../../../shared/animations/FadeAndSlideIn';
import { SkeletonLoader } from '../../../shared/components/skeleton-loader/skeleton-loader';
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';
import { parseError } from '../../../shared/services/errors/errorParser';
import { Discount } from "../../../shared/components/discount/discount";
import { calculateDiscount } from '../../../shared/utils/calcDiscount';
import { getAlt } from '../../../shared/utils/getAlt';

@Component({
  selector: 'app-galery',
  imports: [CommonModule, NgOptimizedImage, SkeletonLoader, Discount],
  animations: [FadeAndSlideIn],
  templateUrl: './galery.html',
  styleUrl: './galery.css'
})
export class Galery implements OnInit, AfterViewInit {
  readonly ASSETS = ASSETS;
  products: Product[] = []; // Aquí se almacenarán los productos filtrados
  categories = Categories
  selectedCategory: Categories | 'TODAS' = 'TODAS';
  pages = 1;
  currentPage = 1
  pagesArray = [1]
  queryParamsSubscription: Subscription | undefined;
  public discounts = calculateDiscount;
  correctCharged = false;
  getAlt = getAlt;


  @ViewChildren('CatElementGalery') catElements!: QueryList<ElementRef>;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpService, private errorServ: ErrorLogService, private seo: SeoService) {
  }

  ngOnInit(): void {
    this.seo.setPage('Galería', 'Explora nuestra colección de luminarias LED de diseño: lámparas de mesa, pared, pie y techo. Calidad y estilo para tu hogar.');
    const cat = this.route.snapshot.paramMap.get('cat');

    this.queryParamsSubscription = this.route.queryParamMap.subscribe(() => {

      this.readQuery();
    });




  }


  readQuery() {
    this.correctCharged = false;
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
        console.log(val);
        this.products = (val as { products: Product[], total: number }).products;
        this.products = this.products.filter((prod) => prod.variants.length > 0);

        this.correctCharged = true;
      },
      error: (err) => {
        this.errorServ.addError(parseError(err));
      }
    })
  }

  ngAfterViewInit(): void {
    this.scrollToSelectedCat(this.selectedCategory);
    if (isPlatformBrowser(this.plataformId)) {
      window.scrollTo(0, 0);
    }
  }

  onCategoryChange(category: Categories | 'TODAS') {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: 1, category: category !== "TODAS" ? category : undefined },
      queryParamsHandling: 'merge',
    });
    if (isPlatformBrowser(this.plataformId)) {
      window.scrollTo(0, 0);
    }
  }

  navigateToProduct(productCategory: Categories, productId: string) {
    if (isPlatformBrowser(this.plataformId)) {
      document.documentElement.setAttribute('data-direction', '');
    }
    this.router.navigate(['/dashboard', productCategory, productId], { queryParams: { index: productId } });
  }


  plataformId = inject(PLATFORM_ID);

  scrollToSelectedCat(currentCategory: Categories | 'TODAS') {
    const elems = this.catElements.toArray();
    const catDic = { 'TODAS': 0, 'Luminarias de mesa': 1, 'Luminarias de pared': 2, 'Luminarias de pie': 3, 'Luminarias de techo': 4, 'Accesorios': 5, 'Otras': 6 }
    const elem = elems[catDic[currentCategory]];
    if (!elem) return;
    if (isPlatformBrowser(this.plataformId)) {
      elem.nativeElement.scrollIntoView({
        behavior: 'smooth', // animado
        inline: 'center',   // lo centra horizontalmente
        block: 'nearest'    // no hace scroll vertical
      });
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: this.currentPage },
      queryParamsHandling: 'merge',
    });
    if (isPlatformBrowser(this.plataformId)) {
      window.scrollTo(0, 0);
    }
  }



  ngOnDestroy() {
    // Es importante desuscribirse para evitar fugas de memoria
    if (this.queryParamsSubscription) {
      this.queryParamsSubscription.unsubscribe();
    }
  }
}
