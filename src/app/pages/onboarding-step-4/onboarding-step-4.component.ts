import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-step-4',
  templateUrl: './onboarding-step-4.component.html',
  styleUrls: ['./onboarding-step-4.component.scss'],
  imports: [IonContent, PageHeaderComponent],
})
export class OnboardingStep4Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
