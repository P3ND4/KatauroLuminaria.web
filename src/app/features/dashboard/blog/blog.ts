import { Component, OnInit, ChangeDetectorRef, inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpService } from '../../../shared/services/http/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorLogService } from '../../../shared/services/errors/error.log.service';
import { ASSETS } from '../../../shared/constants/image-library';
import { parseError } from '../../../shared/services/errors/errorParser';
import { Blog as BlogEntinty } from '../../../shared/models/blog/blog.entity';
import { Router } from '@angular/router';
import { SkeletonLoader } from '../../../shared/components/skeleton-loader/skeleton-loader';
import { BoxLoader } from '../../../shared/components/box-loader/box-loader';
import { MOCK_BLOGS } from '../../../shared/mocks/blogs.mock';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, SkeletonLoader, BoxLoader],
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

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadRecients();
      this.loadPages();
    }
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }



  loadRecients() {
    this.httpService.getBlogs(1).subscribe({
      next: (data: any) => {
        let blogsData = Array.isArray(data.blogs) ? (data as { blogs: BlogEntinty[], total: number }).blogs : [];
        blogsData = blogsData.filter(blog => blog && blog.id);

        // Si no hay datos, usar mock
        if (blogsData.length === 0) {
          this.useMockData();
        } else {
          this.recientBlogs = blogsData.slice(0, 3);

          this.usingMockData = false;

          // Asegurar que siempre hay 9 blogs para una página
          this.loadBlogs();
        }


      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading blogs:', err);
        // Usar mock data cuando hay error
        this.useMockData();
        this.blogsLoaded = true;
        this.cdr.detectChanges();
      }
    });
  }

  loadPages() {
    this.httpService.getBlogPages().subscribe({
      next: val => {
        this.totalPages = val as number
      },
      error: err => this.errorServ.addError(parseError(err))
    })
  }

  loadBlogs(): void {
    this.httpService.getBlogs(this.currentPage).subscribe({
      next: (data: any) => {
        let blogsData = Array.isArray(data.blogs) ? (data as { blogs: BlogEntinty[], total: number }).blogs : [];
        blogsData = blogsData.filter(blog => blog && blog.id);

        // Si no hay datos, usar mock
        if (blogsData.length === 0) {
          this.useMockData();
        } else {
          this.blogs = blogsData;
          console.log(this.blogs)
          this.usingMockData = false;

          // Asegurar que siempre hay 9 blogs para una página
          while (this.blogs.length < 9 && this.currentPage === 1) {
            this.blogs.push({} as BlogEntinty);
          }
        }

        this.blogsLoaded = true;
        this.cdr.detectChanges();
      },
      error: (err: HttpErrorResponse) => {
        console.error('Error loading blogs:', err);
        // Usar mock data cuando hay error
        this.useMockData();
        this.blogsLoaded = true;
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

    // Para la primera página, asegurar 9 items
    while (this.blogs.length < 9 && this.currentPage === 1) {
      this.blogs.push({} as BlogEntinty);
    }
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


