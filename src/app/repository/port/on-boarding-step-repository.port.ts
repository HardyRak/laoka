import { Injectable, InjectionToken } from '@angular/core';
import { OnBoardingStep } from '../../database/schema/onboarding-step.schema';
import { Observable } from 'rxjs';

export interface OnBoardingStepRepository {
  getStep(): Promise<OnBoardingStep | undefined>;
  patchStep(stepNumber: number, data: Partial<OnBoardingStep>): Promise<void>;
  saveStep(step: OnBoardingStep): Promise<number>;
  getLiveStep(): Observable<OnBoardingStep | undefined>;
}
export const OnBoardingStepRepository =
  new InjectionToken<OnBoardingStepRepository>('OnBoardingStepRepository');
