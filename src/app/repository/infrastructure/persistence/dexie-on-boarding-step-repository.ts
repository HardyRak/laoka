import { inject, Injectable } from '@angular/core';
import { OnBoardingStep } from '../../../database/schema/onboarding-step.schema';
import { OnBoardingStepRepository } from '../../port/on-boarding-step-repository.port';
import { AppDatabase } from '../../../database/database';
import { from, Observable } from 'rxjs';
import { liveQuery } from 'dexie';

@Injectable()
export class DexieOnBoardingStepRepository implements OnBoardingStepRepository {
  private readonly db = inject(AppDatabase);

  saveStep(step: OnBoardingStep): Promise<number> {
    return this.db.onBoardingSteps.put(step);
  }

  getStep(): Promise<OnBoardingStep | undefined> {
    return this.db.onBoardingSteps.orderBy('stepNumber').first();
  }

  patchStep(stepNumber: number, data: Partial<OnBoardingStep>): Promise<void> {
    return this.db.onBoardingSteps.update(stepNumber, data).then((updated) => {
      if (updated === 0) {
        throw new Error(`Step with stepNumber ${stepNumber} not found`);
      }
    });
  }

  getLiveStep(): Observable<OnBoardingStep | undefined> {
    return from(
      liveQuery(() => this.db.onBoardingSteps.orderBy('stepNumber').first()),
    );
  }
}
