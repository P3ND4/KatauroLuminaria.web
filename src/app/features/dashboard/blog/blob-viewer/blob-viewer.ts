import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';

import { DatePipe, NgOptimizedImage } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Blog } from '../../../../shared/models/blog/blog.entity';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpService } from '../../../../shared/services/http/http.service';
import { ErrorLogService } from '../../../../shared/services/errors/error.log.service';
import { parseError } from '../../../../shared/services/errors/errorParser';
import { BlogAnalyticsService } from '../../../../shared/services/blog-analytics.service';
import { SeoService } from '../../../../shared/services/seo/seo.service';

@Component({
  selector: 'app-blob-viewer',
  imports: [DatePipe, NgOptimizedImage],
  templateUrl: './blob-viewer.html',
  styleUrl: './blob-viewer.css',
})
export class BlobViewer implements OnInit, OnDestroy {
  blog!: Blog;

  loading = true

  constructor(
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private http: HttpService,
    private errorServ: ErrorLogService,
    private analytics: BlogAnalyticsService,
    private seo: SeoService,
  ) { }
  ngOnInit(): void {
    this.loadBlog();
  }

  loadBlog() {
    const currentBlg = this.route.snapshot.paramMap.get('id');
    if (currentBlg) {
      this.loading = true
      this.http.getBlog(currentBlg).subscribe(
        {
          next: val => {
            this.blog = val as Blog;
            console.log(this.blog)
            this.loading = false;
            const img = this.blog.images?.[0]?.link || '';
            this.seo.setPage(this.blog.title, this.blog.introduction || '', `https://katauro.com/dashboard/blog/${this.blog.id}`);
            this.seo.addBlogPostingSchema({
              headline: this.blog.title,
              description: this.blog.introduction || '',
              image: img,
              datePublished: this.blog.createdAt.toString(),
            });
            this.seo.addBreadcrumbSchema([
              { name: 'Inicio', url: 'https://katauro.com/dashboard/home' },
              { name: 'Blog', url: 'https://katauro.com/dashboard/blog' },
              { name: this.blog.title, url: `https://katauro.com/dashboard/blog/${this.blog.id}` },
            ]);
            this.analytics.init(this.blog.id);
          },
          error: err => {
            this.errorServ.addError(parseError(err));
            this.loading = false;
          }
        }
      )
    }
  }

  getContent() {

    const images: BlogContent[] = this.blog.images.length > 1 ? this.blog.images.slice(1).map((img) => ({
      content: `
      <div class="image-container">
        <div class="image"> 
          <img src="${img.link}" alt="${img.alt || 'blog image'}" class="blog-image"> 
        </div>
        <p class="image-alt">${img.alt || ''}</p>
      </div>`,
      position: img.position
    })) : [];
    console.log('Contenido de texto procesado:', this.blog.blogContent);
    const textContent: BlogContent[] = this.blog.blogContent.map((content) => ({
      content: content.text,
      position: content.position
    }));



    const result = [...images, ...textContent].sort((a, b) => a.position - b.position); // Limitar a los primeros 5 elementos para la vista previa
    return result;
  }


  sanitizeContent(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  ngOnDestroy(): void {
    this.analytics.destroy();
  }
}

interface BlogContent {
  position: number;
  content: string;
}
