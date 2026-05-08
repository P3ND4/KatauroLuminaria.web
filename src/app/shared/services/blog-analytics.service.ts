import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlogAnalyticsService {
  private viewToken: string | null = null;
  private viewType: 'signed' | 'unsigned' | null = null;
  private blogId: string | null = null;

  private scrollDepth = 0;
  private deepestScroll = 0;
  private startTime = 0;
  private linkClicks = 0;
  private imageClicks = 0;
  private ctaClicks = 0;
  private shares = 0;
  private bounced = true;
  private completed = false;
  private sendInterval: any;
  private cleanup: (() => void)[] = [];

  constructor(private http: HttpService, private auth: AuthService) { }

  init(blogId: string): void {
    this.blogId = blogId;
    this.startTime = Date.now();
    this.registerView();
    this.setupScrollTracking();
    this.setupClickTracking();
    this.setupPeriodicSend();
    this.setupPageLeave();
  }

  private registerView(): void {
    const user = this.auth.currentUser;
    const body: any = {};
    if (user) {
      body.userId = user.id;
    }

    this.http.recordBlogView(this.blogId!, body).subscribe({
      next: (res: any) => {
        this.viewToken = res.viewToken;
        this.viewType = res.viewType;
      },
      error: (_err: any) => console.warn('No se pudo registrar vista:', _err)
    });
  }

  private setupScrollTracking(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const percent = parseInt(entry.target.getAttribute('data-scroll') || '0', 10);
            if (percent > this.deepestScroll) {
              this.deepestScroll = percent;
              this.scrollDepth = percent;
              this.bounced = false;
              if (percent >= 90) {
                this.completed = true;
              }
            }
          }
        });
      },
      { threshold: 0 }
    );

    setTimeout(() => {
      const markers = document.querySelectorAll('.scroll-marker');
      markers.forEach(marker => observer.observe(marker));
      this.cleanup.push(() => observer.disconnect());
    }, 1000);
  }

  private setupClickTracking(): void {
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.blog-preview a')) {
        this.linkClicks++;
        this.bounced = false;
      } else if (target.closest('.blog-preview img')) {
        this.imageClicks++;
        this.bounced = false;
      } else if (target.closest('.cta-button, [data-cta]')) {
        this.ctaClicks++;
        this.bounced = false;
      }

      if (target.closest('.share-button, [data-share]')) {
        this.shares++;
        this.bounced = false;
      }
    };

    document.addEventListener('click', clickHandler);
    this.cleanup.push(() => document.removeEventListener('click', clickHandler));
  }

  private setupPeriodicSend(): void {
    this.sendInterval = setInterval(() => {
      this.sendMetrics();
    }, 30000);
  }

  private setupPageLeave(): void {
    const handler = () => this.sendMetrics();
    window.addEventListener('beforeunload', handler);
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') handler();
    });
    this.cleanup.push(() => {
      window.removeEventListener('beforeunload', handler);
      window.removeEventListener('visibilitychange', handler);
    });
  }

  private sendMetrics(): void {
    if (!this.viewToken || !this.viewType || !this.blogId) return;

    const timeSpent = Math.round((Date.now() - this.startTime) / 1000);

    this.http.updateBlogMetrics(this.blogId, {
      viewToken: this.viewToken,
      viewType: this.viewType,
      scrollDepth: this.scrollDepth,
      timeSpent,
      bounced: this.bounced,
      completed: this.completed,
      shares: this.shares,
      linkClicks: this.linkClicks,
      imageClicks: this.imageClicks,
      ctaClicks: this.ctaClicks,
    }).subscribe({
      next: () => console.log('Metrics sent'),
      error: (_err: any) => console.warn('No se pudieron enviar métricas:', _err)
    });

    this.linkClicks = 0;
    this.imageClicks = 0;
    this.ctaClicks = 0;
    this.shares = 0;
  }

  destroy(): void {
    this.sendMetrics();
    clearInterval(this.sendInterval);
    this.cleanup.forEach(fn => fn());
  }
}
