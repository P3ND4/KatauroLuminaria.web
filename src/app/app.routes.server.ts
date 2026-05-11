import { RenderMode, ServerRoute } from '@angular/ssr';
import { prodPrerenderParams } from './shared/prerenderFuncs/prodPrerenderParams';
import { catPrerenderParams } from './shared/prerenderFuncs/catPrerenderParams';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  { path: 'dashboard', renderMode: RenderMode.Prerender },
  { path: 'dashboard/home', renderMode: RenderMode.Prerender },
  { path: 'dashboard/galery', renderMode: RenderMode.Prerender },
  { path: 'dashboard/blog', renderMode: RenderMode.Prerender },
  { path: 'dashboard/team', renderMode: RenderMode.Prerender },
  { path: 'login', renderMode: RenderMode.Prerender },
  { path: 'login/signin', renderMode: RenderMode.Prerender },
  { path: 'login/signup', renderMode: RenderMode.Prerender },
  { path: 'login/forgot-password', renderMode: RenderMode.Prerender },
  { path: 'login/change-pass', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server }
];
