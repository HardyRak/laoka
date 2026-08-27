import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, IonContent } from '@ionic/angular';
import { WizardFooterComponent } from '../../component-container/wizard-footer/wizard-footer.component';
import { WizardHeaderComponent } from '../../component/wizard-header/wizard-header.component';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';

@Component({
  selector: 'app-onboarding-layout',
  templateUrl: './onboarding-layout.component.html',
  styleUrls: ['./onboarding-layout.component.scss'],
  imports: [
    IonRouterOutlet,
    WizardFooterComponent,
    WizardHeaderComponent,
    PageHeaderComponent,
    IonContent,
  ],
})
export class OnboardingLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
