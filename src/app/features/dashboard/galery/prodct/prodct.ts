import { ChangeDetectorRef, Component, ElementRef, inject, NgZone, OnInit, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Categories, Product } from '../../../../shared/models/Products';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpService } from '../../../../shared/services/http/http.service';
import { Subscription, take } from 'rxjs';
import { parseError } from '../../../../shared/services/errors/errorParser';
import { ErrorLogService } from '../../../../shared/services/errors/error.log.service';

@Component({
  selector: 'app-prodct',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './prodct.html',
  styleUrl: './prodct.css'
})
export class Prodct implements OnInit {
  currentCategory: Categories = Categories.tableLumin;
  categories = Categories;
  products: Product[] = []
  ParamsSubscription: Subscription | undefined;
  selectedIndex = -1;
  indicatorX = 0;
  indicatorWidth = 0;
  charged = false;



  @ViewChildren('itemElem') itemElems!: QueryList<ElementRef>;
  @ViewChildren('CatElement') catElements!: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute, private router: Router, private zone: NgZone,
    private http: HttpService, private cdr: ChangeDetectorRef, private errorServ: ErrorLogService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('category');
    this.currentCategory = param ? param as Categories : Categories.tableLumin;

    this.ParamsSubscription = this.route.paramMap.subscribe(() => {
      this.readParams();
    });


  }

  readParams() {

    this.route.paramMap.subscribe(param => {
      const p = param.get('category') as Categories
      this.currentCategory = p ?? 'Liminarias de mesa'

    })


    this.http.getProducts({ category: this.currentCategory }).subscribe({
      next: (val) => {
        this.products = val as Product[];
        this.products = this.products.filter((prod) => prod.variants ? prod.variants.length > 0 : false);
        this.charged = true;
        this.scrollToSelectedCat();
        const index = this.route.snapshot.queryParamMap.get('index');
        if (!index && this.products.length > 0) {
          this.selectProduct(0);
          return;
        }
        this.selectedIndex = index ? this.products.findIndex((prod) => prod.id == index) : -1;
        this.updateIndicator();
        this.scrollToSelected();
        this.cdr.detectChanges();

      },
      error: (err) => {
        console.log(err);
        this.errorServ.addError(parseError(err));
      }
    });
  }


  plataformId = inject(PLATFORM_ID);
  ngAfterViewInit() {
    if (isPlatformBrowser(this.plataformId)) {
      window.scrollTo(0, 0);
    }
    this.zone.onStable.pipe(take(1)).subscribe(() => {
      this.updateIndicator();
    });;
  }

  selectProduct(index: number) {
    this.selectedIndex = index;
    this.updateIndicator();
    this.router.navigate([`dashboard/${this.currentCategory}/${this.products[index].id}`]);
  }

  updateIndicator() {
    if (this.selectedIndex < 0) return;
    const elem = this.itemElems.toArray()[this.selectedIndex]
    var ref: any | undefined
    if (elem) ref = elem.nativeElement;
    else return;
    this.indicatorX = ref?.offsetLeft;
    this.indicatorWidth = ref?.offsetWidth;
  }

  scrollToSelected() {
    if (isPlatformBrowser(this.plataformId)) {
      const elems = this.itemElems.toArray();
      const elem = elems[this.selectedIndex];
      if (!elem) return;

      elem.nativeElement.scrollIntoView({
        behavior: 'smooth', // animado
        inline: 'center',   // lo centra horizontalmente
        block: 'nearest'    // no hace scroll vertical
      });
    }
  }

  scrollToSelectedCat() {

    if (isPlatformBrowser(this.plataformId)) {
      const elems = this.catElements.toArray();
      if (!elems) return;
      const catDic = { 'Luminarias de mesa': 0, 'Luminarias de pared': 1, 'Luminarias de pie': 2, 'Luminarias de techo': 3, 'Accesorios': 4, 'Otras': 5 }
      const elem = elems[catDic[this.currentCategory]];
      if (!elem) return;
      elem.nativeElement.scrollIntoView({
        behavior: 'smooth', // animado
        inline: 'center',   // lo centra horizontalmente
        block: 'nearest'    // no hace scroll vertical
      });
    }
  }

  onCategorieChange(categorie: Categories) {
    this.currentCategory = categorie;
    this.router.navigate([`dashboard/${categorie}`]);
  }

  descoverMore() {
    this.router.navigate(["/dashboard/galery"]);
  }
}
