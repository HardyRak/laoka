import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { OptionCardComponent } from '../../component/option-card/option-card.component';
import { healthConstraints } from '../../types/health-constraint.type';

@Component({
  selector: 'app-onboarding-step-3',
  templateUrl: './onboarding-step-3.component.html',
  styleUrls: ['./onboarding-step-3.component.scss'],
  imports: [IonContent, PageHeaderComponent, OptionCardComponent],
})
export class OnboardingStep3Component implements OnInit {
  healthConstraints = healthConstraints;
  constructor() {}

  ngOnInit() {}
}
