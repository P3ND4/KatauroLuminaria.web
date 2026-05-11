import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private platformId = inject(PLATFORM_ID);

  setPage(title: string, description: string, canonical?: string): void {
    this.title.setTitle(`${title} | Katauro Luminarias`);
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });

    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    if (canonical) {
      this.setCanonical(canonical);
    }
  }

  private setCanonical(url: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  addJsonLd(schema: object): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  addProductSchema(product: {
    name: string;
    description: string;
    image: string;
    price: number;
    currency?: string;
    availability?: string;
    sku?: string;
  }): void {
    this.addJsonLd({
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      image: product.image,
      sku: product.sku,
      offers: {
        '@type': 'Offer',
        priceCurrency: product.currency ?? 'USD',
        price: product.price,
        availability: product.availability ?? 'https://schema.org/InStock',
      },
    });
  }

  addBlogPostingSchema(post: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    author?: string;
  }): void {
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.headline,
      description: post.description,
      image: post.image,
      datePublished: post.datePublished,
      author: {
        '@type': 'Person',
        name: post.author ?? 'Katauro Luminarias',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Katauro Luminarias',
        logo: { '@type': 'ImageObject', url: 'https://katauro.com/K.svg' },
      },
    });
  }

  addBreadcrumbSchema(items: { name: string; url: string }[]): void {
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  addOrganizationSchema(): void {
    this.addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Katauro Luminarias',
      url: 'https://katauro.com',
      logo: 'https://katauro.com/K.svg',
      description: 'Soluciones de iluminación LED moderna, decorativa y eficiente para hogares y negocios en Cuba.',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'katauro.luminarias@gmail.com',
        contactType: 'customer service',
      },
    });
  }
}
