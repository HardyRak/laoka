import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export type FoodOptionTone = 'danger' | 'success';

@Component({
  selector: 'app-food-option-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food-option-card.component.html',
  styleUrls: ['./food-option-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoodOptionCardComponent {
  /** Emoji affiché dans la pastille à gauche */
  emoji = input.required<string>();

  /** Nom de l'aliment */
  label = input.required<string>();

  /** Élément nutritionnel affiché sous le label, ex: "Riche en fibres" */
  nutrition = input.required<string>();

  /** État sélectionné (coché) ou non */
  selected = input<boolean>(false);

  /** Couleur du variant sélectionné : rouge (non aimé) ou vert (allergie) */
  tone = input<FoodOptionTone>('danger');

  /** Émis au clic avec le nouvel état */
  toggle = output<boolean>();

  onClick(): void {
    this.toggle.emit(!this.selected());
  }
}
