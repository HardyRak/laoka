import { CanActivateFn } from '@angular/router';
import { OnBoardingStepStore } from '../store/onboarding-step.store';
import { inject } from '@angular/core';

export const onboardingGuard: CanActivateFn = (route, state) => {
  const service = inject(OnBoardingStepStore);
  if (service.step().isFinished === 1) {
    return false;
  }
  return true;
};
