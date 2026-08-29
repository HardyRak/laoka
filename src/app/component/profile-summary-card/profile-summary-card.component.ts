import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-profile-summary-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-summary-card.component.html',
  styleUrls: ['./profile-summary-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileSummaryCardComponent {
  /** Prénom de l'utilisateur */
  name = input.required<string>();

  /** Nombre d'accompagnements écartés */
  excludedCount = input<number>(0);

  /** Nombre d'allergies déclarées */
  allergiesCount = input<number>(0);

  /** Contrainte alimentaire, ex: "Diabète" (optionnel) */
  constraint = input<string>();

  /** Initiale affichée dans l'avatar */
  initial = computed(() => this.name().trim().charAt(0).toUpperCase());
}
