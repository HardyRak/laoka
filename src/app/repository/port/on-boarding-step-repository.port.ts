import { OnBoardingStep } from '../../database/schema/onboarding-step.schema';

export interface OnBoardingStepRepository {
  getStep(stepNumber: number): Promise<OnBoardingStep | undefined>;
  patchStep(stepNumber: number, data: Partial<OnBoardingStep>): Promise<void>;
  saveStep(step: OnBoardingStep): Promise<number>;
}
