import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./onboarding-layout.component').then(
        (m) => m.OnboardingLayoutComponent,
      ),
  },
];
