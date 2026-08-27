import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wizard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WizardHeaderComponent {
  /** Étape actuelle (1-indexée) */
  currentStep = input.required<number>();

  /** Nombre total d'étapes */
  totalSteps = input.required<number>();

  /** Largeur de la barre de progression, en % */
  progress = computed(() => {
    const total = this.totalSteps();
    if (total <= 0) {
      return 0;
    }
    const ratio = this.currentStep() / total;
    return Math.min(100, Math.max(0, ratio * 100));
  });
}
