import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

export type ChoiceChipTone = 'danger' | 'success';

@Component({
  selector: 'app-choice-chip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choice-chip.component.html',
  styleUrls: ['./choice-chip.component.scss'],
})
export class ChoiceChipComponent {
  /** Emoji affiché à gauche */
  emoji = input.required<string>();

  /** Libellé du chip */
  field = input.required<string>();

  /** État sélectionné (colorié) ou non (état par défaut) */
  selected = input<boolean>(false);

  /** Couleur du variant sélectionné : rouge (non aimé) ou vert (allergie) */
  tone = input<ChoiceChipTone>('danger');

  /** Émis au clic avec le nouvel état (true = variant, false = retour comme avant) */
  toggle = output<boolean>();

  onClick(): void {
    this.toggle.emit(!this.selected());
  }
}
