import { Routes } from '@angular/router';
import { App } from './app';
import { Dashboard } from './features/dashboard/dashboard';
import { Home } from './features/dashboard/home/home';
import { Team } from './features/dashboard/team/team';
import { Galery } from './features/dashboard/galery/galery';
import { Blog } from './features/dashboard/blog/blog';
import { Login } from './features/login/login';

export const routes: Routes = [
    {
        path: '',
        component: App,
        children: [
            { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard,
                children: [
                    {path:'home', component: Home},
                    {path:'team', component: Team},
                    {path:'galery', component: Galery},
                    {path:'blog', component: Blog}
                ]
             },
            { path: 'login', component: Login },
        ]
    }
];
