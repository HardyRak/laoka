import { Component, OnInit } from '@angular/core';
import { IonContent, IonInputPasswordToggle } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { MonthCalendarComponent } from '../../component/month-calendar/month-calendar.component';
import { calendarMeals } from '../../types/calendar-meal.type';
import { PillButtonComponent } from '../../component/pill-button/pill-button.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  imports: [
    IonContent,
    PageHeaderComponent,
    MonthCalendarComponent,
    PillButtonComponent,
  ],
})
export class CalendarComponent implements OnInit {
  constructor() {}
  protected calendarMeals = calendarMeals;
  ngOnInit() {}
}
