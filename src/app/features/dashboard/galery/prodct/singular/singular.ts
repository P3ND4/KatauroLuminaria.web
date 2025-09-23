import { Component, OnInit } from '@angular/core';
import { Categories, Product, Variant } from '../../../../../shared/models/Products';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { HttpService } from '../../../../../shared/services/http/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-singular',
  imports: [CurrencyPipe],
  templateUrl: './singular.html',
  styleUrl: './singular.css'
})
export class Singular implements OnInit {
  currentProduct: Product | undefined;
  prodId: string | undefined;
  queryParamsSubscription: Subscription | undefined;
  constructor(private route: ActivatedRoute, private http: HttpService) {

  }
  ngOnInit(): void {
    this.queryParamsSubscription = this.route.paramMap.subscribe(() => this.chargeValues())

  }
  chargeValues() {
    const id = this.route.snapshot.paramMap.get('id')
    this.prodId = id ? id : undefined;
    if (id) {
      this.http.getProductById(id).subscribe({
        next: (val => {
          this.currentProduct = val as Product
        }),
        error: (err) => {
          console.log(err)
          this.currentProduct = {
            id: this.route.snapshot.paramMap.get('id') ?? "ajyyhsbodihjbqouh",
            name: "tubo e lu fria",
            description: "un tubo que alumbra y no se calienta",
            details: [],
            subtitle: '',
            finish: [],
            vector: "/assets/bombillo.svg",
            category: { id: 'asda', nombre: Categories.footLumin },
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
      })

    }
  }

}
