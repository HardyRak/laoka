import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  imports: [IonContent, PageHeaderComponent],
})
export class TodayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
