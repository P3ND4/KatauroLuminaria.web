import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { IMAGE_LOADER } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withFetch()), provideAnimations(), provideClientHydration(withEventReplay()),
    {
      provide: IMAGE_LOADER,
      useValue: (config: { src: string, width?: number, loaderParams?: any }) => {
        let url = config.src;
        if (!url.startsWith('http')) {
          url = `https://res.cloudinary.com/dmhadvchw/image/upload/${url}`;
        }
        if (url.includes('res.cloudinary.com')) {
          const hasTransforms = !/\/upload\/v\d+\//.test(url);
          if (hasTransforms) {
            // URL: /upload/q_auto,f_auto/v.../img.jpg
            url = url.replace(/\/upload\/([^/]+)\/v(\d+)\//, (match, transforms, version) => {
              if (!transforms.includes('f_auto')) {
                transforms = `f_auto,q_auto,${transforms}`;
              }
              if (!transforms.includes('w_') && !config.loaderParams?.skipResize) {
                const w = config.width ? `w_${config.width}` : (config.loaderParams?.isBanner ? 'w_1200' : null);
                if (w) transforms = `${w},${transforms}`;
              }
              return `/upload/${transforms}/v${version}/`;
            });
          } else {
            // URL: /upload/v.../img.jpg (sin transformaciones previas)
            url = url.replace(/\/upload\/(v\d+)\//, (match, version) => {
              let transforms = 'f_auto,q_auto';
              if (!config.loaderParams?.skipResize) {
                const w = config.width ? `w_${config.width}` : (config.loaderParams?.isBanner ? 'w_1200' : null);
                if (w) transforms = `${w},${transforms}`;
              }
              return `/upload/${transforms}/${version}/`;
            });
          }
          // Aplicar calidad personalizada si se especifica
          if (config.loaderParams?.quality) {
            url = url.replace('q_auto', config.loaderParams.quality);
          }
        }
        return url;
      }
    }
  ]
};
