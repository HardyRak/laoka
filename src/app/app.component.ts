import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { App } from '@capacitor/app';
import { OnBoardingStepService } from './services/onboarding-step.service';
import { AppDatabase } from './database/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  onBoardingStepService = inject(OnBoardingStepService);
  private readonly router = inject(Router);

  constructor() {}

  async ngOnInit(): Promise<void> {
    const step = await this.onBoardingStepService.getStep();

    if (step === undefined) {
      this.router.navigate(['/onboarding/1']);
      this.onBoardingStepService.saveStep({ stepNumber: 1, isFinished: 0 });
    } else if (step.isFinished === 0) {
      this.router.navigate([`/onboarding/${step.stepNumber}`]);
    } else {
      this.router.navigate(['/']);
    }

    if (!Capacitor.isNativePlatform()) {
      return;
    }

    await this.applyStatusBarStyle();

    // Certains téléphones/OS réécrasent le style à chaque retour au premier plan
    App.addListener('appStateChange', ({ isActive }) => {
      if (isActive) {
        this.applyStatusBarStyle();
      }
    });
  }

  private async applyStatusBarStyle(): Promise<void> {
    // La webview passe SOUS la status bar : elle devient transparente
    // et notre header gère lui-même le padding de sécurité (safe-area).
    await StatusBar.setOverlaysWebView({ overlay: true });

    // Style.Light = icônes foncées (pour fond clair, comme notre header)
    // Style.Dark  = icônes claires (pour fond sombre)
    await StatusBar.setStyle({ style: Style.Light });
  }
}
