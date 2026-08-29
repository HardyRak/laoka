import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { sideDishes } from '../../types/side-dish.type';
import { OptionCardComponent } from '../../component/option-card/option-card.component';

@Component({
  selector: 'app-onboarding-step-1',
  templateUrl: './onboarding-step-1.component.html',
  styleUrls: ['./onboarding-step-1.component.scss'],
  imports: [IonContent, PageHeaderComponent, OptionCardComponent],
})
export class OnboardingStep1Component implements OnInit {
  sideDish = sideDishes;

  constructor() {}

  ngOnInit() {}
}
