import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { DishOfDayCardComponent } from '../../component/dish-of-day-card/dish-of-day-card.component';
import { nutrition } from '../../types/dish-nutrition-stat';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  imports: [IonContent, PageHeaderComponent, DishOfDayCardComponent],
})
export class TodayComponent implements OnInit {
  nutrition = nutrition;

  constructor() {}

  ngOnInit() {}
}
