import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { OnBoardingStep } from './schema/onboarding-step.schema';

@Injectable({
  providedIn: 'root',
})
export class AppDatabase extends Dexie {
  onBoardingSteps!: Table<OnBoardingStep, number>;
  constructor() {
    super('AppDatabase');

    this.version(1).stores({
      onBoardingSteps: 'stepNumber',
    });
  }
}
