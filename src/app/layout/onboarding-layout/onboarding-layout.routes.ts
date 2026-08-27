import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./onboarding-layout.component').then(
        (m) => m.OnboardingLayoutComponent,
      ),
    children: [
      {
        path: 'step1',
        loadComponent: () =>
          import('../../pages/onboarding-step-1/onboarding-step-1.component').then(
            (m) => m.OnboardingStep1Component,
          ),
      },
      {
        path: 'step2',
        loadComponent: () =>
          import('../../pages/onboarding-step-2/onboarding-step-2.component').then(
            (m) => m.OnboardingStep2Component,
          ),
      },
      {
        path: 'step3',
        loadComponent: () =>
          import('../../pages/onboarding-step-3/onboarding-step-3.component').then(
            (m) => m.OnboardingStep3Component,
          ),
      },
      {
        path: 'step4',
        loadComponent: () =>
          import('../../pages/onboarding-step-4/onboarding-step-4.component').then(
            (m) => m.OnboardingStep4Component,
          ),
      },
    ],
  },
];
