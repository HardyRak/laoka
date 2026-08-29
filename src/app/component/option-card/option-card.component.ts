import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type OptionCardTone = 'danger' | 'success' | 'neutral';

@Component({
  selector: 'app-option-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionCardComponent {
  /** Emoji affiché dans la pastille à gauche */
  emoji = input.required<string>();

  /** Nom de l'option */
  label = input.required<string>();

  /** Élément nutritionnel ou description affiché sous le label */
  nutrition = input.required<string>();

  /** État sélectionné (coché) ou non */
  selected = input<boolean>(false);

  /** Couleur du variant sélectionné : rouge (non aimé), vert (allergie) ou neutre (pas de teinte, juste le check) */
  tone = input<OptionCardTone>('danger');

  /** Émis au clic avec le nouvel état */
  toggle = output<boolean>();

  onClick(): void {
    this.toggle.emit(!this.selected());
  }
}
