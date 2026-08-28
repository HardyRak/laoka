import { Component, inject, OnInit } from '@angular/core';
import { IonRouterOutlet, IonContent } from '@ionic/angular';
import { WizardFooterComponent } from '../../component-container/wizard-footer/wizard-footer.component';
import { WizardHeaderComponent } from '../../component/wizard-header/wizard-header.component';
import { OnBoardingStepStore } from '../../store/onboarding-step.store';

@Component({
  selector: 'app-onboarding-layout',
  templateUrl: './onboarding-layout.component.html',
  styleUrls: ['./onboarding-layout.component.scss'],
  imports: [IonRouterOutlet, WizardFooterComponent, WizardHeaderComponent],
})
export class OnboardingLayoutComponent implements OnInit {
  readonly store = inject(OnBoardingStepStore);
  constructor() {}

  ngOnInit() {}
}
