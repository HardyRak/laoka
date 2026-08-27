import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-onboarding-step-2',
  templateUrl: './onboarding-step-2.component.html',
  styleUrls: ['./onboarding-step-2.component.scss'],
  imports: [PageHeaderComponent, IonContent],
})
export class OnboardingStep2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
