import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: '/index', pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import('./pages/index/index.routes')
    },
    {
        path: '**',
        loadComponent: () => import('./notfound/notfound.component')
    },
];
