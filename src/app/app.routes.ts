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

export const routes: Routes = [
    {
        path: '',
        component: App,
        children: [
            { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
            {
                path: 'dashboard', component: Dashboard,
                children: [
                    { path: 'home', component: Home },
                    { path: 'team', component: Team },
                    { path: 'galery', component: Galery },
                    { path: 'blog', component: Blog },
                    {
                        path: ':category', component: Prodct, children: [
                            { path: ':id', component: Singular }
                        ]
                    }

                ]
            },
            {
                path: 'login', component: Login, children: [
                    { path: 'signin', component: Signin },
                    { path: 'signup', component: Signup }
                ]
            },
        ]
    },
    { path: '**', redirectTo: 'dashboard/home' }
];

