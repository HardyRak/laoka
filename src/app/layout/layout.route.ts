import { Routes } from '@angular/router';
import { onboardingGuard } from './onboarding-guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main-layout/main-layout.routes').then((m) => m.routes),
  },
  {
    path: 'onboarding',
    canActivate: [onboardingGuard],
    loadChildren: () =>
      import('./onboarding-layout/onboarding-layout.routes').then(
        (m) => m.routes,
      ),
  },
];
