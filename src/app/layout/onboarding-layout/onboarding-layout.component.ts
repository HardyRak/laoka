import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { IonRouterOutlet } from '@ionic/angular';
import { WizardFooterComponent } from '../../component-container/wizard-footer/wizard-footer.component';
import { WizardHeaderComponent } from '../../component/wizard-header/wizard-header.component';

@Component({
  selector: 'app-onboarding-layout',
  templateUrl: './onboarding-layout.component.html',
  styleUrls: ['./onboarding-layout.component.scss'],
  imports: [IonRouterOutlet, WizardFooterComponent, WizardHeaderComponent],
})
export class OnboardingLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
