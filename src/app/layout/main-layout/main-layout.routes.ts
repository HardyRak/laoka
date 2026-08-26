import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-layout.component').then((m) => m.MainLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'today',
        pathMatch: 'full',
      },
      {
        path: 'today',
        loadComponent: () =>
          import('../../pages/today/today.component').then(
            (m) => m.TodayComponent,
          ),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('../../pages/calendar/calendar.component').then(
            (m) => m.CalendarComponent,
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../../pages/profile/profile.component').then(
            (m) => m.ProfileComponent,
          ),
      },
    ],
  },
];
