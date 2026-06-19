import { Component, OnInit, ChangeDetectorRef, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { HttpService } from '../../../shared/services/http/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';
import { ASSETS } from '../../../shared/constants/image-library';
import { parseError } from '../../../shared/services/errors/errorParser';
import { SeoService } from '../../../shared/services/seo/seo.service';
import { forkJoin } from 'rxjs';

import { Blog as BlogEntinty } from '../../../shared/models/blog/blog.entity';
import { Router } from '@angular/router';
import { SkeletonLoader } from '../../../shared/components/skeleton-loader/skeleton-loader';

import { MOCK_BLOGS } from '../../../shared/mocks/blogs.mock';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, NgOptimizedImage, SkeletonLoader],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit, AfterViewInit {
  readonly ASSETS = ASSETS;
  blogs: BlogEntinty[] = [];
  recientBlogs: BlogEntinty[] = [];
  loading = false;
  loadMsg = "Cargando blogs...";
  blogsLoaded = false;
  currentPage = 1;
  itemsPerPage = 9;
  totalPages = 1;
  usingMockData = false;

  private httpService = inject(HttpService);
  private cdr = inject(ChangeDetectorRef);
  private errorServ = inject(ErrorLogService);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.setPage('Blog', 'Descubre consejos, información y documentación sobre iluminación LED y diseño de luminarias en el blog de Katauro.');
    if (isPlatformBrowser(this.platformId)) {
      this.loadBlogs();
    }
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  loadBlogs(): void {
    this.loading = true;

    // En página 1, una sola petición trae todo
    if (this.currentPage === 1) {
      this.httpService.getBlogs(1).subscribe({
        next: (data: any) => {
          let blogsData = Array.isArray(data.blogs) ? (data as { blogs: BlogEntinty[], total: number }).blogs : [];
          const total = data.total || 0;
          blogsData = blogsData.filter((blog: BlogEntinty) => blog && blog.id);

          if (blogsData.length === 0) {
            this.useMockData();
          } else {
            this.blogs = blogsData;
            this.recientBlogs = blogsData.slice(0, 3);
            this.totalPages = Math.ceil(total / this.itemsPerPage) || 1;
            this.usingMockData = false;
          }

          this.blogsLoaded = true;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error loading blogs:', err);
          this.useMockData();
          this.blogsLoaded = true;
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
      return;
    }

    // En página > 1, cargar recientes (si no están cacheados) + grid actual
    const requests: any[] = [this.httpService.getBlogs(this.currentPage)];
    if (this.recientBlogs.length === 0) {
      requests.push(this.httpService.getBlogs(1));
    }

    forkJoin(requests).subscribe({
      next: (results: any[]) => {
        const gridData = results[0] as { blogs: BlogEntinty[], total: number };
        const recentsData = results[1] as { blogs: BlogEntinty[], total: number } | null;

        // Procesar grid
        let blogsData = Array.isArray(gridData.blogs) ? gridData.blogs : [];
        const total = gridData.total || 0;
        blogsData = blogsData.filter((blog: BlogEntinty) => blog && blog.id);

        if (recentsData) {
          let recents = Array.isArray(recentsData.blogs) ? recentsData.blogs : [];
          recents = recents.filter((blog: BlogEntinty) => blog && blog.id);
          this.recientBlogs = recents.slice(0, 3);
        }

        if (blogsData.length === 0) {
          this.useMockData();
        } else {
          this.blogs = blogsData;
          this.totalPages = Math.ceil(total / this.itemsPerPage) || 1;
          this.usingMockData = false;
        }

        this.blogsLoaded = true;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading blogs:', err);
        this.useMockData();
        this.blogsLoaded = true;
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  private useMockData(): void {
    this.usingMockData = true;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.blogs = MOCK_BLOGS.slice(startIndex, endIndex);
    this.totalPages = Math.ceil(MOCK_BLOGS.length / this.itemsPerPage);
  }

  get featuredBlog(): BlogEntinty | undefined {
    return this.recientBlogs && this.recientBlogs.length > 0 ? this.recientBlogs[0] : undefined;
  }

  get secondaryBlogs(): BlogEntinty[] {
    return this.recientBlogs && this.recientBlogs.length > 1 ? this.recientBlogs.slice(1, 3) : [];
  }

  get allBlogs(): BlogEntinty[] {
    return this.blogs || [];
  }

  navigateToBlog(blogId: string): void {
    if (blogId) {
      this.router.navigate(['dashboard/blog', blogId]);
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.currentPage = page;
      window.scrollTo(0, 0);
      this.loadBlogs();
    }
  }

  get paginationArray(): number[] {
    const pages = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}


