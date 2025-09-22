import { Component, ElementRef, NgZone, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Categories, Product } from '../../../../shared/models/Products';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../../../shared/services/http/http.service';

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

  selectedIndex = 0;
  indicatorX = 0;
  indicatorWidth = 0;
  @ViewChildren('itemElem') itemElems!: QueryList<ElementRef>;

  constructor(private route: ActivatedRoute, private router: Router, private zone: NgZone, private http: HttpService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('category');
    this.currentCategory = param ? param as Categories : Categories.tableLumin;
    this.http.getProducts().subscribe({
      next: (val) => {
        this.products = val as Product[]
      },
      error: (err) => {
        console.log(err);
        for (let index = 0; index < 8; index++) {
          this.products.push({
            id: `cme4vc3750000wjt8qkx5io9v${index}`,
            name: "tubo e lu fria",
            description: "un tubo que alumbra y no se calienta",
            vector: index == 2 ? "/assets/bombillo.svg" : "/assets/Group.svg",
            details: [],
            subtitle: "",
            categorie: index == 2 ? Categories.lightBulb : Categories.footLumin,
            variants: [{
              name: "",
              price: 200,
              stock: 13,
              image: "/assets/Image.png",
              images: [],
              id: ""
            }]
          });

          this.selectedIndex = this.products.findIndex(product => product.id === 'cme4vc3750000wjt8qkx5io9v7');

        }
      }

    })



  }


  ngAfterViewInit() {
    window.scrollTo(0, 0);
    this.zone.onStable.subscribe(() => {
      this.updateIndicator();
      this.scrollToSelected();
    });
  }

  selectProduct(index: number) {
    this.selectedIndex = index;
    this.updateIndicator();
    this.router.navigate([`dashboard/${this.currentCategory}/${this.products[index].id}`]);
  }

  updateIndicator() {
    const elem = this.itemElems.toArray()[this.selectedIndex].nativeElement;
    this.indicatorX = elem.offsetLeft;
    this.indicatorWidth = elem.offsetWidth;
  }

  scrollToSelected() {
    const elems = this.itemElems.toArray();
    const elem = elems[this.selectedIndex];
    if (!elem) return;
    elem.nativeElement.scrollIntoView({
      behavior: 'smooth', // animado
      inline: 'center',   // lo centra horizontalmente
      block: 'nearest'    // no hace scroll vertical
    });
  }


  onCategorieChange(categorie: Categories) {
    this.currentCategory = categorie;
    this.router.navigate([`dashboard/${categorie}`]);
  }

  descoverMore() {
    this.router.navigate(["/dashboard/galery"]);
  }
}
