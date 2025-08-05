import { Routes } from '@angular/router';
import { App } from './app';
import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        component: App,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            { path: 'login', redirectTo: 'dashboard', pathMatch: 'full' },
        ]
    }
];
