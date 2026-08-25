import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../component/page-header/page-header.component';
import { NameFieldComponent } from '../../component/name-field/name-field.component';
import { ChoiceGroupComponent } from '../../component-container/choice-group/choice-group.component';
import { sideDishes } from '../../types/side-dish.type';
import { ChoiceChipComponent } from '../../component/choice-chip/choice-chip.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    PageHeaderComponent,
    NameFieldComponent,
    ChoiceGroupComponent,
    ChoiceChipComponent,
  ],
})
export class ProfileComponent implements OnInit {
  protected sideDish = sideDishes;

  constructor() {}

  ngOnInit() {}
}
