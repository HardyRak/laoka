import { Injectable, inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TabStateStore } from '../store/tab-state.store';

@Injectable({
  providedIn: 'root',
})
export class TabNavigationService {
  private readonly navCtrl = inject(NavController);

  private readonly tabStateStore = inject(TabStateStore);

  private readonly tabRoutes: Record<string, string> = {
    today: '/today',
    calendar: '/calendar',
    profile: '/profile',
  };

  navigateToTab(tabId: string): void {
    this.tabStateStore.switchTab(tabId);
    const route = this.tabRoutes[tabId];
    if (route) {
      this.navCtrl.navigateRoot(route, {
        animated: false,
      });
    }
  }
}
