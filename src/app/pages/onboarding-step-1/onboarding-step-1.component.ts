import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { FoodOptionCardComponent } from '../../component/food-option-card/food-option-card.component';
import { sideDishes } from '../../types/side-dish.type';

@Component({
  selector: 'app-onboarding-step-1',
  templateUrl: './onboarding-step-1.component.html',
  styleUrls: ['./onboarding-step-1.component.scss'],
  imports: [IonContent, PageHeaderComponent, FoodOptionCardComponent],
})
export class OnboardingStep1Component implements OnInit {
  sideDish = sideDishes;

  constructor() {}

  ngOnInit() {}
}
