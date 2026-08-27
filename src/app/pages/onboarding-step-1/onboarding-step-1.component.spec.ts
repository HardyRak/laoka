import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingStep1Component } from './onboarding-step-1.component';

describe('OnboardingStep1Component', () => {
  let component: OnboardingStep1Component;
  let fixture: ComponentFixture<OnboardingStep1Component>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
