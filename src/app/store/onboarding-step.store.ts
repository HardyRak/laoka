// on-boarding.store.ts
import {
  signalStore,
  withState,
  withMethods,
  patchState,
  withHooks,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { inject } from '@angular/core';
import { pipe, switchMap, tap } from 'rxjs';
import { OnBoardingStep } from '../database/schema/onboarding-step.schema';
import { OnBoardingStepService } from '../services/onboarding-step.service';

type OnBoardingState = {
  step: OnBoardingStep;
  loading: boolean;
};

const initialState: OnBoardingState = {
  step: { stepNumber: 1, isFinished: 0, totalSteps: 4 },
  loading: true,
};

export const OnBoardingStepStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, service = inject(OnBoardingStepService)) => ({
    watchStep: rxMethod<void>(
      pipe(
        switchMap(() => service.liveStep()),
        tap((step) => patchState(store, { step, loading: false })),
      ),
    ),

    async patchStep(stepNumber: number, step: OnBoardingStep) {
      await service.patchStep(stepNumber, step);
      // pas besoin de patchState manuel : liveQuery va émettre automatiquement
    },
  })),
  withHooks({
    onInit(store) {
      store.watchStep();
    },
  }),
);
