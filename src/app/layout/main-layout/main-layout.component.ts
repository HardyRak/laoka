import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';
import { HeaderComponent } from '../../component/header/header.component';
import { TabNavigationComponent } from '../../component/tab-navigation/tab-navigation.component';
import { TabNavigationService } from '../../services/tab-navigation.service';
import { TabStateStore } from '../../store/tab-state.store';

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
  private readonly tabStateStore = inject(TabStateStore);

  private readonly tabNavigationService = inject(TabNavigationService);

  activeTabId = computed<string>(() => this.tabStateStore.activeTab());

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
