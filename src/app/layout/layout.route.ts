import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-layout/main-layout.routes').then((m) => m.routes),
  },
  {
    path: 'onboarding',
    loadChildren: () =>
      import('./onboarding-layout/onboarding-layout.routes').then(
        (m) => m.routes,
      ),
  },
];
