import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'home',
        title: 'win 12 home',
        loadComponent: () => import('./layout/home/home.component')
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];
