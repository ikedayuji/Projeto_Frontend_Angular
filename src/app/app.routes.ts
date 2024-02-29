import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'main',
        loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    }
];
