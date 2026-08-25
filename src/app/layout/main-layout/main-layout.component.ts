import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { HeaderComponent } from '../../component/header/header.component';
import { TabNavigationComponent } from '../../component/tab-navigation/tab-navigation.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    IonRouterOutlet,
    HeaderComponent,
    TabNavigationComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  /** Id de l'onglet actif (à relier à ta logique de routing si besoin) */
  activeTabId = signal<string>('today');

  /** Correspondance tab id -> route à ajuster selon ton router */
  private readonly tabRoutes: Record<string, string> = {
    today: '/today',
    calendar: '/calendar',
    profile: '/profile',
  };

  constructor(private readonly navCtrl: NavController) {}

  onTabPressed(tabId: string): void {
    this.activeTabId.set(tabId);
    const route = this.tabRoutes[tabId];
    if (route) {
      // animated: false → changement d'onglet instantané, sans la
      // transition "push" (slide) qu'Ionic joue par défaut sur une
      // navigation classique. C'est ce qui donnait l'impression que
      // l'ancienne page restait affichée pendant que la nouvelle chargeait.
      this.navCtrl.navigateRoot(route, { animated: false });
    }
  }
}
