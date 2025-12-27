import { provideRouter, Routes, withViewTransitions } from '@angular/router';
import { App } from './app';
import { Dashboard } from './features/dashboard/dashboard';
import { Home } from './features/dashboard/home/home';
import { Team } from './features/dashboard/team/team';
import { Galery } from './features/dashboard/galery/galery';
import { Blog } from './features/dashboard/blog/blog';
import { Login } from './features/login/login';
import { Prodct } from './features/dashboard/galery/prodct/prodct';
import { Singular } from './features/dashboard/galery/prodct/singular/singular';
import { Signin } from './features/login/signin/signin';
import { Signup } from './features/login/signup/signup';
import { Cart } from './features/dashboard/cart/cart';

export const routes: Routes = [
    {
        path: '',
        component: App,
        children: [
            { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
            {
                path: 'dashboard', component: Dashboard,
                children: [
                    {path: 'cart', data: {index: -1}, loadComponent: () => import('./features/dashboard/cart/cart').then(m => m.Cart)},
                    { path: 'home', data: {index: 0}, loadComponent: () => import('./features/dashboard/home/home').then(m => m.Home) },
                    { path: 'team', data: {index: 1}, loadComponent: () => import('./features/dashboard/team/team').then(m => m.Team) },
                    { path: 'galery', data: {index: 2}, loadComponent: () => import('./features/dashboard/galery/galery').then(m => m.Galery) },
                    { path: 'blog', data: {index: 3}, loadComponent: () => import('./features/dashboard/blog/blog').then(m => m.Blog) },
                    {
                        path: ':category', loadComponent: () => import('./features/dashboard/galery/prodct/prodct').then(m => m.Prodct), children: [
                            { path: ':id', loadComponent: () => import('./features/dashboard/galery/prodct/singular/singular').then(m => m.Singular) }
                        ]
                    }

                ]
            },
            {
                path: 'login', loadComponent: ()=> import('./features/login/login').then((m)=>m.Login), children: [
                    { path: 'signin', loadComponent: () => import('./features/login/signin/signin').then((m)=>m.Signin) },
                    { path: 'signup', loadComponent: () => import('./features/login/signup/signup').then((m)=>m.Signup)},
                    { path: 'forgot-password', loadComponent: () => import('./features/login/forgot-password/forgot-password').then((m)=>m.ForgotPassword) }
                ]
            },
        ]
    },
    { path: '**', redirectTo: 'dashboard/home' }
];

