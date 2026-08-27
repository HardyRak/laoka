import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';

@Component({
  selector: 'app-onboarding-step-3',
  templateUrl: './onboarding-step-3.component.html',
  styleUrls: ['./onboarding-step-3.component.scss'],
  imports: [IonContent, PageHeaderComponent],
})
export class OnboardingStep3Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
