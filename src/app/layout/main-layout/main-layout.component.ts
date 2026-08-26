import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { HeaderComponent } from '../../component/header/header.component';
import { TabNavigationComponent } from '../../component/tab-navigation/tab-navigation.component';
import { TabNavigationService } from '../../services/tab-navigation.service';

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

  private readonly tabNavigationService = inject(TabNavigationService);

  /** Correspondance tab id -> route à ajuster selon ton router */
  private readonly tabRoutes: Record<string, string> = {
    today: '/today',
    calendar: '/calendar',
    profile: '/profile',
  };

  protected onPressTab(tabId: string): void {
    this.tabNavigationService.navigateToTab(tabId);
  }

  protected onProfilePressed(): void {
    this.tabNavigationService.navigateToTab('profile');
  }
}
