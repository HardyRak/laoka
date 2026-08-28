import { Injectable, InjectionToken } from '@angular/core';
import { OnBoardingStep } from '../../database/schema/onboarding-step.schema';

export interface OnBoardingStepRepository {
  getStep(): Promise<OnBoardingStep | undefined>;
  patchStep(stepNumber: number, data: Partial<OnBoardingStep>): Promise<void>;
  saveStep(step: OnBoardingStep): Promise<number>;
}
export const OnBoardingStepRepository =
  new InjectionToken<OnBoardingStepRepository>('OnBoardingStepRepository');
