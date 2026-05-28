import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../../../shared/services/http/http.service';
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';
import { parseError } from '../../../shared/services/errors/errorParser';
import { Product, Categories } from '../../../shared/models/Products';
import { getAlt } from '../../../shared/utils/getAlt';
import { SkeletonLoader } from '../../../shared/components/skeleton-loader/skeleton-loader';

@Component({
  selector: 'app-discover-more',
  imports: [CommonModule, SkeletonLoader],
  templateUrl: './discover-more.html',
  styleUrl: './discover-more.css'
})
export class DiscoverMoreComponent implements OnInit {
  private httpService = inject(HttpService);
  private errorServ = inject(ErrorLogService);
  private router = inject(Router);

  products: Product[] = [];
  loaded = false;
  altText = getAlt;

  ngOnInit(): void {
    this.httpService.findRandomProducts(4).subscribe({
      next: (data: any) => {
        this.products = data.filter((prod: Product) => prod.variants.length != 0);
        this.loaded = true;
      },
      error: (err: HttpErrorResponse) => {
        this.loaded = true;
        this.errorServ.addError(parseError(err));
      }
    });
  }

  navigateToProduct(productCategory: Categories, productId: string) {
    this.router.navigate(['/dashboard', productCategory, productId], {
      queryParams: { index: productId }
    });
  }

  navigateToGalery() {
    this.router.navigate(['dashboard/galery']);
  }
}