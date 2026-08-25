import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

export interface TabItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-tab-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss'],
})
export class TabNavigationComponent {
  /** Liste des onglets à afficher */
  tabs = input<TabItem[]>([
    { id: 'today', label: "Aujourd'hui" },
    { id: 'calendar', label: 'Calendrier' },
    { id: 'profile', label: 'Profil' },
  ]);

  /** Id de l'onglet actuellement actif */
  activeTabId = input<string>('today');

  /** Émet l'id de l'onglet sur lequel l'utilisateur a appuyé */
  tabPressed = output<string>();

  onTabClick(tabId: string): void {
    this.tabPressed.emit(tabId);
  }
}
