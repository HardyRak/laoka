import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { IonContent } from '@ionic/angular';
import { allergies } from '../../types/allergy.type';
import { OptionCardComponent } from '../../component/option-card/option-card.component';

@Component({
  selector: 'app-onboarding-step-2',
  templateUrl: './onboarding-step-2.component.html',
  styleUrls: ['./onboarding-step-2.component.scss'],
  imports: [PageHeaderComponent, IonContent, OptionCardComponent],
})
export class OnboardingStep2Component implements OnInit {
  allergies = allergies;

  constructor() {}

  ngOnInit() {}
}
