import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';

@Component({
  selector: 'app-onboarding-step-1',
  templateUrl: './onboarding-step-1.component.html',
  styleUrls: ['./onboarding-step-1.component.scss'],
  imports: [IonContent, PageHeaderComponent],
})
export class OnboardingStep1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
