import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideRouter(routes, withViewTransitions()),
//    provideRouter(routes, withInMemoryScrolling({
//      scrollPositionRestoration: 'top',       // Siempre al top
//      anchorScrolling: 'enabled'             // Scroll hacia anclas (#algo)
//    })),
  ]
};
