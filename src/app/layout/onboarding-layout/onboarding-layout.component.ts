import { Component, inject, OnInit } from '@angular/core';
import { IonRouterOutlet, IonContent } from '@ionic/angular';
import { WizardFooterComponent } from '../../component-container/wizard-footer/wizard-footer.component';
import { WizardHeaderComponent } from '../../component/wizard-header/wizard-header.component';
import { OnBoardingStepStore } from '../../store/onboarding-step.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding-layout',
  templateUrl: './onboarding-layout.component.html',
  styleUrls: ['./onboarding-layout.component.scss'],
  imports: [IonRouterOutlet, WizardFooterComponent, WizardHeaderComponent],
})
export class OnboardingLayoutComponent implements OnInit {
  readonly store = inject(OnBoardingStepStore);
  private readonly router = inject(Router);

  constructor() {}

  ngOnInit() {}

  async onContinueClicked() {
    const currentStep = this.store.step().stepNumber;
    const totalSteps = this.store.step().totalSteps;
    if (currentStep >= totalSteps) {
      await this.store.patchStep(currentStep, {
        ...this.store.step(),
        isFinished: 1,
      });
      this.router.navigate(['/']);
      return;
    }
    await this.store.patchStep(currentStep, {
      ...this.store.step(),
      stepNumber: currentStep + 1,
    });
    this.router.navigate([`/onboarding/${currentStep + 1}`]);
  }

  async onBackClicked() {
    const currentStep = this.store.step().stepNumber;
    if (currentStep > 1) {
      await this.store.patchStep(currentStep, {
        ...this.store.step(),
        stepNumber: currentStep - 1,
      });
      this.router.navigate([`/onboarding/${currentStep - 1}`]);
    }
  }
}
