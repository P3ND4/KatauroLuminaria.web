import { RenderMode, ServerRoute } from '@angular/ssr';
import { prodPrerenderParams } from './shared/prerenderFuncs/prodPrerenderParams';
import { catPrerenderParams } from './shared/prerenderFuncs/catPrerenderParams';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'dashboard/:category/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams() {
      return prodPrerenderParams();
    },
  },
  {
    path: 'dashboard/:category',
    renderMode: RenderMode.Prerender,
    getPrerenderParams() {
      return catPrerenderParams();
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  }
];
