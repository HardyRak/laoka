import { Component, inject, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { DishOfDayCardComponent } from '../../component/dish-of-day-card/dish-of-day-card.component';
import { nutrition } from '../../types/dish-nutrition-stat';
import { InfoCardComponent } from '../../component/info-card/info-card.component';
import { NextMenusSectionComponent } from '../../component-container/next-menus-section/next-menus-section.component';
import { sideDishes } from '../../types/side-dish.type';
import { MealListItemComponent } from '../../component/meal-list-item/meal-list-item.component';
import { AlertBannerComponent } from '../../component/alert-banner/alert-banner.component';
import { DisclaimerComponent } from '../../component/disclaimer/disclaimer.component';
import { TabNavigationService } from '../../services/tab-navigation.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  imports: [
    IonContent,
    PageHeaderComponent,
    DishOfDayCardComponent,
    InfoCardComponent,
    NextMenusSectionComponent,
    MealListItemComponent,
    DisclaimerComponent,
  ],
})
export class TodayComponent implements OnInit {
  private readonly tabNavigationService = inject(TabNavigationService);

  nutrition = nutrition;

  nextMenus = sideDishes.slice(0, 3);

  constructor() {}

  ngOnInit() {}

  gotToCalendarPage() {
    this.tabNavigationService.navigateToTab('calendar');
  }
}
