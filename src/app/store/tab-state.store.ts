import { Injectable } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export interface TabState {
  activeTab: string;
}

export const initialTabState: TabState = {
  activeTab: 'today',
};

export const TabStateStore = signalStore(
  { providedIn: 'root' },
  withState(initialTabState),
  withMethods((store) => ({
    switchTab(tabId: string): void {
      patchState(store, {
        activeTab: tabId,
      });
    },
  })),
);
