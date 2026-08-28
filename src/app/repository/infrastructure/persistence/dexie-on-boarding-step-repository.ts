import { inject, Injectable } from '@angular/core';
import { OnBoardingStep } from '../../../database/schema/onboarding-step.schema';
import { OnBoardingStepRepository } from '../../port/on-boarding-step-repository.port';
import { AppDatabase } from '../../../database/database';

@Injectable()
export class DexieOnBoardingStepRepository implements OnBoardingStepRepository {
  private readonly db = inject(AppDatabase);

  saveStep(step: OnBoardingStep): Promise<number> {
    return this.db.OnBoardingSteps.put(step);
  }

  getStep(stepNumber: number): Promise<OnBoardingStep | undefined> {
    return this.db.OnBoardingSteps.get(stepNumber);
  }

  patchStep(stepNumber: number, data: Partial<OnBoardingStep>): Promise<void> {
    return this.db.OnBoardingSteps.update(stepNumber, data).then((updated) => {
      if (updated === 0) {
        throw new Error(`Step with stepNumber ${stepNumber} not found`);
      }
    });
  }
}
