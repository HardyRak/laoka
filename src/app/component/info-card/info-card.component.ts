import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [IonIcon, CommonModule],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoCardComponent {
  /** Titre de la carte (ex: "Pourquoi ce duo ?") */
  title = input.required<string>();

  /** Texte explicatif */
  text = input.required<string>();
}
