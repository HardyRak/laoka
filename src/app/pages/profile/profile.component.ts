import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { NameFieldComponent } from '../../component/name-field/name-field.component';
import { ChoiceGroupComponent } from '../../component-container/choice-group/choice-group.component';
import { sideDishes } from '../../types/side-dish.type';
import { ChoiceChipComponent } from '../../component/choice-chip/choice-chip.component';
import { IonContent } from '@ionic/angular';
import { allergies } from '../../types/allergy.type';
import { healthConstraints } from '../../types/health-constraint.type';
import { RadioOptionCardComponent } from '../../component/radio-option-card/radio-option-card.component';
import { PillButtonComponent } from '../../component/pill-button/pill-button.component';
import { DisclaimerComponent } from '../../component/disclaimer/disclaimer.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    IonContent,
    PageHeaderComponent,
    NameFieldComponent,
    ChoiceGroupComponent,
    ChoiceChipComponent,
    RadioOptionCardComponent,
    PillButtonComponent,
    DisclaimerComponent,
  ],
})
export class ProfileComponent implements OnInit {
  protected sideDish = sideDishes;
  protected allergies = allergies;
  protected healthConstraints = healthConstraints;

  constructor() {}

  ngOnInit() {}
}
