import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { OnBoardingStep } from './schema/onboarding-step.schema';

@Injectable({
  providedIn: 'root',
})
export class AppDatabase extends Dexie {
  OnBoardingSteps!: Table<OnBoardingStep, number>;
  constructor() {
    super('MyAppDatabase');

    this.version(1).stores({
      steps: 'stepNumber',
    });
  }
}
