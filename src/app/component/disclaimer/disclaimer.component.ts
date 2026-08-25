import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-disclaimer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisclaimerComponent {
  /** Texte affiché (par défaut : mention légale Tandem) */
  text = input<string>(
    "Tandem aide à organiser vos repas mais ne fournit pas de diagnostic ni de conseil médical. En cas de pathologie, validez votre alimentation avec un professionnel."
  );
}
