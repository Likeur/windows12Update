import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        title: 'win 12 home',
        loadComponent: () => import('./layout/home/home.component')
    }
];
