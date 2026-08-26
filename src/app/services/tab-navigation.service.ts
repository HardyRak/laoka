import { Injectable, inject } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class TabNavigationService {
  private readonly navCtrl = inject(NavController);

  private readonly tabRoutes: Record<string, string> = {
    today: '/today',
    calendar: '/calendar',
    profile: '/profile',
  };

  navigateToTab(tabId: string): void {
    const route = this.tabRoutes[tabId];

    if (route) {
      this.navCtrl.navigateRoot(route, {
        animated: false,
      });
    }
  }
}
