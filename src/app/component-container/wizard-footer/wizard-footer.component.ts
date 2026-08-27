import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackButtonComponent } from '../../component/back-button/back-button.component';
import {
  PillButtonComponent,
  PillButtonIcon,
} from '../../component/pill-button/pill-button.component';

@Component({
  selector: 'app-wizard-footer',
  standalone: true,
  imports: [CommonModule, BackButtonComponent, PillButtonComponent],
  templateUrl: './wizard-footer.component.html',
  styleUrls: ['./wizard-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardFooterComponent {
  /** Affiche le bouton "Retour" à gauche. false: le bouton principal reste seul, aligné à droite */
  showBack = input(false);

  /** Texte du bouton retour */
  backLabel = input('Retour');

  /** Texte du bouton principal (ex: "Continuer", "Créer mon calendrier") */
  continueLabel = input.required<string>();

  /** Icône du bouton principal : flèche pour une étape intermédiaire, check pour l'étape finale */
  continueIcon = input<PillButtonIcon>('arrow-right');

  /** Désactive le bouton principal */
  continueDisabled = input(false);

  backClicked = output<void>();
  continueClicked = output<void>();

  onBack(): void {
    this.backClicked.emit();
  }

  onContinue(): void {
    this.continueClicked.emit();
  }
}
