import { inject, Injectable } from '@angular/core';
import { OnBoardingStep } from '../database/schema/onboarding-step.schema';
import { OnBoardingStepRepository } from '../repository/port/on-boarding-step-repository.port';

@Injectable({
  providedIn: 'root',
})
export class OnBoardingStepService {
  onboardingStepRepository = inject(OnBoardingStepRepository);

  getStep(): Promise<OnBoardingStep | undefined> {
    return this.onboardingStepRepository.getStep();
  }

  saveStep(step: OnBoardingStep): Promise<number> {
    return this.onboardingStepRepository.saveStep(step);
  }
}
