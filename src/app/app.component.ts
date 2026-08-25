import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
  async ngOnInit(): Promise<void> {
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
