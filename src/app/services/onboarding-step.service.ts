import { inject, Injectable } from '@angular/core';
import { OnBoardingStep } from '../database/schema/onboarding-step.schema';
import { OnBoardingStepRepository } from '../repository/port/on-boarding-step-repository.port';
import { Observable } from 'rxjs';

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

  patchStep(stepNumber: number, data: Partial<OnBoardingStep>): Promise<void> {
    return this.onboardingStepRepository.patchStep(stepNumber, data);
  }

  liveStep(): Observable<OnBoardingStep | undefined> {
    return this.onboardingStepRepository.getLiveStep();
  }
}
