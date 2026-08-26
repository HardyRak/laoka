import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { DishOfDayCardComponent } from '../../component/dish-of-day-card/dish-of-day-card.component';
import { nutrition } from '../../types/dish-nutrition-stat';
import { InfoCardComponent } from '../../component/info-card/info-card.component';
import { NextMenusSectionComponent } from '../../component-container/next-menus-section/next-menus-section.component';
import { sideDishes } from '../../types/side-dish.type';
import { MealListItemComponent } from '../../component/meal-list-item/meal-list-item.component';

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
  ],
})
export class TodayComponent implements OnInit {
  nutrition = nutrition;

  nextMenus = sideDishes.slice(0, 3);

  constructor() {}

  ngOnInit() {}
}
