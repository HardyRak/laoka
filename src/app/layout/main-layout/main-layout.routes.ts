import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-layout.component').then((m) => m.MainLayoutComponent),
    children: [],
  },
];
