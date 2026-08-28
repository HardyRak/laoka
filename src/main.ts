import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { OnBoardingStepRepository } from './app/repository/port/on-boarding-step-repository.port';
import { DexieOnBoardingStepRepository } from './app/repository/infrastructure/persistence/dexie-on-boarding-step-repository';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withComponentInputBinding(),
    ),
    {
      provide: OnBoardingStepRepository,
      useClass: DexieOnBoardingStepRepository,
    },
  ],
});
